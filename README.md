# MoneyZenGuide - Your Path to Financial Zen

A comprehensive financial planning website built with Next.js 14, featuring calculators, CMS, authentication, and payment integration. Discover financial peace with expert guidance and smart tools.

## 🚀 Features

### Frontend
- **Modern UI/UX**: Responsive design with Tailwind CSS and Radix UI components
- **SEO Optimized**: Server-side rendering, meta tags, and structured data
- **Dark Mode**: Theme switching with next-themes
- **Mobile-First**: Fully responsive design for all devices

### Financial Tools
- **Mortgage Calculator**: Monthly payments, amortization schedules
- **Loan Calculator**: Personal loan calculations and comparisons
- **Investment Calculator**: Compound interest and growth projections
- **Retirement Calculator**: Retirement planning and goal setting
- **Savings Calculator**: Goal-based savings planning
- **EMI Calculator**: Equated Monthly Installment calculations

### Backend & Database
- **Authentication**: NextAuth.js with Google, GitHub, and email/password
- **Database**: PostgreSQL with Prisma ORM
- **API Routes**: RESTful API for all operations
- **Content Management**: Blog posts, FAQs, and user-generated content

### Payment & Monetization
- **Stripe Integration**: Secure payment processing
- **Subscription Management**: Newsletter and premium content subscriptions
- **Premium Features**: Advanced calculators and personalized guidance

### Analytics & SEO
- **Google Analytics**: User behavior tracking
- **Performance Monitoring**: Core Web Vitals optimization
- **SEO Tools**: Sitemaps, meta tags, Open Graph
- **Social Media**: Twitter Cards and social sharing

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Email**: SendGrid
- **Images**: Cloudinary
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financial-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/financial_guide"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
SENDGRID_API_KEY="your-sendgrid-api-key"
FROM_EMAIL="noreply@yourdomain.com"

# Analytics
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- AWS (Amplify, EC2)
- DigitalOcean (App Platform)
- Railway
- Render

## 📊 Database Schema

The application uses the following main models:

- **User**: Authentication and user profiles
- **Post**: Blog posts and content
- **Comment**: User comments on posts
- **Subscription**: Newsletter subscriptions
- **Payment**: Payment records
- **FAQ**: Frequently asked questions
- **ContactMessage**: Contact form submissions

## 🔐 Security Features

- **Authentication**: Secure JWT-based authentication
- **Authorization**: Role-based access control
- **Data Validation**: Zod schema validation
- **CSRF Protection**: Built-in Next.js protection
- **Rate Limiting**: API rate limiting
- **Input Sanitization**: XSS protection

## 📈 Performance Optimizations

- **Server-Side Rendering**: Fast initial page loads
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting
- **Caching**: API response caching
- **CDN**: Static asset delivery
- **Bundle Analysis**: Optimized bundle sizes

## 🎯 SEO Features

- **Meta Tags**: Dynamic meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **Core Web Vitals**: Performance optimization

## 💰 Monetization Options

1. **Premium Subscriptions**: Advanced calculators and personalized guidance
2. **Affiliate Marketing**: Financial product recommendations
3. **Sponsored Content**: Partner with financial institutions
4. **Consulting Services**: One-on-one financial planning
5. **Course Sales**: Financial education courses
6. **Ad Revenue**: Display advertising

## 🔧 Customization

### Adding New Calculators

1. Create a new page in `app/calculators/[calculator-name]/page.tsx`
2. Add the calculator to the calculators list in `app/calculators/page.tsx`
3. Implement the calculation logic using utility functions

### Adding New Content Types

1. Update the Prisma schema in `prisma/schema.prisma`
2. Create API routes in `app/api/[resource]/route.ts`
3. Add UI components for content management

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized for mobile networks
- **PWA Ready**: Can be converted to Progressive Web App

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Email: support@financialguide.com
- Documentation: [Link to docs]

## 🗺 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced portfolio tracking
- [ ] AI-powered financial guidance
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with banking APIs
- [ ] Tax optimization tools
- [ ] Estate planning features

---

Built with ❤️ for better financial planning
