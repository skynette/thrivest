# 🚀 Thrivest - Scalable Next.js Application

A modern, scalable Next.js 13 application built with TypeScript, Tailwind CSS, shadcn/ui, and React Query for efficient data fetching and state management.

## ✨ Features

- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 3** for styling
- **shadcn/ui** component library
- **React Query** (@tanstack/react-query) for data fetching
- **Axios** for HTTP requests
- **ESLint** for code linting
- **Scalable folder structure** for large applications

## 🏗️ Project Structure

```
src/
├── app/                      # Next.js 13 App Router
├── components/               # React components
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components
│   ├── common/              # Reusable components
│   ├── features/            # Feature-specific components
│   └── providers/           # Context providers
├── hooks/                   # Custom React hooks
│   ├── queries/             # React Query hooks
│   └── mutations/           # React Query mutations
├── services/                # API services
├── types/                   # TypeScript definitions
├── constants/               # Application constants
├── utils/                   # Utility functions
├── stores/                  # State management
└── lib/                     # shadcn/ui utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd thrivest
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 UI Components

Add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Available components: button, card, input, dialog, dropdown-menu, and more.

## 🔧 API Integration

### Adding a New API Service

1. **Define types** in `src/types/api/`:
```typescript
export interface Product {
  id: string;
  name: string;
  price: number;
}
```

2. **Create service** in `src/services/api/`:
```typescript
export const productsService = {
  getProducts: () => apiClient.get<Product[]>('/products'),
  createProduct: (data: CreateProductRequest) => 
    apiClient.post<Product>('/products', data)
};
```

3. **Create React Query hooks** in `src/hooks/queries/`:
```typescript
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productsService.getProducts
  });
};
```

4. **Use in components**:
```typescript
const { data: products, isLoading, error } = useProducts();
```

## 🛡️ Error Handling

The application includes comprehensive error handling:

- **ErrorBoundary** - Catches React component errors
- **API Client** - Handles HTTP errors and token refresh
- **React Query** - Provides error states and retry logic
- **TypeScript** - Compile-time error prevention

## 🔄 State Management

- **React Query** for server state
- **React Context** for UI state
- **localStorage/sessionStorage** utilities in `src/utils/storage.ts`

## 📱 Responsive Design

Built with Tailwind CSS for mobile-first responsive design:

- **Mobile**: Base styles
- **Tablet**: `md:` prefix
- **Desktop**: `lg:` prefix
- **Large screens**: `xl:` prefix

## 🌙 Dark Mode

Dark mode support is built-in with Tailwind CSS:

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

## 📚 Documentation

- [Folder Structure Guide](./FOLDER_STRUCTURE.md) - Detailed folder structure documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🧪 Best Practices

1. **Type Safety**: Use TypeScript interfaces for all data structures
2. **Component Organization**: Keep components small and focused  
3. **Custom Hooks**: Extract business logic into custom hooks
4. **Error Handling**: Always handle loading and error states
5. **Performance**: Use React Query's caching and optimization features
6. **Code Quality**: Follow ESLint rules and consistent naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) team for the powerful data fetching library

---

**Happy coding! 🎉**
