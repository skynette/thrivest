// Common types used throughout the application

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'APPLICANT' | 'REVIEWER' | 'ADMIN' | 'SUPER_ADMIN' | 'admin' | 'user';
  firstName?: string;
  lastName?: string;
  phone?: string;
  isActive?: boolean;
}

export interface UserWithApplications extends User {
  profile?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  applications?: Array<{
    id: string;
    fundType: FundType;
    status: ApplicationStatus;
    submittedAt?: string;
    businessName?: string;
  }>;
}

// Application types
export type ApplicationStatus = 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'NEEDS_REVISION';
export type FundType = 'IGNITE' | 'ELEVATE';

export interface Application extends BaseEntity {
  userId: string;
  status: ApplicationStatus;
  fundType: FundType;
  businessName: string;
  businessLocation: string;
  yearFounded: string;
  legalStatus: string;
  sector: string;
  website?: string;
  founderName: string;
  founderGender: string;
  founderRole: string;
  founderEmail: string;
  founderEducation: string;
  motivation: string;
  businessIdea: string;
  targetMarket: string;
  problem: string;
  vision: string;
  developmentStage: string[];
  productDescription?: string;
  demoLink?: string;
  valueProposition?: string;
  competitiveLandscape?: string;
  marketStrategy?: string;
  pricingModel?: string;
  fundingRequested: string;
  fundUtilization: string;
  timeline: string;
  previousFunding?: string;
  impactDescription?: string;
  jobsAnticipated?: string;
  inclusionPlans?: string;
  privacyAccepted: boolean;
  informationAccurate: boolean;
  digitalSignature: boolean;
  submittedAt?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  reviewNotes?: string;
  user?: User;
  documents?: ApplicationDocument[];
}

export interface ApplicationDocument extends BaseEntity {
  applicationId: string;
  documentType: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface ApplicationFormData {
  fundType: FundType;
  businessName: string;
  businessLocation: string;
  yearFounded: string;
  legalStatus: string;
  sector: string;
  website?: string;
  founderName: string;
  founderGender: string;
  founderRole: string;
  founderEmail: string;
  founderEducation: string;
  motivation: string;
  businessIdea: string;
  targetMarket: string;
  problem: string;
  vision: string;
  developmentStage: string[];
  productDescription?: string;
  demoLink?: string;
  valueProposition?: string;
  competitiveLandscape?: string;
  marketStrategy?: string;
  pricingModel?: string;
  fundingRequested: string;
  fundUtilization: string;
  timeline: string;
  previousFunding?: string;
  impactDescription?: string;
  jobsAnticipated?: string;
  inclusionPlans?: string;
  privacyAccepted: boolean;
  informationAccurate: boolean;
  digitalSignature: boolean;
}

// API Response types
export interface ApplicationsResponse {
  success: boolean;
  applications: Application[];
  message?: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  token: string;
  message?: string;
}

export interface ProfileResponse {
  success: boolean;
  user: User;
  message?: string;
}

export interface UserStatsResponse {
  success: boolean;
  stats: {
    overview: {
      total: number;
      active: number;
      inactive: number;
      thisMonth: number;
      growthRate: number;
    };
    byRole: Array<{
      role: string;
      _count: {
        role: number;
      };
    }>;
    recent: User[];
  };
  message?: string;
}

export interface UsersResponse {
  success: boolean;
  data: User[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  message?: string;
}

export interface UserResponse {
  success: boolean;
  user: UserWithApplications;
  message?: string;
} 