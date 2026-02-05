# Secret Valentine Adventure 💕

A charming, interactive "choose your own adventure" Valentine's Day website. Built with React + Vite for a smooth, mobile-friendly experience.

## ✨ Features

- 🎭 Interactive branching story with multiple paths
- 📱 Mobile-first, responsive design
- ✨ Smooth scene transitions with fade effects
- 🎉 Confetti celebration on the final YES
- ♿ Accessible (keyboard navigation, good contrast, large tap targets)
- 📊 Progress indicator showing current scene
- 🔄 Restart functionality

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
- **canvas-confetti** - Confetti animations
- **CSS3** - Styling with gradients and transitions

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

### Colors

Edit the colors in `src/App.css`:
- Background gradient: `.app` class
- Button colors: `.choice-button` class
- Text colors: `.scene-text` and related classes

### Animations

- Scene transitions: Adjust timing in `.scene-container` transition
- Button hover effects: Modify `.choice-button:hover`
- Confetti: Configure in `src/App.jsx` useEffect hook

## 📄 License

This project is open source and available for personal use.

## 💝 Credits

Built with love for a special Valentine's Day surprise.
