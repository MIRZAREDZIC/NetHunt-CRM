# CRM Monorepo

A modern CRM application built with a Laravel backend and Next.js frontend.

## 🚀 Technologies

### Backend
- **Laravel** - PHP framework for backend API
- **MySQL/PostgreSQL** - Database
- **Docker** - Containerization

### Frontend
- **Next.js** - React framework for frontend
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Query** - State management

### DevOps
- **Docker Compose** - Multi-container application
- **GitHub Actions** - CI/CD pipeline
- **Cypress** - E2E testing

## 📁 Project Structure

```
crm-monorepo/
├── crm-laravel/          # Laravel backend API
├── crm-next/            # Next.js frontend application
├── cypress/             # E2E tests
├── docker/              # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── package.json         # Root package.json
```

## 🛠️ Installation & Running

### Prerequisites
- Docker & Docker Compose
- Node.js (v18+)
- PHP (v8.1+)

### Running with Docker

1. Clone the repository:
```bash
git clone <your-repo-url>
cd crm-monorepo
```

2. Start the application:
```bash
docker-compose up -d
```

3. Install dependencies:
```bash
# Backend dependencies
cd crm-laravel && composer install

# Frontend dependencies
cd ../crm-next && npm install
```

4. Set up environment variables:
```bash
# Copy .env.example files
cp crm-laravel/.env.example crm-laravel/.env
cp crm-next/.env.example crm-next/.env
```

5. Run migrations:
```bash
cd crm-laravel
php artisan migrate
php artisan db:seed
```

### Running Locally

1. Backend (Laravel):
```bash
cd crm-laravel
composer install
php artisan serve
```

2. Frontend (Next.js):
```bash
cd crm-next
npm install
npm run dev
```

## 🧪 Testing

### E2E tests
```bash
cd cypress
npm run cypress:open
```

### Backend tests
```bash
cd crm-laravel
php artisan test
```

### Frontend tests
```bash
cd crm-next
npm test
```

## 📝 API Documentation

API documentation is available at `/api/documentation` when the application is running.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT license](LICENSE).

## 👨‍💻 Author

Your Name - [your-email@example.com]

---

**Note:** This is a portfolio project demonstrating full-stack development skills with modern technologies. 