import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['EMPLOYER', 'WORKER'], {
    message: 'Please select a role',
  }),
})

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const workerProfileSchema = z.object({
  nationality: z.string().min(2, 'Nationality is required'),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  bio: z.string().optional(),
  visaStatus: z.enum(['E9', 'H2', 'F4', 'F5', 'F6', 'OTHER']).optional(),
  availableFrom: z.string().optional(),
  preferredLocation: z.string().optional(),
  expectedSalary: z.number().optional(),
  koreanLevel: z.enum(['BASIC', 'INTERMEDIATE', 'ADVANCED', 'NATIVE']).optional(),
  englishLevel: z.enum(['BASIC', 'INTERMEDIATE', 'ADVANCED', 'NATIVE']).optional(),
  nativeLanguage: z.string().optional(),
})

export const employerProfileSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  businessNumber: z.string().optional(),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  description: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  phone: z.string().optional(),
  address: z.string().optional(),
})

export type SignUpInput = z.infer<typeof signUpSchema>
export type SignInInput = z.infer<typeof signInSchema>
export type WorkerProfileInput = z.infer<typeof workerProfileSchema>
export type EmployerProfileInput = z.infer<typeof employerProfileSchema>
