# ThriVest Backend Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Copy the example environment file and configure your settings:
```bash
cp .env.example .env
```

Edit the `.env` file with your actual configuration:
- Set your MongoDB connection string in `DATABASE_URL`
- Configure JWT secret and other settings
- Update admin credentials if needed

### 3. Database Setup
Generate Prisma client and push schema to database:
```bash
npm run db:generate
npm run db:push
```

### 4. Seed Admin Users
Create default admin users:
```bash
npm run seed:admin
```

This will create:
- **Admin User**: admin@thrivestafrica.com (password: Admin123!@#)
- **Super Admin**: superadmin@thrivestafrica.com (password: SuperAdmin123!@#)

### 5. Start the Server
For development:
```bash
npm run dev
```

For production:
```bash
npm run build
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/login` - Admin login
- `GET /api/auth/me` - Get current user

### Applications
- `POST /api/applications` - Create application
- `GET /api/applications/my-applications` - Get user's applications
- `GET /api/applications/:id` - Get specific application
- `PUT /api/applications/:id` - Update application
- `POST /api/applications/:id/submit` - Submit application
- `POST /api/applications/:id/upload` - Upload documents

#### Admin Application Endpoints
- `GET /api/applications/admin/all` - Get all applications (admin)
- `GET /api/applications/admin/:id` - Get application by ID (admin)
- `PUT /api/applications/admin/:id` - Update application (admin)
- `DELETE /api/applications/admin/:id` - Delete application (admin)
- `PATCH /api/applications/:id/status` - Update application status
- `GET /api/applications/admin/stats/overview` - Application statistics

### Users
- `GET /api/users` - Get all users (admin)
- `GET /api/users/:id` - Get user by ID (admin)
- `POST /api/users` - Create new user (admin)
- `PUT /api/users/:id` - Update user details (admin)
- `DELETE /api/users/:id` - Delete user (super admin only)
- `PATCH /api/users/:id/role` - Update user role (admin)
- `PATCH /api/users/:id/status` - Activate/deactivate user (admin)
- `GET /api/users/stats/overview` - User statistics (admin)

### Contact
- `POST /api/contact` - Submit contact form

## Admin Access

### Default Credentials
- **Admin**: admin@thrivestafrica.com / Admin123!@#
- **Super Admin**: superadmin@thrivestafrica.com / SuperAdmin123!@#

### Role Permissions
- **APPLICANT**: Can create and manage own applications
- **REVIEWER**: Can review applications
- **ADMIN**: Can manage users and applications
- **SUPER_ADMIN**: Full access including user deletion

## Features

### Admin Dashboard Backend Features
✅ **User Management**
- View all users with search, filter, sort, pagination
- Create new users with role assignment
- Update user details and status
- Delete users (super admin only)
- Role-based access control

✅ **Application Management**
- View all applications with comprehensive filtering
- Search by business name, founder name, email, sector
- Filter by status, fund type, date ranges
- Sort by any field with pagination
- Full CRUD operations on applications
- Status updates with review notes
- File upload handling

✅ **Statistics & Analytics**
- User growth metrics and role distribution
- Application submission trends and status breakdowns
- Recent activity tracking

✅ **Security Features**
- JWT-based authentication
- Role-based authorization middleware
- Secure password hashing
- File upload validation
- Rate limiting
- CORS configuration

✅ **API Documentation**
- Comprehensive endpoint documentation
- Request/response examples
- Error handling guidelines

## Database Schema

### Users
- Basic user information and authentication
- Role-based access control
- Profile information
- Activity tracking

### Applications
- Complete application data model
- Document attachments
- Status tracking and review workflow
- Founder and business information

### Supporting Models
- User profiles
- Application documents
- Contact submissions

## Development Notes

### File Uploads
- Uploaded files are stored in `/uploads` directory
- Supported formats: PDF, DOC, DOCX, PPT, PPTX, JPG, PNG, MP4, MOV
- Maximum file size: 10MB (configurable)

### Error Handling
- Centralized error handling middleware
- Consistent error response format
- Validation error details

### Security Considerations
- Environment variables for sensitive data
- Password hashing with bcrypt
- JWT token expiration
- Input validation with Joi
- File type validation