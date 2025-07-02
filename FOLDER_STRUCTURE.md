# 📁 Scalable Next.js Project Structure

This document outlines the folder structure for a scalable Next.js 13 application with TypeScript, Tailwind CSS, and shadcn/ui, designed for API integration and data fetching with React Query.

## 🏗️ Project Structure

```
src/
├── app/                      # Next.js 13 App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   └── favicon.ico          # Favicon
│
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   │
│   ├── layout/              # Layout components
│   │   ├── AppLayout.tsx    # Main application layout
│   │   ├── Header.tsx       # Header component
│   │   ├── Sidebar.tsx      # Sidebar navigation
│   │   └── Footer.tsx       # Footer component
│   │
│   ├── common/              # Reusable common components
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBoundary.tsx
│   │
│   ├── features/            # Feature-specific components
│   │   ├── auth/            # Authentication components
│   │   ├── users/           # User management components
│   │   └── dashboard/       # Dashboard components
│   │
│   ├── providers/           # Context providers
│   │   └── QueryProvider.tsx # React Query provider
│   │
│   └── index.ts             # Component exports
│
├── hooks/                   # Custom React hooks
│   ├── queries/             # React Query hooks
│   │   ├── useAuth.ts       # Authentication queries
│   │   └── useUsers.ts      # User queries
│   │
│   ├── mutations/           # React Query mutations
│   │   ├── useAuthMutations.ts
│   │   └── useUserMutations.ts
│   │
│   └── index.ts             # Hook exports
│
├── services/                # API services and external integrations
│   ├── api/                 # API service layer
│   │   ├── client.ts        # Axios client configuration
│   │   ├── auth.ts          # Authentication API calls
│   │   └── users.ts         # User API calls
│   │
│   └── index.ts             # Service exports
│
├── types/                   # TypeScript type definitions
│   ├── common/              # Common types
│   │   └── index.ts         # Base entities, API responses
│   │
│   ├── api/                 # API-specific types
│   │   └── index.ts         # Request/response types
│   │
│   └── index.ts             # Type exports
│
├── constants/               # Application constants
│   ├── api.ts               # API endpoints and query keys
│   └── index.ts             # Constant exports
│
├── utils/                   # Utility functions
│   ├── formatting.ts        # Text and number formatting
│   ├── validation.ts        # Form validation helpers
│   ├── storage.ts           # localStorage/sessionStorage
│   ├── date.ts              # Date manipulation
│   └── index.ts             # Utility exports
│
├── stores/                  # State management (Zustand, Redux, etc.)
│   └── index.ts
│
├── styles/                  # Additional styles
│   └── globals.css
│
└── lib/                     # shadcn/ui utilities
    └── utils.ts             # cn() function and utilities
```

## 📋 Key Features

### 🔧 **Core Technologies**
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **React Query** (@tanstack/react-query) for data fetching
- **Axios** for HTTP requests

### 🏛️ **Architecture Patterns**

#### **1. Separation of Concerns**
- **Components**: UI presentation layer
- **Hooks**: Business logic and state management
- **Services**: API calls and external integrations
- **Types**: TypeScript definitions
- **Utils**: Pure utility functions

#### **2. Feature-Based Organization**
- Group related components by feature (auth, users, dashboard)
- Co-locate feature-specific hooks, types, and services
- Easier to maintain and scale

#### **3. API Layer Architecture**
```
Component → Hook → Service → API Client → External API
```

## 🚀 **Usage Examples**

### **1. Creating a New Feature**

```typescript
// 1. Define types
// src/types/api/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
}

// 2. Create API service
// src/services/api/products.ts
export const productsService = {
  getProducts: () => apiClient.get<Product[]>('/products'),
  createProduct: (data: CreateProductRequest) => 
    apiClient.post<Product>('/products', data)
};

// 3. Create React Query hooks
// src/hooks/queries/useProducts.ts
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productsService.getProducts
  });
};

// 4. Use in component
// src/components/features/products/ProductList.tsx
export const ProductList = () => {
  const { data: products, isLoading } = useProducts();
  
  if (isLoading) return <LoadingSpinner />;
  
  return (
    <div>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### **2. Adding Authentication**

```typescript
// Use existing auth hooks
const { user, isAuthenticated, isLoading } = useAuthStatus();
const loginMutation = useLogin();

const handleLogin = (credentials: LoginRequest) => {
  loginMutation.mutate(credentials, {
    onSuccess: () => {
      router.push('/dashboard');
    }
  });
};
```

## 🔄 **Data Flow**

### **Query Flow (Data Fetching)**
1. Component calls custom hook (`useUsers`)
2. Hook uses React Query to manage caching/state
3. React Query calls service function (`usersService.getUsers`)
4. Service uses API client with interceptors
5. Data flows back through the chain

### **Mutation Flow (Data Updates)**
1. Component calls mutation hook (`useUpdateUser`)
2. Mutation executes service function
3. On success, React Query updates cache
4. UI automatically re-renders with new data

## 🛡️ **Error Handling**

- **ErrorBoundary**: Catches React component errors
- **API Client**: Handles HTTP errors and token refresh
- **React Query**: Provides error states and retry logic
- **TypeScript**: Compile-time error prevention

## 📦 **Adding New Dependencies**

### **For API Calls**
```bash
npm install [library-name]
# Add to src/services/api/
```

### **For UI Components**
```bash
npx shadcn@latest add [component-name]
# Components added to src/components/ui/
```

### **For State Management**
```bash
npm install zustand
# Create store in src/stores/
```

## 🎯 **Best Practices**

1. **Use TypeScript strictly** - Define interfaces for all data
2. **Keep components pure** - Move logic to custom hooks
3. **Follow naming conventions** - `use*` for hooks, `*Service` for services
4. **Centralize API calls** - All HTTP requests go through services
5. **Cache intelligently** - Use React Query's caching strategies
6. **Handle loading states** - Always show loading/error states
7. **Validate data** - Use TypeScript and runtime validation

## 🔧 **Configuration Files**

- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.env.example` - Environment variables template

This structure provides a solid foundation for building scalable React applications with proper separation of concerns, type safety, and modern development practices. 