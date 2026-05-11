I'll analyze this UI and provide you with a comprehensive description and coding prompt.

## UI Description

This is a **corporate energy/oil & gas company website** (Ocelco) with a modern, professional design focused on sustainability and global operations.

### Key Features:

**1. Hero Section**
- Full-width industrial refinery background image at sunset
- Bold white headline: "Meeting Future Demand In A Sustainable Way"
- Subtitle emphasizing sustainable practices
- Yellow CTA button ("DISCOVER MORE")
- Three icon-based value propositions: CO2+ Sequestration, Sustainability, Energy Transition

**2. Trust Section**
- Social proof statement with client logos
- Clean white background for contrast

**3. About Section ("Who We Are")**
- Two-column layout with text and industrial facility image
- Yellow icon/badge for branding
- Bullet points highlighting key values
- Yellow "READ MORE" button

**4. Global Presence Section**
- World map visualization with location markers
- Three key statistics in large numbers (25+ years, 77 offices, 348K workers)
- "We Spread Around The World" heading

**5. Dark Feature Section**
- Dark overlay on industrial pipeline image
- "A Vital Energy Resource For A Better Tomorrow" headline
- Three listed features with yellow icon bullets
- Yellow "DISCOVER MORE" button

**Design System:**
- Primary color: Bright yellow (#FDD835 or similar)
- Typography: Modern sans-serif, bold headlines
- Layout: Alternating light/dark sections
- Imagery: Industrial, high-quality photography
- Icons: Simple, line-based

---

## Prompt to Code This Website

Here's a comprehensive prompt you can use:

```
Create a modern, professional energy company website with the following specifications:

**Hero Section:**
- Full-viewport hero with industrial refinery background image (sunset/dramatic lighting)
- Navigation bar: Logo (left), menu items (Home, About Us, Services, Contact, Pages), contact info and social icons (right)
- Centered content: 
  - Large bold headline: "Meeting Future Demand In A Sustainable Way"
  - Subtitle about sustainable practices
  - Bright yellow CTA button
- Three icon cards at bottom: CO2+ Sequestration, Sustainability, Energy Transition

**Trust Bar:**
- White section with "Trusted by 30,000 world-class brands" text
- Display 3-4 placeholder company logos in grayscale

**Who We Are Section:**
- Light background
- Two-column layout:
  - Left: Section tag, heading, body text, checkmark list (Clean energy, Sustainable development, Improving access), yellow icon badge, yellow READ MORE button
  - Right: Industrial facility image with yellow play button overlay

**Global Presence:**
- White background
- Left: Dotted world map with location markers
- Right: "We Spread Around The World" heading, body text, three statistics cards (Years of Experience: 25+, Office Worldwide: 77, Workers Employed: 348K)

**Bottom Feature Section:**
- Dark section with pipeline/industrial image background (dark overlay)
- Left: "Preserve And Conserve" tag, "A Vital Energy Resource For A Better Tomorrow" headline, body text, yellow DISCOVER MORE button
- Right: Three feature items with yellow bullet icons (Aspiration, Visionary, Mission) with descriptive text

**Design Requirements:**
- Use bright yellow (#FDD835) as primary accent color
- Modern sans-serif fonts (similar to Inter or Poppins)
- Responsive design (mobile-first approach)
- Smooth scroll animations
- Hover effects on buttons and cards
- Professional, corporate aesthetic
- High-quality industrial imagery
- Clean spacing and typography hierarchy

**Technical Stack:** React + Tailwind CSS (or specify your preferred stack)
```

Would you like me to actually code this website for you? I can create a complete, responsive React component with Tailwind CSS that matches this design!








# Comprehensive Website Development Prompt

## Project Overview
Create a professional, modern energy/oil & gas company website (Ocelco) with a focus on sustainability, global operations, and corporate trust. The design should convey reliability, innovation, and environmental responsibility.

---

## 🎨 Design System

### Color Palette
- **Primary Yellow:** `#FDD835` or `#FFEB3B` (bright, energetic yellow)
- **Dark Navy/Black:** `#1A1A1A` or `#0F172A` (for dark sections)
- **White:** `#FFFFFF` (backgrounds)
- **Light Gray:** `#F5F5F5` or `#F8F9FA` (alternate backgrounds)
- **Text Gray:** `#666666` (body text)
- **Dark Text:** `#2D2D2D` (headings)

### Typography
- **Headings:** Poppins, Inter, or Montserrat (Bold/SemiBold)
  - H1: 56-64px, font-weight: 700, line-height: 1.2
  - H2: 42-48px, font-weight: 700, line-height: 1.3
  - H3: 28-32px, font-weight: 600, line-height: 1.4
  - H4: 20-24px, font-weight: 600
- **Body:** Inter or Open Sans
  - Body Large: 18-20px, font-weight: 400, line-height: 1.7
  - Body Regular: 16px, font-weight: 400, line-height: 1.6
  - Small: 14px, font-weight: 400

### Spacing System
- Use 8px base unit
- Section padding: 80-120px vertical, 20px horizontal (mobile: 40-60px vertical)
- Container max-width: 1200-1320px
- Grid gap: 32-48px

---

## 📐 Section-by-Section Breakdown

### 1. NAVIGATION BAR

**Layout:**
- Fixed/sticky header with transparent background initially, white background on scroll
- Height: 80-90px
- Horizontal padding: 40-60px
- Shadow on scroll: `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`

**Left Side:**
- **Logo:** "ocelco." text with small dot
  - Font-size: 28-32px
  - Font-weight: 700
  - Color: White (on hero), Dark on scroll

**Center:**
- Navigation menu items (horizontal list):
  - HOME (active state)
  - ABOUT US (with dropdown arrow)
  - SERVICES (with dropdown arrow)
  - CONTACT
  - PAGES (with dropdown arrow)
- Font-size: 14-15px
- Font-weight: 500
- Text-transform: uppercase
- Letter-spacing: 0.5px
- Color: White with 80% opacity
- Hover: 100% opacity + yellow underline animation
- Active state: Yellow underline (3px thick)
- Spacing between items: 32-40px

**Right Side:**
- **Phone:** Icon + "+6221-3920-1579"
- **Email:** Icon + "hello@yourdomain.tld"
- **Social icons:** Facebook, Twitter, Instagram, LinkedIn
  - Icon size: 16-18px
  - Color: White with 70% opacity
  - Hover: Yellow color
  - Spacing: 16px between icons
- **Search icon** (far right)

---

### 2. HERO SECTION

**Background:**
- Full-viewport height (min-height: 100vh or 700px)
- Background image: Industrial oil refinery at sunset/sunrise
- Overlay: Dark gradient from bottom-left (rgba(0,0,0,0.4) to transparent)
- Background-size: cover
- Background-position: center

**Content Container:**
- Centered vertically and horizontally
- Max-width: 800px
- Text-align: center
- Padding: 40px

**Main Headline:**
```
"Meeting Future Demand In A Sustainable Way"
```
- Font-size: 64px (mobile: 36-42px)
- Font-weight: 700
- Color: White
- Line-height: 1.2
- Margin-bottom: 24px
- Animation: Fade up on load

**Subheadline:**
```
"We are a global fuel chain that respects to their partner providers that it
don't harm theenvironment"
```
- Font-size: 18-20px
- Color: White with 90% opacity
- Max-width: 600px
- Margin: 0 auto 40px
- Line-height: 1.6

**CTA Button:**
- Text: "DISCOVER MORE"
- Background: Yellow (#FDD835)
- Color: Dark text (#1A1A1A)
- Padding: 16px 40px
- Font-size: 14px
- Font-weight: 600
- Text-transform: uppercase
- Letter-spacing: 1px
- Border-radius: 4px
- Border: none
- Hover effect: Scale 1.05, box-shadow: 0 8px 20px rgba(253,216,53,0.4)
- Transition: all 0.3s ease

**Bottom Feature Cards:**
- Position: Absolute bottom or at bottom of hero
- Three cards in a row (responsive: stack on mobile)
- Card spacing: 24px gap

Each card:
- Background: White
- Padding: 32px 24px
- Border-radius: 8px
- Box-shadow: 0 4px 16px rgba(0,0,0,0.1)
- Icon (top): Yellow circular background, white icon (leaf, lightbulb, recycle)
  - Icon container: 60px diameter circle
  - Margin-bottom: 16px
- **Title:** 
  - Font-size: 18-20px
  - Font-weight: 600
  - Color: Dark
  - Examples: "CO2+ Sequestration", "Sustainability", "Energy Transition"

---

### 3. TRUST SECTION

**Layout:**
- Background: White
- Padding: 60-80px vertical
- Text-align: center

**Headline:**
```
"Trusted by 30,000 world-class brands and organizations of all sizes"
```
- Font-size: 20-24px
- Font-weight: 400
- Color: Dark gray
- Margin-bottom: 40px

**Decorative Line:**
- Yellow horizontal line under "Trusted by"
- Width: 60-80px
- Height: 3-4px
- Centered or left-aligned under text

**Logo Grid:**
- Display 3-4 company logos
- Logos in grayscale (filter: grayscale(100%))
- Hover: Color returns (filter: grayscale(0%))
- Layout: Flex or grid, evenly spaced
- Logo examples: "logoipsum" text placeholders
- Vertical alignment: center
- Max logo height: 40-50px
- Spacing: 60-80px between logos

---

### 4. WHO WE ARE SECTION

**Layout:**
- Background: Light gray (#F8F9FA)
- Padding: 100-120px vertical
- Two-column grid (60/40 split on desktop, stack on mobile)
- Gap: 60-80px
- Container: max-width 1200px

**Left Column (Content):**

**Section Tag:**
- Text: "WHO WE ARE"
- Font-size: 14px
- Font-weight: 600
- Color: Yellow
- Text-transform: uppercase
- Letter-spacing: 1.5px
- Margin-bottom: 16px

**Heading:**
```
"Providing affordable and reliable energy"
```
- Font-size: 42-48px
- Font-weight: 700
- Color: Dark
- Line-height: 1.2
- Margin-bottom: 24px

**Body Text:**
```
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
```
- Font-size: 16-18px
- Color: Text gray (#666)
- Line-height: 1.7
- Margin-bottom: 32px
- Max-width: 500px

**Feature List:**
Three items with checkmarks:
- ✓ "Clean energy for a bright future"
- ✓ "Sustainable development"
- ✓ "Improving access to energy"

Each item:
- Yellow checkmark icon (or green circle with checkmark)
- Font-size: 16px
- Margin: 12px 0
- Icon margin-right: 12px

**Company Badge:**
- Yellow square/rounded icon with symbol
- Text below: "An Oil & Gas Company"
- Font-size: 14px
- Color: Dark gray
- Margin: 32px 0

**CTA Button:**
- Text: "READ MORE"
- Same style as hero button
- Margin-top: 32px

**Right Column (Image):**
- Industrial refinery/facility image
- Border-radius: 8-12px
- Box-shadow: 0 8px 32px rgba(0,0,0,0.15)
- Aspect-ratio: 4/3 or maintain natural
- Object-fit: cover

**Play Button Overlay:**
- Yellow circular button, centered
- Icon: White play triangle
- Size: 70-80px diameter
- Box-shadow: 0 4px 16px rgba(253,216,53,0.5)
- Hover: Scale 1.1, pulse animation
- Clicking opens video modal

---

### 5. GLOBAL PRESENCE SECTION

**Layout:**
- Background: White
- Padding: 100-120px vertical
- Two-column grid (50/50 split, stack on mobile)
- Gap: 80px
- Container: max-width 1200px

**Left Column (Map):**
- World map illustration (dotted or outlined style)
- Color: Light gray (#DADADA)
- Location markers: Small yellow circles or pins at various locations
- SVG or background image
- Responsive: Maintain aspect ratio

**Right Column (Content):**

**Heading:**
```
"We Spread Around The World"
```
- Font-size: 42-48px
- Font-weight: 700
- Color: Dark
- Line-height: 1.2
- Margin-bottom: 24px

**Body Text:**
```
"Lorem ipsum consectetur adipiscing elit. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet quis  nostrud exercitation ullamco laboris."
```
- Font-size: 16-18px
- Color: Text gray
- Line-height: 1.7
- Margin-bottom: 48px

**Statistics Grid:**
Three stat cards in a row:

Card 1:
- Number: "25+"
- Label: "Years of Experience"

Card 2:
- Number: "77"
- Label: "Office Worldwide"

Card 3:
- Number: "348K"
- Label: "Workers Employed"

Each card style:
- **Number:**
  - Font-size: 48-56px
  - Font-weight: 700
  - Color: Dark
  - Margin-bottom: 8px
- **Label:**
  - Font-size: 14-16px
  - Font-weight: 400
  - Color: Text gray
  - Line-height: 1.4
- Card spacing: 40-60px between
- Responsive: Stack or 2-column on mobile

---

### 6. PRESERVE AND CONSERVE SECTION

**Background:**
- Industrial pipeline/infrastructure image (nighttime or dramatic lighting)
- Dark overlay: rgba(0,0,0,0.75) or gradient overlay
- Padding: 100-120px vertical
- Background-size: cover
- Background-attachment: fixed (parallax effect optional)

**Layout:**
- Two-column grid (55/45 split, stack on mobile)
- Gap: 80px
- Container: max-width 1200px

**Left Column (Content):**

**Section Tag:**
- Text: "PRESERVE AND CONSERVE"
- Font-size: 14px
- Font-weight: 600
- Color: Yellow
- Text-transform: uppercase
- Letter-spacing: 1.5px
- Margin-bottom: 16px

**Heading:**
```
"A Vital Energy Resource For A Better Tomorrow"
```
- Font-size: 42-48px
- Font-weight: 700
- Color: White
- Line-height: 1.2
- Margin-bottom: 24px

**Body Text:**
```
"Vestibulum porttitor id est dignissim adipiscing porttitor at vel cursus dignissim adipiscing. Dapibus vivamus tortor elit aliquam pellentesque massa duis lorem aliquet. Maecenas viverra porta bibendum porttitor at vel cursus consequat nam."
```
- Font-size: 16-18px
- Color: White with 85% opacity
- Line-height: 1.7
- Margin-bottom: 40px
- Max-width: 500px

**CTA Button:**
- Text: "DISCOVER MORE"
- Same yellow button style as hero
- Margin-top: 32px

**Right Column (Feature List):**

Three feature items:

Item 1 - **Aspiration:**
```
"Lorem ipsum dolore velit esse cillum versions of dignissim ipsum porttitor ipsum lorem dolore."
```

Item 2 - **Visionary:**
```
"Lorem ipsum dolore velit esse cillum versions of dignissim ipsum porttitor ipsum lorem dolore."
```

Item 3 - **Mission:**
```
"Lorem ipsum dolore velit esse cillum versions of dignissim ipsum porttitor ipsum lorem dolore."
```

Each item style:
- Yellow circular bullet point (12-16px diameter) with icon inside
- **Title:**
  - Font-size: 20-24px
  - Font-weight: 600
  - Color: White
  - Margin-bottom: 8px
  - Margin-left: 16px from bullet
- **Description:**
  - Font-size: 16px
  - Color: White with 75% opacity
  - Line-height: 1.6
  - Margin-left: same as title
- Item spacing: 32-40px between items

---

## 🎯 Interactive Elements

### Buttons
**Primary Yellow Button:**
```css
background: #FDD835
color: #1A1A1A
padding: 16px 40px
font-size: 14px
font-weight: 600
text-transform: uppercase
letter-spacing: 1px
border-radius: 4px
transition: all 0.3s ease

&:hover {
  transform: scale(1.05)
  box-shadow: 0 8px 20px rgba(253,216,53,0.4)
}
```

### Animations
1. **On Scroll Animations:**
   - Fade up: Elements fade in and move up 20-30px
   - Stagger delay: 0.1s between elements
   - Trigger: When element is 100px into viewport

2. **Hover Animations:**
   - Cards: Subtle lift (translateY: -8px) + shadow increase
   - Images: Slight zoom (scale: 1.05)
   - Links: Yellow underline slide-in from left

3. **Loading Animation:**
   - Hero content: Fade up + delay cascade
   - Statistics: Count-up animation when in view

---

## 📱 Responsive Breakpoints

```css
/* Mobile: 320-767px */
- Single column layouts
- Font-sizes: -20-30%
- Padding: 40-60px vertical
- Hide/hamburger menu navigation

/* Tablet: 768-1023px */
- Some 2-column layouts
- Font-sizes: -10-15%
- Padding: 60-80px vertical

/* Desktop: 1024px+ */
- Full multi-column layouts
- Original font-sizes
- Full padding
```

---

## 🛠 Technical Requirements

### Technology Stack
- **Frontend Framework:** React 18+ or Next.js 13+
- **Styling:** Tailwind CSS or Styled Components
- **Icons:** React Icons or Lucide React
- **Animations:** Framer Motion or GSAP
- **Image Optimization:** Next/Image or responsive images

### Component Structure
```
App
├── Navigation
├── HeroSection
│   ├── HeroContent
│   └── FeatureCards
├── TrustSection
│   └── LogoGrid
├── WhoWeAreSection
│   ├── Content
│   └── ImageWithPlayButton
├── GlobalPresenceSection
│   ├── WorldMap
│   └── Statistics
├── PreserveSection
│   ├── Content
│   └── FeatureList
└── Footer (not shown but recommended)
```

### Performance Optimization
- Lazy load images below fold
- Use WebP format with fallbacks
- Implement intersection observer for animations
- Critical CSS inline
- Defer non-critical JavaScript
- Target Lighthouse score: 90+

### Accessibility
- Semantic HTML5 elements
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Alt text for all images
- Color contrast ratio: 4.5:1 minimum
- Focus indicators visible

---

## 📦 Assets Needed

### Images
1. Hero background: Industrial refinery at sunset (1920x1080px minimum)
2. Who We Are: Industrial facility (800x600px)
3. Global Presence: World map SVG or dotted illustration
4. Preserve section: Pipeline/infrastructure at night (1920x1080px)

### Icons
- CO2 sequestration icon
- Sustainability/leaf icon
- Energy transition/lightning icon
- Checkmark icons
- Social media icons (Facebook, Twitter, Instagram, LinkedIn)
- Play button icon
- Aspiration, Visionary, Mission icons

### Fonts
- Primary: Poppins (weights: 400, 600, 700)
- Secondary: Inter or Open Sans (weights: 400, 500, 600)

---

## ✅ Development Checklist

- [ ] Set up project with React/Next.js + Tailwind
- [ ] Create design system (colors, typography, spacing)
- [ ] Build Navigation component with scroll behavior
- [ ] Implement Hero section with background and CTA
- [ ] Add feature cards at hero bottom
- [ ] Create Trust section with logo grid
- [ ] Build Who We Are section (2-column layout)
- [ ] Implement Global Presence with map and stats
- [ ] Create Preserve section with dark overlay
- [ ] Add scroll animations with Intersection Observer
- [ ] Implement responsive design for all breakpoints
- [ ] Add hover states and micro-interactions
- [ ] Optimize images and performance
- [ ] Test accessibility (keyboard nav, screen readers)
- [ ] Cross-browser testing
- [ ] Mobile device testing

---

This prompt provides complete specifications to build a pixel-perfect, professional energy company website. Would you like me to start coding this website for you now?






# Lawn Care & Landscaping Website - UI Analysis & Development Prompt

## 🎨 UI Description

This is a **premium lawn care and landscaping service website** with a sophisticated green color palette that evokes nature, growth, and environmental expertise.

### Visual Identity
- **Primary Color:** Deep forest green (#0A3D0A, #1B4D1B)
- **Accent Color:** Bright lime/chartreuse (#B4FF39, #C5FF5C)
- **Supporting Colors:** Various green shades, white, light gray
- **Photography:** High-quality lawn, garden, and outdoor imagery
- **Typography:** Modern sans-serif (likely SF Pro, Inter, or similar)

---

## 📋 Complete Section Breakdown

### 1. **HERO SECTION** (Top)
- **Background:** Lush green lawn image with natural depth of field blur
- **Overlay:** Dark green gradient (bottom-left to transparent)
- **Tag:** "MOWING THE LAWN" in small uppercase text
- **Headline:** "Bringing Your Lawn And Garden To Life"
- **Subheadline:** "Ultimate Lawn Mowing & Gardening Services, Trusted Just for Your Place — Because Every Outdoor Space Deserves Some Love"
- **Two CTAs:**
  - Primary: "Get Started" (lime green background)
  - Secondary: "Explore Projects" (outlined, transparent)

### 2. **SERVICE CARDS** (Hero Bottom)
- Dark green overlay cards with hover states
- **Services Listed:**
  - Lawn Health Inspection
  - Seasonal Cleanups
  - Garden Design & Planting
  - Green Maintenance
  - Debris/Mulch Cleanup

### 3. **FEATURED SERVICE CARDS** (Hero)
Two featured cards with images:
- "Livening Up Your Lawn and Garden" - Expert Lawn Mowing & Gardening Services
- "Greening Up Your Lawn and Garden" - Expert Lawn Mowing & Gardening Services
- Card style: Image, dark overlay, white text, green background section

### 4. **TRUST SECTION**
- "Trusted by more than 8x+ satisfied clients"
- Company logos in grayscale: Works, Amara, Circle, Goldline, Earth2.0, etc.

### 5. **ABOUT SECTION**
- **Heading:** "Turning ordinary yards into thriving landscapes since 2015, with 1,200+ completed projects..."
- Body text with consultation details
- **Statistics (4 columns):**
  - 1,200+ Transforming yard
  - 10+ Lawn Care Specialists
  - 98% Customer Satisfaction
  - 50+ Multiple local areas

### 6. **CORE VALUES SECTION**
- Dark green background
- **Heading:** "It's not just lawn care"
- "We've been turning ordinary spaces into flourishing landscapes since 2006..."
- **Four value propositions:**
  - Every cut, trim, and plant is handled with precision and pride
  - On time, on point, and always professional
  - Healthy yards, safe methods, greener choices
  - Your satisfaction is our top priority—every visit, every time
- Lime green "Get Started" button
- Image: Landscaped garden stairs

### 7. **SERVICES SECTION**
- **Heading:** "Services Designed To Keep your outdoors thriving"
- Service cards with numbered badges (01, 02, 03, 04):
  - 01: Debris/Blow Cleanup
  - 02: Grass Adjustment
  - 03: Seasonal Cleanups
  - 04: (Another service)
- Each card has image, dark overlay, title, description

### 8. **SECONDARY SECTIONS** (Right Side)
- "Seasonal Fertilisation & Lawn Nutrition"
- "Edge Trimming & Lawn Definition"
- Dark green backgrounds with service details

### 9. **TESTIMONIALS SECTION**
- Dark green background
- **Heading:** "Stories That Prove Why Our Work Matters"
- Two testimonial cards side by side
- Quote: "I had no idea which plants would work best, but their design team guided me through everything and created a beautiful layout with the perfect flowers."
- Client names: Chelsea Cutter, Michael Reyes

### 10. **PRICING SECTION**
- **Heading:** "Affordable Lawn Care"
- **Plans:**
  - **Starter Plan:** $39/visit
    - Perfect for smaller gardens
    - Services: Lawn mowing up to 100m², Edge trimming, General garden tidy-up, Grass clippings removal
  - **Premium Plan:** (Price shown on right)
    - Services listed with checkmarks

---

## 🎨 Detailed Color System

### Green Palette
```css
--forest-green-dark: #0A3D0A
--forest-green: #1B4D1B
--forest-green-medium: #2D6B2D
--moss-green: #4A7C4A
--sage-green: #6B9B6B
--lime-green: #B4FF39
--lime-green-light: #C5FF5C
--lime-green-bright: #D4FF7D

--white: #FFFFFF
--off-white: #F8F8F8
--light-gray: #E5E5E5
--text-gray: #666666
--dark-text: #1A1A1A
```

### Usage Guidelines
- **Dark Green (#0A3D0A):** Section backgrounds, cards, overlays
- **Lime Green (#B4FF39):** Primary CTAs, highlights, accents
- **Medium Green (#2D6B2D):** Secondary elements, hover states
- **White:** Text on dark backgrounds, clean sections

---

## 🔧 COMPREHENSIVE DEVELOPMENT PROMPT

```markdown
# Lawn Care & Landscaping Website - Complete Development Specification

## PROJECT OVERVIEW
Build a modern, high-converting lawn care and landscaping service website with a sophisticated green color palette, professional photography, and smooth animations. The site should convey expertise, reliability, and environmental consciousness.

## TECHNICAL STACK

### Required Technologies
- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS v3.4+
- **Animations:** Framer Motion v11+
- **Icons:** Lucide React or React Icons
- **Forms:** React Hook Form + Zod validation
- **Image Optimization:** Next/Image with blur placeholders
- **Deployment:** Vercel or Netlify

### Initial Setup Commands
```bash
# Create Next.js project
npx create-next-app@latest lawn-care-website --typescript --tailwind --app --eslint

cd lawn-care-website

# Install dependencies
npm install framer-motion lucide-react react-hook-form zod @hookform/resolvers
npm install -D @types/node @types/react @types/react-dom

# Optional: UI components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

## COLOR SYSTEM (tailwind.config.ts)

```typescript
export default {
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f0',
          100: '#d9f2d9',
          200: '#b3e5b3',
          300: '#6fcc6f',
          400: '#4a7c4a',
          500: '#2d6b2d',
          600: '#1b4d1b',
          700: '#0a3d0a',
          800: '#082e08',
          900: '#061f06',
        },
        lime: {
          DEFAULT: '#B4FF39',
          light: '#C5FF5C',
          bright: '#D4FF7D',
          dark: '#9FE625',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
```

## SECTION 1: HERO SECTION

### HTML Structure
```tsx
// app/components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Leaf } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lawn-hero-bg.jpg"
          alt="Lush green lawn background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-700/90 via-forest-700/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lime text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
          >
            <Leaf className="w-4 h-4" />
            MOWING THE LAWN
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-hero text-white mb-6 leading-tight"
          >
            Bringing Your Lawn And Garden To Life
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
          >
            Ultimate Lawn Mowing & Gardening Services, Trusted Just for Your Place — 
            Because Every Outdoor Space Deserves Some Love
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Service Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
```

### Button Component
```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-lime text-forest-800 hover:bg-lime-light hover:scale-105 hover:shadow-lg hover:shadow-lime/30':
              variant === 'primary',
            'border-2 border-white text-white hover:bg-white hover:text-forest-700':
              variant === 'outline',
            'text-white hover:bg-white/10': variant === 'ghost',
            'px-6 py-3 text-sm': size === 'sm',
            'px-8 py-4 text-base': size === 'md',
            'px-10 py-5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
```

## SECTION 2: SERVICES GRID

```tsx
// components/ServicesGrid.tsx
const services = [
  {
    title: 'Lawn Health Inspection',
    description: 'Comprehensive analysis of your lawn\'s condition',
    icon: '🔍',
  },
  {
    title: 'Seasonal Cleanups',
    description: 'Keep your outdoor space pristine year-round',
    icon: '🍂',
  },
  {
    title: 'Garden Design & Planting',
    description: 'Transform your vision into a thriving reality',
    icon: '🌱',
  },
  {
    title: 'Green Maintenance',
    description: 'Regular care to keep your lawn flourishing',
    icon: '✂️',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-forest-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lime text-sm font-bold uppercase tracking-wider mb-4"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section text-forest-800"
          >
            Services Designed To Keep<br />Your Outdoors Thriving
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-forest-700 text-lime rounded-full flex items-center justify-center font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-forest-800 mb-3 group-hover:text-forest-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-lime opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## SECTION 3: STATISTICS SECTION

```tsx
// components/StatsSection.tsx
const stats = [
  { number: '1,200+', label: 'Transforming yard', sublabel: 'Into beautiful, thriving spaces across the city' },
  { number: '10+', label: 'Lawn Care Specialists', sublabel: 'Transforming spaces with expertise since 2015' },
  { number: '98%', label: 'Customer Satisfaction', sublabel: 'Trusted by Homeowners for Quality Service' },
  { number: '50+', label: 'Multiple local areas', sublabel: 'Serving Local Areas with Professional Care' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm font-bold text-lime uppercase tracking-wider mb-4">
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            Turning ordinary yards into thriving landscapes since 2015, 
            with 1,200+ completed projects.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We take pride in delivering tailored solutions that match your space, 
            style, and schedule. Every customer matters to us, and we approach 
            each project with a thoughtful conversation...
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-lime to-forest-500 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-500 leading-snug">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## SECTION 4: CORE VALUES (DARK SECTION)

```tsx
// components/CoreValuesSection.tsx
export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-forest-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lime text-sm font-bold uppercase tracking-wider mb-4">
              CORE VALUES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              It's not just lawn care
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We've been turning ordinary spaces into flourishing landscapes since 2006. 
              Whether it's regular mowing, seasonal cleanups, or complete garden redesigns, 
              we have the expertise to make your outdoor dreams a reality.
            </p>

            <div className="space-y-6 mb-10">
              {[
                'Every cut, trim, and plant is handled with precision and pride',
                'On time, on point, and always professional',
                'Healthy yards, safe methods, greener choices',
                'Your satisfaction is our top priority—every visit, every time'
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-lime rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/90 text-lg">{value}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/garden-stairs.jpg"
              alt="Professionally landscaped garden with stairs"
              fill
              className="object-cover"
            />
            {/* Service Badge Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-forest-800/95 backdrop-blur-sm p-6 rounded-xl border border-lime/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-5xl font-bold text-lime mb-1">01-03</div>
                  <div className="text-white/70 text-sm">EVERY CUT, TRIM, AND PLANT IS MADE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

## SECTION 5: TESTIMONIALS

```tsx
// components/TestimonialsSection.tsx
const testimonials = [
  {
    quote: "I had no idea which plants would work best, but their design team guided me through everything and created a beautiful layout with the perfect flowers.",
    author: "Chelsea Cutter",
    role: "Homeowner"
  },
  {
    quote: "I had no idea which plants would work best, but their design team guided me through everything and created a beautiful layout with the perfect flowers.",
    author: "Michael Reyes",
    role: "Homeowner"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-forest-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lime text-sm font-bold uppercase tracking-wider mb-4">
            TESTIMONIAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stories That Prove Why Our<br />Work Matters
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            These aren't just reviews—they're stories that reflect our commitment to making 
            hassle-free, result-driven landscaping care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-forest-700 p-8 md:p-10 rounded-2xl relative group hover:bg-forest-600 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="text-lime text-6xl font-serif mb-6 opacity-50">"</div>
              
              {/* Quote Text */}
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                <p className="text-lime text-sm">{testimonial.role}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-16 h-16 border-2 border-lime/20 rounded-full group-hover:border-lime/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## SECTION 6: PRICING

```tsx
// components/PricingSection.tsx
const plans = [
  {
    name: 'Starter Plan',
    subtitle: 'Perfect for smaller gardens',
    price: 39,
    period: 'visit',
    features: [
      'Lawn mowing up to 100 m²',
      'Edge trimming',
      'General garden tidy-up',
      'Grass clippings removal',
    ],
    highlighted: false,
  },
  {
    name: 'Premium Plan',
    subtitle: 'Ideal for regular maintenance',
    price: 79,
    period: 'visit',
    features: [
      'Lawn mowing (unlimited size)',
      'Trimming & weeding',
      'Light hedge maintenance',
      'Seasonal plant care',
      'Debris removal',
    ],
    highlighted: true,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-forest-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lime text-sm font-bold uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-4">
            Affordable Lawn Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you need a one-time garden cleanup or regular lawn care, 
            our pricing is clear, upfront, and built to match your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                'bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300',
                plan.highlighted && 'ring-4 ring-lime scale-105'
              )}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-forest-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-forest-800">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/ {plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-lime rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-forest-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-forest-700 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Need a Custom Plan?
          </h3>
          <p className="text-white/80 mb-6">
            We'll tailor our services to match your garden size, terrain, and needs — 
            let's build the perfect plan for you.
          </p>
          <Button variant="primary">Contact Us</Button>
        </motion.div>
      </div>
    </section>
  )
}
```

## COMPLETE FILE STRUCTURE

```
lawn-care-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── HeroSection.tsx
│       ├── Navigation.tsx
│       ├── ServicesGrid.tsx
│       ├── StatsSection.tsx
│       ├── CoreValuesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── PricingSection.tsx
│       └── Footer.tsx
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       ├── lawn-hero-bg.jpg
│       ├── garden-stairs.jpg
│       └── services/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ANIMATION PRESETS

```tsx
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
}
```

## ACCESSIBILITY CHECKLIST

- [ ] All images have descriptive alt text
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards (minimum 4.5:1)
- [ ] ARIA labels on icon buttons
- [ ] Skip to content link
- [ ] Semantic HTML5 structure
- [ ] Screen reader tested

## PERFORMANCE OPTIMIZATION

```tsx
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // Enable compression
  compress: true,
}
```

## DEPLOYMENT COMMANDS

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel --prod
```

## ENVIRONMENT VARIABLES (.env.local)

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@lawncare.com
NEXT_PUBLIC_PHONE=+1234567890
```

This prompt provides everything needed to build a production-ready lawn care website with green aesthetics!