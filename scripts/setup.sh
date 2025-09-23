#!/bin/bash

echo "🚀 Setting up Financial Guide..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your actual environment variables"
else
    echo "✅ .env.local already exists"
fi

# Generate Prisma client
echo "🗄️  Generating Prisma client..."
npx prisma generate

# Check if database is set up
echo "🔍 Checking database connection..."
if npx prisma db push --accept-data-loss; then
    echo "✅ Database schema updated successfully"
else
    echo "⚠️  Database connection failed. Please check your DATABASE_URL in .env.local"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your actual environment variables"
echo "2. Set up your database (PostgreSQL recommended)"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Visit http://localhost:3000 to see your app"
echo ""
echo "For production deployment:"
echo "1. Set up environment variables in your hosting platform"
echo "2. Run 'npm run build' to build for production"
echo "3. Deploy to Vercel, AWS, or your preferred platform"
echo ""
echo "📚 Check README.md for detailed setup instructions"
