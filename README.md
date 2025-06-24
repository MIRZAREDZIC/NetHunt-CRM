# CRM Monorepo

Modern CRM aplikacija izgrađena sa Laravel backend-om i Next.js frontend-om.

## 🚀 Tehnologije

### Backend
- **Laravel** - PHP framework za backend API
- **MySQL/PostgreSQL** - Baza podataka
- **Docker** - Kontejnerizacija

### Frontend
- **Next.js** - React framework za frontend
- **TypeScript** - Tipizacija
- **Tailwind CSS** - Styling
- **React Query** - State management

### DevOps
- **Docker Compose** - Multi-container aplikacija
- **GitHub Actions** - CI/CD pipeline
- **Cypress** - E2E testiranje

## 📁 Struktura projekta

```
crm-monorepo/
├── crm-laravel/          # Laravel backend API
├── crm-next/            # Next.js frontend aplikacija
├── cypress/             # E2E testovi
├── docker/              # Docker konfiguracija
├── docker-compose.yml   # Docker Compose setup
└── package.json         # Root package.json
```

## 🛠️ Instalacija i pokretanje

### Prerequisites
- Docker i Docker Compose
- Node.js (v18+)
- PHP (v8.1+)

### Pokretanje sa Docker-om

1. Klonirajte repozitorijum:
```bash
git clone <your-repo-url>
cd crm-monorepo
```

2. Pokrenite aplikaciju:
```bash
docker-compose up -d
```

3. Instalirajte zavisnosti:
```bash
# Backend zavisnosti
cd crm-laravel && composer install

# Frontend zavisnosti
cd ../crm-next && npm install
```

4. Podesite environment varijable:
```bash
# Kopirajte .env.example fajlove
cp crm-laravel/.env.example crm-laravel/.env
cp crm-next/.env.example crm-next/.env
```

5. Pokrenite migracije:
```bash
cd crm-laravel
php artisan migrate
php artisan db:seed
```

### Lokalno pokretanje

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

## 🧪 Testiranje

### E2E testovi
```bash
cd cypress
npm run cypress:open
```

### Backend testovi
```bash
cd crm-laravel
php artisan test
```

### Frontend testovi
```bash
cd crm-next
npm test
```

## 📝 API Dokumentacija

API dokumentacija je dostupna na `/api/documentation` kada je aplikacija pokrenuta.

## 🤝 Doprinosi

1. Fork repozitorijum
2. Kreirajte feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit promene (`git commit -m 'Add some AmazingFeature'`)
4. Push na branch (`git push origin feature/AmazingFeature`)
5. Otvorite Pull Request

## 📄 Licenca

Ovaj projekat je pod [MIT licencom](LICENSE).

## 👨‍💻 Autor

Vaše ime - [vaš-email@example.com]

---

**Napomena**: Ovo je portfolio projekat koji demonstrira veštine u full-stack razvoju sa modernim tehnologijama. 