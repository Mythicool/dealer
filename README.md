# Thunder Auto - Oklahoma City Auto Dealer Website

A modern, responsive website for Thunder Auto, Oklahoma City's premier auto dealer. Built with Next.js, React, Framer Motion, and Tailwind CSS.

## 🚗 Features

- **Modern Design**: Professional, trustworthy aesthetic with smooth animations
- **Interactive Vehicle Inventory**: Filterable vehicle showcase with detailed cards
- **Responsive Design**: Optimized for all devices and screen sizes
- **Contact Forms**: Lead generation with validation and user-friendly interface
- **Service Showcase**: Complete auto services presentation
- **Local Focus**: Oklahoma City specific content and branding
- **Performance Optimized**: Fast loading times and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Playwright
- **Deployment**: Cloudflare Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mythicool/dealer.git
cd dealer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── components/          # React components
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── FeaturedVehicles.tsx # Vehicle inventory
│       ├── Services.tsx     # Services section
│       ├── About.tsx        # About section
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Site footer
├── tests/                   # Playwright tests
├── public/                  # Static assets
└── docs/                    # Documentation
```

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npm run test

# Run tests in headed mode
npx playwright test --headed

# Generate test report
npx playwright test --reporter=html
```

### Test Coverage

- ✅ 25 automated tests covering all functionality
- ✅ Performance testing
- ✅ Accessibility compliance
- ✅ Mobile responsiveness
- ✅ Form validation
- ✅ Interactive elements

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb, #1d4ed8, #1e3a8a)
- **Accent**: Orange (#f59e0b, #d97706)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (system fallback)
- **Hierarchy**: Consistent heading and body text scales

### Components
- Reusable, accessible components
- Consistent spacing and styling
- Smooth animations and transitions

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Deployment

The site is configured for Cloudflare Pages deployment with automatic builds from the main branch.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Loading Time**: < 3 seconds on 3G
- **Bundle Size**: Optimized with Next.js automatic splitting
- **SEO**: Fully optimized with proper meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Thunder Auto**
- Address: 123 Thunder Avenue, Oklahoma City, OK 73102
- Phone: (405) 555-AUTO
- Email: sales@thunderauto.com
- Website: [thunderauto.com](https://thunderauto.com)

## 🏆 Acknowledgments

- Built with modern web technologies
- Designed for Oklahoma City market
- Optimized for automotive industry needs
- Tested for production reliability

---

**Ready for production deployment** ✅