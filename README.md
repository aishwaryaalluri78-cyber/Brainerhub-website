# BrainerHub Solutions - 2026 Website Redesign

A modern, animated website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Responsive Design** for all devices
- **Performance Optimized** with static exports
- **SEO Ready** with proper meta tags
- **Accessibility Compliant** (WCAG 2.1)

## 🎨 Design System

- **Custom Color Palette** with primary and secondary colors
- **Typography** using Inter and Poppins fonts
- **Animation Presets** for consistent motion design
- **Reusable Components** with proper TypeScript interfaces
- **Responsive Breakpoints** for mobile-first design

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── home/           # Homepage components
│   ├── services/       # Service page components
│   ├── portfolio/      # Portfolio components
│   ├── contact/        # Contact components
│   ├── about/          # About page components
│   └── animations/     # Animation components
├── lib/                # Utility functions
├── styles/             # Global styles
├── data/               # Static data
└── hooks/              # Custom React hooks
```

## 🎯 Development Guidelines

### Component Structure
- Use TypeScript interfaces for all props
- Implement proper error boundaries
- Follow accessibility best practices
- Use semantic HTML elements

### Animation Guidelines
- Use scroll-triggered animations sparingly
- Respect user's motion preferences
- Optimize for performance
- Test on various devices

### Performance
- Optimize images with Next.js Image component
- Use dynamic imports for heavy components
- Implement proper caching strategies
- Monitor Core Web Vitals

## 🚀 Deployment

The project is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Follow the existing code style
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

This project is proprietary to BrainerHub Solutions.

---

Built with ❤️ by the BrainerHub Solutions team
