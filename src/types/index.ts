import { User, WorkerProfile, EmployerProfile, WorkExperience, Education, Skill } from '@prisma/client'

export type UserWithProfile = User & {
  workerProfile?: WorkerProfile | null
  employerProfile?: EmployerProfile | null
}

export type WorkerProfileWithDetails = WorkerProfile & {
  user: User
  workExperiences: WorkExperience[]
  educations: Education[]
  skills: Skill[]
}

export type EmployerProfileWithUser = EmployerProfile & {
  user: User
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface WorkerSearchParams {
  nationality?: string
  skills?: string[]
  visaStatus?: string
  minExperience?: number
  maxExperience?: number
  availableFrom?: string
  page?: number
  pageSize?: number
}
