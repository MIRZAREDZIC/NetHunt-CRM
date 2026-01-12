# 🚀 CRM Next.js Application

A modern, professional CRM (Customer Relationship Management) system built with Next.js 14, TypeScript, and Material-UI.

## ✨ Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Material-UI v5
- **Form Management**: React Hook Form with Yup validation
- **State Management**: TanStack Query (React Query) for server state
- **Error Handling**: Comprehensive error boundary and logging system
- **Performance Monitoring**: Built-in performance tracking and optimization
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Responsive Design**: Mobile-first approach with Material-UI
- **Type Safety**: Full TypeScript coverage
- **Testing Ready**: Jest and Testing Library setup
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks

## 🏗️ Architecture

```
src/
├── app/                    # Next.js 14 App Router
├── components/             # Reusable UI components
│   ├── types/             # TypeScript type definitions
│   └── providers/         # Context providers
├── sections/              # Page-specific components
│   └── companies/         # Company-related components
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
│   ├── error-logger.ts    # Error logging system
│   └── performance.ts     # Performance monitoring
└── constants/             # Application constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd crm-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   cp env.example .env.local
   ```

   Update the environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING=true
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Type checking
npm run type-check   # Run TypeScript compiler check
```

## 🧪 Testing

The project uses Jest and React Testing Library for testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📊 Performance Monitoring

The application includes built-in performance monitoring:

- **Core Web Vitals**: LCP, FID, CLS tracking
- **Custom Metrics**: Component render times, API call durations
- **Error Tracking**: Comprehensive error logging and reporting

Access performance data in development console or configure external services.

## 🔧 Configuration

### Environment Variables

| Variable                             | Description               | Default                 |
| ------------------------------------ | ------------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL`                | Backend API URL           | `http://localhost:3001` |
| `NEXT_PUBLIC_ENABLE_ANALYTICS`       | Enable analytics tracking | `false`                 |
| `NEXT_PUBLIC_ENABLE_ERROR_REPORTING` | Enable error reporting    | `false`                 |
| `NEXT_PUBLIC_DEBUG_MODE`             | Enable debug mode         | `true`                  |

### API Integration

The application expects a REST API with the following endpoints:

```
GET    /api/companies           # List companies
POST   /api/companies           # Create company
PUT    /api/companies/:id       # Update company
DELETE /api/companies/:id       # Delete company
GET    /api/health              # Health check
```

## 🎨 UI/UX Features

- **Material Design 3**: Modern Material-UI components
- **Dark/Light Theme**: Automatic theme switching
- **Responsive Layout**: Mobile-first design
- **Loading States**: Skeleton loaders and progress indicators
- **Error States**: User-friendly error messages
- **Form Validation**: Real-time validation with helpful messages

## 🔒 Security

- **Input Validation**: Client and server-side validation
- **XSS Protection**: Sanitized inputs and outputs
- **CSRF Protection**: Built-in Next.js protection
- **Type Safety**: TypeScript for compile-time safety

## 📈 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Memoization**: React.memo and useMemo optimizations
- **Lazy Loading**: Dynamic imports for heavy components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Write tests for new features
- Update documentation as needed

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Module not found errors**

   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Run type check
   npm run type-check
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Material-UI Team](https://mui.com/) for the beautiful components
- [Vercel](https://vercel.com/) for hosting and deployment platform

---

**Built with ❤️ using Next.js and TypeScript**
