# User Flow Diagram - Khai Games Landing Page

## 🎮 Complete User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                    LANDING PAGE FLOW                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│   Page Load     │
│                 │
│ • IntroOverlay  │
│ • Background    │
│   Video Starts  │
│ • Game Audio    │
│   Begins        │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   User Sees     │
│                 │
│ • Dark Video    │
│   Background    │
│ • Monster Image │
│   (Right Side)  │
│ • "START" Button│
│   (Left Side)   │
│ • Atmospheric   │
│   Game Music    │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   User Clicks   │
│   "START"       │
│                 │
│ • Overlay       │
│   Fades Out     │
│ • Audio Pauses  │
│ • Transition    │
│   Animation     │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Hero Video    │
│   Section       │
│                 │
│ • Full-screen   │
│   Video Plays   │
│ • Scroll        │
│   Indicator     │
│ • User Can      │
│   Scroll Down   │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Navigation    │
│   Appears       │
│                 │
│ • Fixed Navbar  │
│ • "KHAI GAMES"  │
│ • Transparent   │
│   → Solid       │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   About Section │
│                 │
│ • Company Story │
│ • Mission       │
│ • Neon Effects  │
│ • Fade-in       │
│   Animation     │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Journey       │
│   Section       │
│                 │
│ • Timeline      │
│   (4 Milestones)│
│ • Desktop:      │
│   Horizontal    │
│ • Mobile:       │
│   Vertical      │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Team Section  │
│                 │
│ • 4 Team        │
│   Members       │
│ • Horror        │
│   Aesthetic     │
│ • Grayscale     │
│   Photos        │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Products      │
│   Section       │
│                 │
│ • NABTU Game    │
│ • Video Preview │
│ • Achievements  │
│ • Pricing       │
│ • Buy Button    │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   Footer        │
│                 │
│ • Company Info  │
│ • Quick Links   │
│ • Games List    │
│ • Monster Image │
└─────────────────┘
```

## 🎨 Color Flow & Visual Progression

### Background Colors
```
IntroOverlay: bg-black (Darkest)
    ↓
IntroVideo: bg-black
    ↓
About: bg-gray-900
    ↓
Journey: bg-gray-800
    ↓
Team: bg-black
    ↓
Products: bg-gray-900
    ↓
Footer: bg-gray-900
```

### Accent Color Progression
```
Blue (Primary) → Purple (Secondary) → Green (Success) → Orange (Warning) → Red (Discount)
```

## 🎵 Audio Flow

```
1. Page Load: Game Music Starts (30% volume)
2. User Clicks START: Music Pauses
3. Hero Video: Video Audio Only
4. User Scrolls: Game Music Resumes
5. Throughout: Continuous Background Music
```

## 📱 Responsive Behavior Flow

### Mobile (< 768px)
```
Timeline: Vertical Stack
Grid Layouts: Single Column
Text Sizes: Smaller
Spacing: Reduced
```

### Tablet (768px - 1024px)
```
Timeline: Vertical Stack
Grid Layouts: 2 Columns
Navigation: Simplified
```

### Desktop (> 1024px)
```
Timeline: Horizontal with Gradient Line
Grid Layouts: 4 Columns
Full Effects: All Animations
```

## 🎯 Interaction Points

### Primary Actions
1. **START Button** - Main entry point
2. **Scroll** - Navigation through sections
3. **Hover Effects** - Interactive feedback
4. **Buy Button** - Conversion point

### Secondary Actions
1. **Navigation Links** - Section jumping
2. **Video Controls** - Media interaction
3. **Social Links** - External engagement

## 🔄 Animation Sequence

### Page Load
```
1. IntroOverlay Fade-in (1s)
2. Background Video Loop
3. Game Audio Start
4. Monster Image Position
5. START Button Glow Effect
```

### User Interaction
```
1. START Click → Overlay Fade-out (1s)
2. Hero Video Start
3. Navbar Appear
4. Content Sections → Scroll-triggered animations
```

### Scroll Animations
```
1. Intersection Observer Detection
2. Transform: translate-y-8 → translate-y-0
3. Opacity: 0 → 100
4. Duration: 1000ms
5. Staggered Grid Animations
```

## 📊 Performance Flow

### Loading Sequence
```
1. HTML Structure
2. CSS Styles (Tailwind)
3. JavaScript Bundle
4. Video Assets
5. Audio Assets
6. Image Assets
```

### Runtime Performance
```
1. Intersection Observer (Lazy animations)
2. Audio Management (Pause/Resume)
3. Video Optimization (Muted, loop)
4. Smooth Scrolling
5. Responsive Adaptations
```

This flow diagram shows the complete user journey and technical implementation flow, helping you understand how each section connects and how users experience the landing page from start to finish. 