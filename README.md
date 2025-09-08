# 🌱 Welcome to My Coding Garden! 🌸

<div align="center">

<!-- Garden Scene - Dark Mode -->
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients for night sky and ground -->
    <linearGradient id="skyGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#232946;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#212529;stop-opacity:1" />
    </linearGradient>
    
    <linearGradient id="groundGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#343a40;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#495057;stop-opacity:1" />
    </linearGradient>

    <!-- Cloud animation -->
    <style>
      .cloud {
        animation: drift 20s infinite linear;
      }
      .cloud2 {
        animation: drift 25s infinite linear;
        animation-delay: -10s;
      }
      .moon-rays {
        animation: rotate 10s infinite linear;
        transform-origin: 100px 80px;
      }
      .plant-sway {
        animation: sway 3s infinite ease-in-out;
        transform-origin: bottom center;
      }
      .plant-sway-2 {
        animation: sway 4s infinite ease-in-out;
        transform-origin: bottom center;
        animation-delay: -1s;
      }
      .plant-sway-3 {
        animation: sway 5s infinite ease-in-out;
        transform-origin: bottom center;
        animation-delay: -2s;
      }
      .mystery-seed {
        transition: all 0.5s ease;
        cursor: pointer;
      }
      .mystery-seed:hover {
        transform: scale(1.2);
      }
      .flower-bloom {
        animation: bloom 2s ease-out;
      }
      
      @keyframes drift {
        from { transform: translateX(-100px); }
        to { transform: translateX(900px); }
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes sway {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(2deg); }
        75% { transform: rotate(-2deg); }
      }
      
      @keyframes bloom {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
        100% { transform: scale(1) rotate(360deg); opacity: 1; }
      }
    </style>
  </defs>

  <!-- Night Sky Background -->
  <rect width="800" height="250" fill="url(#skyGradientDark)" />
  
  <!-- Ground -->
  <rect y="250" width="800" height="150" fill="url(#groundGradientDark)" />
  
  <!-- Moon -->
  <circle cx="100" cy="80" r="26" fill="#f8f9fa" opacity="0.95" />
  <circle cx="110" cy="75" r="5" fill="#d7d7e3" opacity="0.8" />
  <g class="moon-rays">
    <line x1="70" y1="50" x2="60" y2="40" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
    <line x1="130" y1="50" x2="140" y2="40" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
    <line x1="70" y1="110" x2="60" y2="120" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
    <line x1="130" y1="110" x2="140" y2="120" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
    <line x1="50" y1="80" x2="40" y2="80" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
    <line x1="150" y1="80" x2="160" y2="80" stroke="#f8f9fa" stroke-width="2" opacity="0.5" />
  </g>
  
  <!-- Clouds (darker for night) -->
  <g class="cloud">
    <ellipse cx="200" cy="100" rx="30" ry="20" fill="#c6c7d0" opacity="0.6" />
    <ellipse cx="220" cy="95" rx="35" ry="25" fill="#b7b8c2" opacity="0.6" />
    <ellipse cx="240" cy="105" rx="25" ry="18" fill="#a8a8b8" opacity="0.6" />
  </g>
  
  <g class="cloud2">
    <ellipse cx="500" cy="120" rx="25" ry="15" fill="#c6c7d0" opacity="0.4" />
    <ellipse cx="515" cy="115" rx="30" ry="20" fill="#b7b8c2" opacity="0.4" />
    <ellipse cx="530" cy="125" rx="20" ry="15" fill="#a8a8b8" opacity="0.4" />
  </g>

  <!-- Plant 1: Active Repository (Green & Blooming) -->
  <g class="plant-sway" id="plant1">
    <!-- Stem -->
    <line x1="150" y1="350" x2="150" y2="280" stroke="#1f6f3d" stroke-width="8" />
    <!-- Leaves -->
    <ellipse cx="135" cy="320" rx="15" ry="8" fill="#3dd68c" transform="rotate(-45 135 320)" />
    <ellipse cx="165" cy="310" rx="15" ry="8" fill="#3dd68c" transform="rotate(45 165 310)" />
    <ellipse cx="140" cy="300" rx="12" ry="6" fill="#6ce9a6" transform="rotate(-30 140 300)" />
    <!-- Flower (cooler pinks for night) -->
    <circle cx="150" cy="280" r="12" fill="#a259a9" />
    <circle cx="145" cy="275" r="6" fill="#b98fc7" />
    <circle cx="155" cy="275" r="6" fill="#b98fc7" />
    <circle cx="145" cy="285" r="6" fill="#b98fc7" />
    <circle cx="155" cy="285" r="6" fill="#b98fc7" />
    <circle cx="150" cy="280" r="4" fill="#fffdd0" />
  </g>

  <!-- Plant 2: Dormant Repository (Yellow) -->
  <g class="plant-sway-2" id="plant2">
    <!-- Stem -->
    <line x1="350" y1="350" x2="350" y2="300" stroke="#b2996e" stroke-width="6" />
    <!-- Leaves (muted yellow) -->
    <ellipse cx="340" cy="330" rx="12" ry="6" fill="#c7b27b" transform="rotate(-30 340 330)" />
    <ellipse cx="360" cy="325" rx="12" ry="6" fill="#a89256" transform="rotate(30 360 325)" />
    <ellipse cx="345" cy="315" rx="10" ry="5" fill="#e5c889" transform="rotate(-15 345 315)" />
    <!-- Small bud -->
    <circle cx="350" cy="300" r="6" fill="#c7b27b" />
  </g>

  <!-- Plant 3: Old Repository (Withered) -->
  <g class="plant-sway-3" id="plant3">
    <!-- Stem (brown) -->
    <line x1="550" y1="350" x2="545" y2="320" stroke="#6c4c3c" stroke-width="4" />
    <!-- Withered leaves -->
    <ellipse cx="535" cy="340" rx="8" ry="4" fill="#826e5b" transform="rotate(-60 535 340)" />
    <ellipse cx="555" cy="335" rx="6" ry="3" fill="#6c4c3c" transform="rotate(45 555 335)" />
    <!-- Drooping flower -->
    <circle cx="545" cy="320" r="4" fill="#6c4c3c" />
  </g>

  <!-- Mystery Seed (Hidden until clicked) -->
  <g class="mystery-seed" id="mystery-seed">
    <circle cx="700" cy="340" r="8" fill="#443a2f" />
    <circle cx="700" cy="340" r="4" fill="#23201c" />
  </g>

  <!-- Ground details (darker) -->
  <ellipse cx="150" cy="355" rx="25" ry="5" fill="#443a2f" opacity="0.3" />
  <ellipse cx="350" cy="355" rx="20" ry="4" fill="#443a2f" opacity="0.3" />
  <ellipse cx="550" cy="355" rx="15" ry="3" fill="#443a2f" opacity="0.3" />
  <ellipse cx="700" cy="345" rx="12" ry="3" fill="#443a2f" opacity="0.3" />
</svg>

</div>

## 🌿 My Repository Garden

Each plant in my garden represents a different aspect of my coding journey:

<details>
<summary>🌸 <strong>Active Project</strong> - My Portfolio Website</summary>

**Repository:** `francismul/portfolio`  
**Language:** TypeScript  
**Last Commit:** 2 days ago  
**Description:** Modern portfolio website built with React and Next.js, featuring smooth animations and responsive design.  
**Status:** 🌱 Actively growing with regular updates and new features!

</details>

<details>
<summary>🌾 <strong>Dormant Project</strong> - CLI Task Manager</summary>

**Repository:** `francismul/task-cli`  
**Language:** Python  
**Last Commit:** 3 weeks ago  
**Description:** Command-line task management tool with productivity features and calendar integration.  
**Status:** 😴 Taking a break, but ready to bloom again when needed!

</details>

<details>
<summary>🍂 <strong>Archive Project</strong> - College Assignment</summary>

**Repository:** `francismul/data-structures-hw`  
**Language:** Java  
**Last Commit:** 8 months ago  
**Description:** Collection of data structure implementations and algorithms from computer science coursework.  
**Status:** 📚 Preserved for learning and reference purposes.

</details>

<details>
<summary>🎁 <strong>Mystery Seed</strong> - Click to reveal!</summary>

**🌟 SURPRISE! 🌟**  
This mysterious seed represents my next big project that's currently in the planning phase. It could grow into:
- 🤖 An AI-powered coding assistant
- 🎮 A web-based game engine  
- 📱 A mobile app for developers
- 🔮 Something completely unexpected!

*Stay tuned for the big reveal...* 🎬

</details>

---

### 🌑 Garden Weather Report
*Current coding climate: 🌙 **Clear Night** - Quiet productivity with 15+ commits across multiple repositories!*

<div align="center">

**🌱 Growing:** 3 active repositories  
**🌾 Resting:** 2 dormant projects  
**📚 Archived:** 5 completed projects  
**⭐ Starred:** 47 inspiring repositories  

</div>

---

### 🛠️ Technologies in My Garden
```
🌿 Frontend:  React, TypeScript, Next.js, Tailwind CSS
🌳 Backend:   Node.js, Python, Express, FastAPI  
🌸 Database:  PostgreSQL, MongoDB, Redis
🌺 Tools:     Git, Docker, AWS, GitHub Actions
🌵 Learning:  Rust, Go, Machine Learning
```

---

<div align="center">

*"The best time to plant a tree was 20 years ago. The second best time is now."*  
**Let's grow something amazing together! 🌱**

[![GitHub followers](https://img.shields.io/github/followers/francismul?style=social)](https://github.com/francismul)
[![GitHub stars](https://img.shields.io/github/stars/francismul?style=social)](https://github.com/francismul)

</div>
