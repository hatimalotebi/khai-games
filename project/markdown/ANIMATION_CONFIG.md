# Animation Configuration - Khai Games Landing Page

## 🎬 Animation Settings

### Page Load Animations
```json
{
  "pageLoad": {
    "introOverlay": {
      "duration": "1000ms",
      "effect": "fade-in",
      "delay": "0ms"
    },
    "startButton": {
      "hoverEffect": "scale-110",
      "glowEffect": "opacity-100",
      "transition": "duration-300"
    },
    "monsterImage": {
      "position": "responsive",
      "mobile": {
        "right": "5%",
        "width": "50%"
      },
      "desktop": {
        "right": "-5%",
        "width": "55%"
      }
    }
  }
}
```

### Scroll Animations
```json
{
  "scrollAnimations": {
    "intersectionObserver": {
      "threshold": 0.1,
      "duration": "1000ms",
      "effect": "translate-y-8 to translate-y-0 + opacity-0 to opacity-100"
    },
    "staggeredGrid": {
      "delay": "100ms per item",
      "effect": "fade-in-up"
    }
  }
}
```

### Hover Effects
```json
{
  "hoverEffects": {
    "cards": {
      "scale": "hover:scale-105",
      "border": "hover:border-blue-500/50",
      "shadow": "hover:shadow-blue-500/20",
      "duration": "duration-500"
    },
    "buttons": {
      "scale": "hover:scale-110",
      "glow": "hover:shadow-blue-500/25",
      "duration": "duration-300"
    },
    "images": {
      "grayscale": "grayscale hover:grayscale-0",
      "duration": "duration-500"
    }
  }
}
```

### Background Animations
```json
{
  "backgroundEffects": {
    "neonSpots": {
      "animation": "animate-pulse",
      "delays": ["delay-0", "delay-1000", "delay-2000"],
      "colors": ["blue-500", "purple-500", "cyan-500"],
      "opacity": "opacity-20",
      "blur": "blur-xl"
    },
    "gradientLines": {
      "journeyTimeline": "bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500",
      "animation": "none"
    }
  }
}
```

## 🎮 Gaming-Specific Animations

### Audio Transitions
```json
{
  "audioTransitions": {
    "volume": 0.3,
    "pauseOnScroll": true,
    "resumeOnVideoEnd": true,
    "fadeInDuration": "300ms"
  }
}
```

### Video Effects
```json
{
  "videoEffects": {
    "introVideo": {
      "autoPlay": true,
      "muted": true,
      "loop": true,
      "playsInline": true,
      "pauseOnScroll": true
    },
    "gamePreview": {
      "hoverScale": "group-hover:scale-110",
      "transition": "duration-700",
      "playOverlay": {
        "opacity": "opacity-0 group-hover:opacity-100",
        "duration": "duration-300"
      }
    }
  }
}
```

## 📱 Responsive Animations

### Mobile Animations
```json
{
  "mobile": {
    "timeline": "vertical-stack",
    "gridLayout": "single-column",
    "textSize": "smaller",
    "spacing": "reduced"
  }
}
```

### Tablet Animations
```json
{
  "tablet": {
    "timeline": "vertical-stack",
    "gridLayout": "two-columns",
    "navigation": "simplified"
  }
}
```

### Desktop Animations
```json
{
  "desktop": {
    "timeline": "horizontal-with-gradient",
    "gridLayout": "four-columns",
    "fullEffects": "all-animations"
  }
}
```

## 🎨 Transition Effects

### Fade Transitions
```json
{
  "fadeTransitions": {
    "overlayExit": {
      "duration": "1000ms",
      "effect": "opacity-100 to opacity-0",
      "transform": "translate-x-8"
    },
    "sectionEntrance": {
      "duration": "1000ms",
      "effect": "translate-y-8 opacity-0 to translate-y-0 opacity-100"
    }
  }
}
```

### Scale Transitions
```json
{
  "scaleTransitions": {
    "cards": "hover:scale-105",
    "buttons": "hover:scale-110",
    "images": "hover:scale-110",
    "duration": "duration-300"
  }
}
```

### Color Transitions
```json
{
  "colorTransitions": {
    "text": "hover:text-blue-400",
    "borders": "hover:border-blue-500/50",
    "backgrounds": "hover:bg-blue-500/80",
    "duration": "duration-300"
  }
}
```

## 🔄 Animation Sequences

### Page Load Sequence
```json
{
  "loadSequence": [
    {
      "step": 1,
      "element": "IntroOverlay",
      "action": "fade-in",
      "duration": "1000ms"
    },
    {
      "step": 2,
      "element": "BackgroundVideo",
      "action": "start-loop",
      "duration": "continuous"
    },
    {
      "step": 3,
      "element": "GameAudio",
      "action": "start-playing",
      "volume": 0.3
    },
    {
      "step": 4,
      "element": "MonsterImage",
      "action": "position",
      "responsive": true
    },
    {
      "step": 5,
      "element": "StartButton",
      "action": "glow-effect",
      "duration": "continuous"
    }
  ]
}
```

### User Interaction Sequence
```json
{
  "interactionSequence": [
    {
      "trigger": "START button click",
      "actions": [
        "overlay-fade-out",
        "audio-pause",
        "video-start",
        "navbar-appear"
      ],
      "duration": "1000ms"
    },
    {
      "trigger": "scroll",
      "actions": [
        "section-animations",
        "intersection-observer",
        "staggered-effects"
      ],
      "duration": "1000ms per section"
    }
  ]
}
```

## ⚡ Performance Optimizations

### Animation Performance
```json
{
  "performance": {
    "useTransform": true,
    "useOpacity": true,
    "avoidLayout": true,
    "hardwareAcceleration": true,
    "willChange": "transform, opacity"
  }
}
```

### Intersection Observer Settings
```json
{
  "intersectionObserver": {
    "threshold": 0.1,
    "rootMargin": "0px",
    "once": true,
    "cleanup": true
  }
}
```

---

## 📋 How to Update Animations

1. **Modify duration values** in the JSON configurations
2. **Change animation effects** by updating the effect properties
3. **Adjust timing** by modifying delay values
4. **Update responsive behavior** in the responsive sections
5. **Modify hover effects** in the hoverEffects section
6. **Change background animations** in the backgroundEffects section

All animation changes will be applied to the corresponding components. 