# SNU Connectome Lab Website

A modern, responsive website for the Seoul National University Connectome Laboratory.

## Features

### 🎯 Interactive Team Section
- **Filter by Degree**: PhD (박사), Combined MS-PhD (석박), Professor
- **Filter by Department**: Psychology (심리학과), AI (협동과정 인공지능), Brain & Cognitive Sciences (뇌인지과학과)
- **Filter by Research Area**: Foundation Model, Neuroscience, QML, Genetics, Emotions, Development, Generative Model
- Dynamic filtering with smooth animations

### 📰 Improved News Architecture
- **Home Page**: Shows latest 3 news items
- **News Page**: Complete timeline with filtering
  - Latest News (recent updates)
  - Archive (historical news)
- Clean, timeline-based design

### ⚡ Performance Optimizations
- Lightweight: Pure HTML/CSS/JavaScript (no heavy frameworks)
- Fast loading: Minimal dependencies
- Responsive: Works on all devices
- SEO-friendly: Semantic HTML structure

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
```bash
# Navigate to your project directory
cd /Users/lucy/Desktop/connectomelab_website/new_website

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: SNU Connectome Lab website"
```

### Step 2: Create GitHub Repository Online
1. Go to https://github.com
2. Click "New repository"
3. Name it: `connectomelab-website` (or any name you prefer)
4. Do NOT initialize with README (we already have files)
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/connectomelab-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at: `https://YOUR_USERNAME.github.io/connectomelab-website/`

### Step 5: Custom Domain (Optional)
If you want a custom domain like `connectomelab.snu.ac.kr`:
1. In GitHub Pages settings, add your custom domain
2. In your domain DNS settings, add a CNAME record pointing to `YOUR_USERNAME.github.io`

## Project Structure

```
new_website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   ├── data.js        # Team members and news data
│   │   └── main.js        # Interactive functionality
│   └── images/
│       └── connectomelab_logo.png
└── README.md              # This file
```

## Customization

### Adding New Team Members
Edit `assets/js/data.js` and add to the `teamMembers` array:

```javascript
{
    name: "홍길동",
    role: "박사과정",
    studentId: "2024-12345",
    semester: "2학기",
    room: "M425",
    degree: "박사",
    email: "hong@snu.ac.kr",
    phone: "010-1234-5678",
    department: "심리학과",
    research: ["Neuroscience", "AI"]
}
```

### Adding News Items
Edit `assets/js/data.js` and add to the `newsItems` array:

```javascript
{
    date: "2024-12-21",
    title: "Your News Title",
    content: "News description here...",
    type: "latest"  // or "archive"
}
```

### Updating Research Content
Edit the Research section in `index.html` (around line 120).

### Styling Changes
Edit `assets/css/style.css` to modify colors, fonts, spacing, etc.

Color scheme is defined in CSS variables:
```css
:root {
    --primary-color: #2563eb;    /* Main blue */
    --secondary-color: #1e40af;  /* Darker blue */
    --accent-color: #3b82f6;     /* Light blue */
}
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Updates and Maintenance

To update the website:
```bash
# Make your changes
git add .
git commit -m "Describe your changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site!

## Support

For questions or issues:
- Email: connectome@snu.ac.kr
- Check GitHub Issues in your repository

---

Built with ❤️ for SNU Connectome Lab
