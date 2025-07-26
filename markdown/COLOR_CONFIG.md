# Color Configuration - Khai Games Landing Page

## 🎨 Color Palette

### Primary Colors
```json
{
  "primaryColors": {
    "background": {
      "main": "bg-gray-900",
      "secondary": "bg-gray-800",
      "darkest": "bg-black",
      "overlay": "bg-black bg-opacity-70"
    },
    "text": {
      "primary": "text-white",
      "secondary": "text-gray-300",
      "muted": "text-gray-400",
      "accent": "text-blue-400"
    }
  }
}
```

### Accent Colors
```json
{
  "accentColors": {
    "blue": {
      "primary": "text-blue-400",
      "background": "bg-blue-500",
      "border": "border-blue-500",
      "glow": "shadow-blue-500/25",
      "hover": "hover:text-blue-400"
    },
    "purple": {
      "primary": "text-purple-400",
      "background": "bg-purple-500",
      "border": "border-purple-500",
      "glow": "shadow-purple-500/25",
      "hover": "hover:text-purple-400"
    },
    "green": {
      "primary": "text-green-400",
      "background": "bg-green-500",
      "border": "border-green-500",
      "glow": "shadow-green-500/25",
      "hover": "hover:text-green-400"
    },
    "orange": {
      "primary": "text-orange-400",
      "background": "bg-orange-500",
      "border": "border-orange-500",
      "glow": "shadow-orange-500/25",
      "hover": "hover:text-orange-400"
    },
    "red": {
      "primary": "text-red-400",
      "background": "bg-red-500",
      "border": "border-red-500",
      "glow": "shadow-red-500/25",
      "hover": "hover:text-red-400"
    },
    "yellow": {
      "primary": "text-yellow-400",
      "background": "bg-yellow-500",
      "border": "border-yellow-500",
      "glow": "shadow-yellow-500/25",
      "hover": "hover:text-yellow-400"
    }
  }
}
```

## 🎭 Section-Specific Colors

### IntroOverlay Colors
```json
{
  "introOverlay": {
    "background": "bg-black",
    "overlay": "bg-black bg-opacity-70",
    "button": {
      "text": "text-white",
      "hover": "hover:text-gray-300",
      "glow": "bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"
    },
    "monsterImage": {
      "shadow": "drop-shadow-2xl"
    }
  }
}
```

### About Section Colors
```json
{
  "about": {
    "background": "bg-gray-900",
    "neonSpots": {
      "blue": "bg-blue-500 opacity-20",
      "purple": "bg-purple-500 opacity-20",
      "cyan": "bg-cyan-500 opacity-20"
    },
    "card": {
      "background": "bg-gray-800/50",
      "border": "border-gray-700/50",
      "hoverBorder": "hover:border-blue-500/30"
    },
    "text": {
      "heading": "text-white",
      "body": "text-gray-300",
      "description": "text-gray-400"
    }
  }
}
```

### Journey Section Colors
```json
{
  "journey": {
    "background": "bg-gray-800",
    "timeline": {
      "line": "bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500",
      "milestones": {
        "blue": "from-blue-500 to-cyan-500",
        "purple": "from-purple-500 to-pink-500",
        "green": "from-green-500 to-emerald-500",
        "orange": "from-orange-500 to-red-500"
      }
    },
    "cards": {
      "background": "bg-gray-900/80",
      "border": "border-gray-700/50",
      "hover": "hover:border-gray-600/50"
    }
  }
}
```

### Team Section Colors
```json
{
  "team": {
    "background": "bg-black",
    "cards": {
      "background": "bg-gray-900",
      "border": "border-gray-800",
      "hoverBorder": "hover:border-blue-500/50",
      "header": "bg-gradient-to-b from-gray-800 to-gray-900",
      "title": "text-blue-400"
    },
    "photos": {
      "frame": "bg-gradient-to-br from-gray-700 to-gray-900",
      "border": "border-gray-600",
      "hoverGlow": "bg-blue-500/20"
    },
    "badges": {
      "background": "bg-gray-800",
      "border": "border-gray-700",
      "hoverBorder": "hover:border-blue-500/50",
      "hoverText": "hover:text-blue-400"
    }
  }
}
```

### Products Section Colors
```json
{
  "products": {
    "background": "bg-gray-900",
    "card": {
      "background": "bg-gray-800/80",
      "border": "border-gray-700/50",
      "hoverBorder": "hover:border-blue-500/50"
    },
    "video": {
      "overlay": "bg-black/40",
      "playButton": "bg-blue-600/80",
      "hoverPlayButton": "hover:bg-blue-500/80"
    },
    "badges": {
      "available": "bg-green-500/80",
      "discount": "bg-red-500/90"
    },
    "achievements": {
      "background": "bg-gray-800/50",
      "border": "border-gray-700/30",
      "hoverBorder": "hover:border-gray-600/50"
    },
    "platforms": {
      "background": "bg-gray-700/50",
      "border": "border-gray-600/30",
      "hoverBorder": "hover:border-blue-500/30"
    },
    "buyButton": {
      "background": "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800",
      "border": "border-blue-500/30",
      "hoverBorder": "hover:border-blue-400/50",
      "glow": "hover:shadow-blue-500/25"
    }
  }
}
```

### Footer Colors
```json
{
  "footer": {
    "background": "bg-gray-900",
    "border": "border-gray-800",
    "neonSpots": {
      "blue": "bg-blue-500 opacity-10",
      "purple": "bg-purple-500 opacity-10"
    },
    "links": {
      "text": "text-gray-400",
      "hover": "hover:text-blue-400"
    },
    "brand": "text-blue-400"
  }
}
```

## 🎨 Gradient Configurations

### Button Gradients
```json
{
  "buttonGradients": {
    "primary": "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800",
    "secondary": "bg-gradient-to-br from-gray-700 to-gray-900",
    "hover": "bg-gradient-to-r from-transparent via-white/10 to-transparent"
  }
}
```

### Card Gradients
```json
{
  "cardGradients": {
    "glassmorphism": "bg-gray-800/50 backdrop-blur-lg",
    "header": "bg-gradient-to-b from-gray-800 to-gray-900",
    "overlay": "bg-gradient-to-t from-black/30 via-transparent to-blue-500/10"
  }
}
```

### Background Gradients
```json
{
  "backgroundGradients": {
    "timeline": "bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500",
    "neonEffect": "bg-gradient-to-r from-transparent via-blue-500/10 to-transparent",
    "monsterFrame": "bg-gradient-to-br from-gray-700 to-gray-900"
  }
}
```

## 🌈 Color Progression

### Section Color Flow
```json
{
  "sectionColorFlow": {
    "introOverlay": "bg-black",
    "introVideo": "bg-black",
    "about": "bg-gray-900",
    "journey": "bg-gray-800",
    "team": "bg-black",
    "products": "bg-gray-900",
    "footer": "bg-gray-900"
  }
}
```

### Accent Color Progression
```json
{
  "accentColorProgression": [
    "blue-400",
    "purple-400", 
    "green-400",
    "orange-400",
    "red-400"
  ]
}
```

## 🎯 Interactive Colors

### Hover States
```json
{
  "hoverStates": {
    "text": "hover:text-blue-400",
    "borders": "hover:border-blue-500/50",
    "backgrounds": "hover:bg-blue-500/80",
    "shadows": "hover:shadow-blue-500/25",
    "scales": "hover:scale-105"
  }
}
```

### Focus States
```json
{
  "focusStates": {
    "outline": "focus:outline-none",
    "ring": "focus:ring-2 focus:ring-blue-500",
    "border": "focus:border-blue-500"
  }
}
```

### Active States
```json
{
  "activeStates": {
    "scale": "active:scale-95",
    "opacity": "active:opacity-80"
  }
}
```

## 🎨 Custom Color Classes

### Tailwind Extensions
```json
{
  "tailwindExtensions": {
    "colors": {
      "golden-sand": "#C19A6B"
    },
    "fontFamily": {
      "serif": ["Georgia", "Times New Roman", "serif"],
      "sans": ["Inter", "system-ui", "sans-serif"]
    }
  }
}
```

## 📱 Responsive Color Adjustments

### Mobile Colors
```json
{
  "mobile": {
    "textSize": "text-sm",
    "spacing": "p-4",
    "opacity": "opacity-90"
  }
}
```

### Desktop Colors
```json
{
  "desktop": {
    "textSize": "text-xl",
    "spacing": "p-8",
    "opacity": "opacity-100"
  }
}
```

---

## 📋 How to Update Colors

1. **Modify color values** in the JSON configurations
2. **Change gradient directions** by updating gradient classes
3. **Adjust opacity levels** for transparency effects
4. **Update hover states** in the interactive sections
5. **Modify section-specific colors** in their respective sections
6. **Change accent color progression** for different themes

All color changes will be applied to the corresponding components and sections. 