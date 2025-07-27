# Mayur Nakum - Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and experience as a frontend developer.

## 🚀 Live Demo

[View Portfolio](https://mayurnakum-portfolio.vercel.app)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics & Speed Insights

## 📁 Project Structure

```
mayur_portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout wrapper
│   │   ├── globals.css         # Global styles & Tailwind imports
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects showcase page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   └── provider/
│   │       └── NoSSRProvider.tsx
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Menubar.tsx         # Navigation menu component
│   │   ├── SocialsMenu.tsx     # Social media links
│   │   ├── ScrollingUpButton.tsx # Scroll navigation buttons
│   │   ├── MyProjects.tsx      # Projects grid component
│   │   ├── Experience.tsx      # Experience section
│   │   ├── MyStory.tsx         # Personal story section
│   │   ├── Skils.tsx           # Skills showcase
│   │   ├── ProjectBanner.tsx   # Project banner component
│   │   └── Myplace.tsx         # Location/mission component
│   ├── data/
│   │   └── projectData.ts      # Project data array
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── assets/
│   │   ├── meta/               # Meta images for social sharing
│   │   └── projects/           # Project preview images
│   ├── icon/                   # SVG icons
│   ├── MayurResume.pdf         # Downloadable resume
│   └── profile.jpg             # Profile image
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 UI Components & Features

### Global Layout (`layout.tsx`)
- **Header:** Sticky navigation with responsive mobile menu
- **Footer:** Social links, navigation, and contact CTA
- **Scroll Buttons:** Floating scroll-to-top and scroll-down buttons
- **Analytics:** Vercel Analytics and Speed Insights integration

### Navigation System
- **Header (`Header.tsx`):** 
  - Logo with brand styling
  - Responsive navigation menu
  - Mobile hamburger menu with smooth transitions
  - Contact button with icon
- **Menubar (`Menubar.tsx`):** Reusable navigation component used in header and footer
- **SocialsMenu (`SocialsMenu.tsx`):** Social media icons (Instagram, LinkedIn, GitHub)

### Page Components

#### Home Page (`page.tsx`)
- **Hero Section:** Animated background, profile image, and introduction
- **Key Features:** 
  - Gradient text effects
  - Floating decorative elements
  - Call-to-action buttons
  - Responsive image with hover effects
- **Sections:** Experience, Project Banner, Skills, My Story

#### About Page (`about/page.tsx`)
- **Mission Statement:** Personal values and goals
- **About Cards:** Four key characteristics (Passionate, Goal-Oriented, User-Focused, Quality Driven)
- **Sections:** Myplace, MyStory, Experience

#### Projects Page (`projects/page.tsx`)
- **Header Section:** Project statistics and introduction
- **Projects Grid:** Showcase of featured projects
- **Professional Note:** Explanation of portfolio limitations due to client confidentiality
- **Features:**
  - Project cards with hover effects
  - Live demo and source code links
  - Technology tags
  - Project status indicators

#### Contact Page (`contact/page.tsx`)
- **Contact Information:** Email, phone, location, availability
- **Interactive Elements:** Clickable contact methods
- **Call-to-Action:** Project initiation and resume download
- **Features:** Responsive layout with contact highlights

### Interactive Components

#### ScrollingUpButton (`ScrollingUpButton.tsx`)
- **Scroll Up Button:** Appears after scrolling, smooth scroll to top
- **Scroll Down Button:** Initial prompt to explore content
- **Features:** Animated scroll indicators, smooth transitions

#### MyProjects (`MyProjects.tsx`)
- **Project Cards:** Grid layout with hover effects
- **Features:**
  - Image hover zoom effects
  - Overlay with action buttons
  - Technology stack tags
  - Live demo and GitHub links
  - Project status indicators
  - Decorative hover elements

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts (sm, md, lg, xl)
- Flexible grid systems
- Touch-friendly interactions

### Performance Optimizations
- Next.js Image optimization
- Lazy loading for images
- Efficient component rendering
- Vercel edge caching

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus management

### SEO & Meta
- Dynamic metadata for each page
- OpenGraph and Twitter card support
- Structured data for search engines
- Optimized meta descriptions and keywords

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mayur_portfolio.git
   cd mayur_portfolio
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

## 📝 Customization Guide

### Adding New Projects
Edit `src/data/projectData.ts`:
```typescript
{
  title: "Project Name",
  description: "Project description",
  image: "/assets/projects/project-image.jpg",
  technologies: ["React", "TypeScript", "Tailwind"],
  liveUrl: "https://project-demo.com",
  githubUrl: "https://github.com/username/project",
  status: "Live"
}
```

### Updating Personal Information
- **Profile Image:** Replace `public/profile.jpg`
- **Resume:** Replace `public/MayurResume.pdf`
- **Contact Info:** Update in `src/app/contact/page.tsx`
- **Social Links:** Edit `src/components/SocialsMenu.tsx`

### Modifying Styling
- **Colors:** Update Tailwind config in `tailwind.config.ts`
- **Components:** Edit individual component files in `src/components/`
- **Global Styles:** Modify `src/app/globals.css`

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` with metadata export
3. Update navigation in `src/components/Menubar.tsx`

## 🎨 Design System

### Color Palette
- **Primary:** Purple (#8B5CF6, #7C3AED)
- **Secondary:** Gray (#4B5563, #6B7280)
- **Background:** White (#FFFFFF), Light Gray (#F9FAFB)
- **Text:** Dark Gray (#1F2937), Medium Gray (#4B5563)

### Typography
- **Headings:** Bold, large scale (text-4xl to text-8xl)
- **Body:** Regular weight, readable line height
- **Font Family:** System fonts (Inter, system-ui)

### Spacing
- **Container:** Responsive padding (px-4 md:px-8 lg:px-28)
- **Sections:** Consistent vertical spacing (py-16, py-20, py-28)
- **Components:** Flexible gap systems

## 📱 Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push to main branch

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 Performance Metrics
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for all metrics
- **Bundle Size:** Optimized with Next.js built-in optimizations

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact
- **Email:** mayurnakum07@gmail.com
- **LinkedIn:** [Mayur Nakum](https://linkedin.com/in/mayur-nakum-178777250)
- **GitHub:** [mayurnakum07](https://github.com/mayurnakum07)
- **Instagram:** [@mr_mayur_nakum](https://instagram.com/mr_mayur_nakum)

---

**Made with 💜 by Mayur Nakum**