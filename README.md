# Hover Contrast Cards App

A React + Vite + Tailwind CSS application featuring a collapsible sidebar and an inverted hover effect component.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## ✨ Features

- **Collapsible Sidebar**: Smooth animations, mobile responsive
- **Inverted Hover Effect**: Cards with grayscale effect on non-hovered items
- **Modern Stack**: React 18, Vite, Tailwind CSS 3.4+
- **Responsive Design**: Works on all screen sizes

## 📁 Project Structure

```
src/
├── components/
│   ├── HoverContrastCards.jsx  # Main hover effect component
│   └── Sidebar.jsx              # Collapsible sidebar
├── App.jsx                      # Main app with routing logic
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

## 🎨 How the Hover Effect Works

The effect uses Tailwind's `group-has-[:hover]` modifier:

```jsx
<div className="group">
  <div className="card
    group-has-[:hover]:grayscale 
    hover:!grayscale-0">
    Content
  </div>
</div>
```

When you hover over a card, all other cards become grayscale and dimmed.

## 🛠️ Technologies

- React 18
- Vite 5
- Tailwind CSS 3.4+
- Lucide React (icons)

