# Secret Valentine Adventure 💕

A charming, interactive "choose your own adventure" Valentine's Day website. Built with React + Vite + Framer Motion for a cinematic, emotionally paced experience.

## ✨ Features

- 🎭 Interactive branching story with multiple paths
- 📱 Mobile-first, responsive design
- 🎬 Cinematic scene transitions with slide & fade animations
- 📝 Sequential text reveal with pacing control
- 💖 Playful, tactile button designs with hover effects
- 🌸 Subtle ambient floating hearts background
- 🎨 Enhanced visual depth with gradients and glows
- 🎯 Emotional scene emphasis for key moments
- 🎉 Enhanced confetti celebration on the final YES
- ♿ Accessible (keyboard navigation, good contrast, large tap targets)
- 📊 Progress dots indicator showing journey position
- 🔄 Restart functionality
- ⏸️ Smart button disabling until text animations complete

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Isha-Valentine
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown (usually `http://localhost:5173`)

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

1. Install the GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js` with your repo name:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()]
})
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or simply connect your GitHub repository to Vercel through their web interface for automatic deployments.

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's deploy page, or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📝 Editing the Story

To modify the story content, edit the file:

```
src/story.js
```

Each scene has the following structure:

```javascript
SCENE_ID: {
  id: "SCENE_ID",
  title: "Optional Title", // Optional
  text: [
    "First paragraph",
    "Second paragraph",
    // ... more paragraphs
  ],
  choices: [
    { label: "Choice text", next: "NEXT_SCENE_ID" },
    // ... more choices
  ]
}
```

### Adding New Scenes

1. Add a new scene object to the `story` object in `src/story.js`
2. Update existing scenes' choices to point to your new scene
3. The story flow will automatically update

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library for smooth, cinematic transitions
- **canvas-confetti** - Confetti animations
- **CSS3** - Styling with gradients, shadows, and custom animations

## 📱 Mobile Support

The website is optimized for mobile devices with:
- Responsive design that works on all screen sizes
- Large touch targets (minimum 48px) for buttons
- Readable font sizes
- Smooth scrolling between scenes

## ♿ Accessibility

- All interactive elements are keyboard accessible
- High contrast text for readability
- Focus indicators on buttons
- Semantic HTML structure
- Screen reader friendly

## 🎨 Customization

### Animation System

The app uses **Framer Motion** for smooth, cinematic animations. Animation behavior is controlled through several components:

#### Text Animation Timing

In `src/AnimatedText.jsx`:
- `delayBetween`: Time between each paragraph (0.4s normal, 0.6s emotional)
- `delayChildren`: Initial delay before first paragraph (0.2s)
- Emotional scenes (S3, S6, S7) automatically use slower pacing

```javascript
const delayBetween = isEmotionalScene ? 0.6 : 0.4
```

#### Scene Transitions

In `src/App.jsx`, the `sceneVariants` object controls:
- `initial`: Scene entrance state (opacity, y position, scale)
- `animate`: Final state with timing
- `exit`: Scene exit animation

```javascript
const sceneVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.3 } }
}
```

#### Button Animations

Buttons have staggered entrance animations controlled by `buttonContainerVariants`:
- `staggerChildren`: Delay between each button (0.15s)
- `delayChildren`: Initial delay before buttons appear (0.2s)

### Visual Styling

#### Colors

Edit colors in `src/App.css`:
- **Background gradient**: `.app` - Multi-stop gradient for depth
- **Button colors**: `.choice-button` - Pink gradient with hover effects
- **Card shadows**: `.card` - Pink-tinted shadows for romantic feel
- **Progress dots**: `.progress-dot` - Active, past, and future states
- **Emotional scenes**: `.emotional-scene .card` - Enhanced shadow and gradient

#### Floating Hearts

Adjust ambient hearts in `src/FloatingHearts.jsx`:
- Number of hearts: Change array length (currently 12)
- Animation speed: Modify `animationDuration` (15-25s range)
- Opacity: Adjust in `FloatingHearts.css` (currently 0.15)

```javascript
const hearts = Array.from({ length: 12 }, (_, i) => ({ ... }))
```

#### Confetti Celebration

Configure confetti in `src/App.jsx`:
- Duration: `duration` variable (currently 4000ms)
- Particle count: `particleCount` calculation
- Colors: Array of pink/red shades
- Velocity and spread: `defaults` object

### Emotional Scene Configuration

To mark scenes as emotional (slower pacing, special styling), edit the array in `src/App.jsx`:

```javascript
const emotionalScenes = ['S3_SOFT_TURN', 'S6_SINCERE_PAUSE', 'S7_QUESTION']
```

Add or remove scene IDs as needed to control which scenes get enhanced treatment.

### Adjusting Pacing

To make the experience faster or slower:

1. **Text animation speed**: Reduce/increase `delayBetween` in `AnimatedText.jsx`
2. **Scene transitions**: Adjust `duration` in `sceneVariants`
3. **Button entrance**: Modify `staggerChildren` timing
4. **Overall feel**: Reduce all animation values by 30-40% for snappier feel

### Mobile Responsiveness

Responsive breakpoints in `src/App.css`:
- `@media (max-width: 640px)` - Small tablets and phones
- `@media (max-width: 375px)` - Extra small phones

Adjust padding, font sizes, and spacing in these media queries.

## 📄 License

This project is open source and available for personal use.

## 💝 Credits

Built with love for a special Valentine's Day surprise.
