# Modern Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a clean, professional design.

## ✨ Features

- **Modern Design**: Clean, minimal interface inspired by top developer portfolios
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Components**: Engaging UI elements and hover effects
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Pages & Sections

### Homepage
- **Hero Section**: Eye-catching introduction with creative branding
- **About**: Personal story and interests with wizard/creative theme
- **Skills**: Technical and soft skills with visual badges
- **Timeline**: Professional journey with education, work, and achievements
- **Featured Projects**: Showcase of best work
- **Contact**: Smart contact form with quick prompts

### Additional Pages
- **Projects**: Complete portfolio with filtering and search
- **About**: Detailed about page with skills and timeline
- **Blog**: Knowledge sharing and insights
- **Contact**: Dedicated contact page

### Planned Features
- **Changelog**: Recent updates and version history
- **Toolbox**: Favorite development tools and resources
- **Guestbook**: Community interaction wall
- **Resume**: Downloadable resume with multiple formats

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **UI Components**: Headless UI
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Meta tags and site title
- `components/sections/Hero.tsx` - Name, role, and tagline
- `components/sections/About.tsx` - Personal story and interests
- `components/sections/Skills.tsx` - Technical skills and expertise
- `components/sections/Timeline.tsx` - Professional journey
- `components/layout/Footer.tsx` - Contact information and social links

### Colors and Branding
Customize the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

### Content
- **Projects**: Update `components/sections/FeaturedProjects.tsx` and `components/sections/ProjectsGrid.tsx`
- **Blog Posts**: Add your articles in `app/blog/page.tsx`
- **Social Links**: Update links in `components/layout/Navigation.tsx` and `components/layout/Footer.tsx`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Optimized for phones and small screens
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-featured experience for large screens
- **Hamburger Menu**: Mobile navigation with smooth animations

## 🎭 Animations

Powered by Framer Motion for smooth, performant animations:
- **Page Transitions**: Smooth navigation between pages
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive feedback on buttons and cards
- **Loading States**: Elegant loading animations

## 🌙 Theme System

Built-in dark/light theme support:
- **System Preference**: Respects user's system theme
- **Manual Toggle**: Theme switcher in navigation
- **Persistent**: Remembers user preference
- **Smooth Transitions**: Animated theme changes

## 📊 Performance

Optimized for speed and user experience:
- **Next.js 14**: Latest features and optimizations
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading
- **SEO**: Built-in SEO optimizations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/developer-portfolio/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:
- Email: hello@johndoe.dev
- Twitter: [@johndoe](https://twitter.com/johndoe)
- LinkedIn: [John Doe](https://linkedin.com/in/johndoe)

---

**Built with ❤️ by [John Doe](https://johndoe.dev)**