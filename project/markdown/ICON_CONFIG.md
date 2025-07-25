# Icon Configuration - Khai Games Landing Page

## 🎯 Icon Library

### Heroicons (Primary Icon Set)
```json
{
  "heroicons": {
    "import": "@heroicons/react/24/solid",
    "icons": {
      "play": "PlayIcon",
      "trophy": "TrophyIcon", 
      "users": "UsersIcon",
      "star": "StarIcon",
      "arrow": "ArrowIcon",
      "menu": "Bars3Icon",
      "close": "XMarkIcon",
      "chevron": "ChevronDownIcon"
    }
  }
}
```

## 🎮 Gaming Icons

### Achievement Icons
```json
{
  "achievementIcons": {
    "downloads": {
      "icon": "UsersIcon",
      "color": "text-blue-400",
      "size": "w-8 h-8"
    },
    "ranking": {
      "icon": "TrophyIcon", 
      "color": "text-yellow-400",
      "size": "w-8 h-8"
    },
    "rating": {
      "icon": "StarIcon",
      "color": "text-green-400", 
      "size": "w-8 h-8"
    },
    "award": {
      "icon": "TrophyIcon",
      "color": "text-purple-400",
      "size": "w-8 h-8"
    }
  }
}
```

### Navigation Icons
```json
{
  "navigationIcons": {
    "scrollIndicator": {
      "type": "custom",
      "classes": "w-6 h-10 border-2 border-white rounded-full",
      "innerElement": "w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"
    },
    "playButton": {
      "icon": "PlayIcon",
      "size": "w-12 h-12",
      "color": "text-white",
      "background": "bg-blue-600/80 backdrop-blur-sm rounded-full p-4"
    }
  }
}
```

## 🎨 Decorative Icons

### Corner Decorations
```json
{
  "cornerDecorations": {
    "teamCards": {
      "topLeft": "absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-600 opacity-50",
      "topRight": "absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-600 opacity-50",
      "bottomLeft": "absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-600 opacity-50",
      "bottomRight": "absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-600 opacity-50"
    }
  }
}
```

### Milestone Numbers
```json
{
  "milestoneNumbers": {
    "style": "absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center",
    "textStyle": "text-xs font-bold text-gray-900",
    "mobileStyle": "absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center",
    "mobileTextStyle": "text-xs font-bold text-gray-900"
  }
}
```

## 📱 Responsive Icons

### Mobile Icon Adjustments
```json
{
  "mobileIcons": {
    "achievementIcons": {
      "size": "w-6 h-6"
    },
    "playButton": {
      "size": "w-8 h-8"
    },
    "cornerDecorations": {
      "size": "w-2 h-2"
    }
  }
}
```

### Desktop Icon Adjustments
```json
{
  "desktopIcons": {
    "achievementIcons": {
      "size": "w-8 h-8"
    },
    "playButton": {
      "size": "w-12 h-12"
    },
    "cornerDecorations": {
      "size": "w-3 h-3"
    }
  }
}
```

## 🎯 Icon Usage by Section

### IntroOverlay Icons
```json
{
  "introOverlay": {
    "startButton": {
      "type": "text",
      "style": "text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-wider",
      "fontFamily": "serif"
    }
  }
}
```

### Products Section Icons
```json
{
  "products": {
    "achievements": [
      {
        "icon": "UsersIcon",
        "label": "Downloads",
        "value": "50K+",
        "color": "text-blue-400"
      },
      {
        "icon": "TrophyIcon", 
        "label": "KSA Ranking",
        "value": "#7",
        "color": "text-yellow-400"
      },
      {
        "icon": "StarIcon",
        "label": "User Rating", 
        "value": "4.8/5",
        "color": "text-green-400"
      },
      {
        "icon": "TrophyIcon",
        "label": "Best Saudi Game",
        "value": "2024", 
        "color": "text-purple-400"
      }
    ],
    "playButton": {
      "icon": "PlayIcon",
      "size": "w-12 h-12",
      "color": "text-white"
    }
  }
}
```

### Journey Section Icons
```json
{
  "journey": {
    "milestoneIcons": {
      "size": "w-12 h-12",
      "filter": "filter brightness-0 invert",
      "mobileSize": "w-8 h-8"
    },
    "timelineLine": {
      "type": "gradient",
      "classes": "bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500"
    }
  }
}
```

## 🎨 Icon Styling

### Icon Colors
```json
{
  "iconColors": {
    "primary": "text-white",
    "secondary": "text-gray-400",
    "accent": "text-blue-400",
    "success": "text-green-400",
    "warning": "text-yellow-400",
    "error": "text-red-400",
    "purple": "text-purple-400"
  }
}
```

### Icon Sizes
```json
{
  "iconSizes": {
    "xs": "w-4 h-4",
    "sm": "w-6 h-6", 
    "md": "w-8 h-8",
    "lg": "w-12 h-12",
    "xl": "w-16 h-16"
  }
}
```

### Icon Effects
```json
{
  "iconEffects": {
    "hover": "hover:scale-110 transition-transform duration-300",
    "glow": "drop-shadow-lg",
    "filter": "filter brightness-0 invert",
    "opacity": "opacity-75 hover:opacity-100"
  }
}
```

## 🔧 Icon Implementation

### Import Statement
```javascript
import { PlayIcon, TrophyIcon, UsersIcon, StarIcon } from '@heroicons/react/24/solid';
```

### Usage Examples
```javascript
// Achievement icon
<UsersIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />

// Play button
<PlayIcon className="w-12 h-12 text-white" />

// Corner decoration
<div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-600 opacity-50"></div>
```

## 📱 Responsive Icon Behavior

### Breakpoint Adjustments
```json
{
  "responsiveIcons": {
    "mobile": {
      "achievementIcons": "w-6 h-6",
      "playButton": "w-8 h-8",
      "cornerDecorations": "w-2 h-2"
    },
    "tablet": {
      "achievementIcons": "w-7 h-7",
      "playButton": "w-10 h-10",
      "cornerDecorations": "w-2.5 h-2.5"
    },
    "desktop": {
      "achievementIcons": "w-8 h-8",
      "playButton": "w-12 h-12", 
      "cornerDecorations": "w-3 h-3"
    }
  }
}
```

## 🎯 Custom Icons

### Logo Placeholders
```json
{
  "logoPlaceholders": {
    "supporterLogos": {
      "style": "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center",
      "textStyle": "text-white font-bold text-sm"
    }
  }
}
```

### Decorative Elements
```json
{
  "decorativeElements": {
    "scrollIndicator": {
      "container": "w-6 h-10 border-2 border-white rounded-full mx-auto",
      "inner": "w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"
    },
    "milestoneNumbers": {
      "container": "absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center",
      "text": "text-xs font-bold text-gray-900"
    }
  }
}
```

---

## 📋 How to Update Icons

1. **Change icon imports** by modifying the import statement
2. **Update icon sizes** in the size configurations
3. **Modify icon colors** in the color configurations
4. **Adjust responsive behavior** in the responsive sections
5. **Add new icons** by updating the icon libraries
6. **Change decorative elements** in the decorative sections

All icon changes will be applied to the corresponding components and sections. 