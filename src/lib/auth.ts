import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { prisma } from './prisma'

const JWT_SECRET = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || 'fallback-secret-key'
)

export interface SessionUser {
  userId: string
  email: string
  role: 'EMPLOYER' | 'WORKER'
}

export async function getSession(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')

    if (!token) {
      return null
    }

    const { payload } = await jwtVerify(token.value, JWT_SECRET)
    return payload as unknown as SessionUser
  } catch (error) {
    return null
  }
}

export async function getCurrentUser() {
  const session = await getSession()

  if (!session) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      workerProfile: {
        include: {
          workExperiences: true,
          educations: true,
          skills: true,
        },
      },
      employerProfile: true,
    },
  })

  if (!user) {
    return null
  }

  // Remove password from response
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('Unauthorized')
  }

  return user
}

export async function requireRole(role: 'EMPLOYER' | 'WORKER') {
  const user = await requireAuth()

  if (user.role !== role) {
    throw new Error('Forbidden')
  }

  return user
}
