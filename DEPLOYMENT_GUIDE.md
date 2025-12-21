# Quick Deployment Guide

## 🚀 Quick Start (5 minutes)

### Option 1: GitHub Pages (Recommended)

**Step 1:** Create a GitHub account if you don't have one
- Go to https://github.com/signup

**Step 2:** Create a new repository
- Click the "+" icon → "New repository"
- Name: `connectomelab-website`
- Public repository
- DO NOT initialize with README
- Click "Create repository"

**Step 3:** Upload files
You can either:

**A. Using GitHub Web Interface (Easiest):**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from the `new_website` folder
3. Write commit message: "Initial website"
4. Click "Commit changes"

**B. Using Command Line (Faster):**
```bash
cd /Users/lucy/Desktop/connectomelab_website/new_website
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/YOUR_USERNAME/connectomelab-website.git
git push -u origin main
```

**Step 4:** Enable GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → `/root`
4. Click Save
5. Wait 1-2 minutes
6. Your site is live at: `https://YOUR_USERNAME.github.io/connectomelab-website/`

### Option 2: Test Locally (Before deploying)

**Open the website on your computer:**
1. Navigate to `new_website` folder
2. Double-click `index.html`
3. Website opens in your browser!

**Or use a local server (better):**
```bash
# Navigate to the folder
cd /Users/lucy/Desktop/connectomelab_website/new_website

# Start a simple server (Python)
python3 -m http.server 8000

# Open browser and go to: http://localhost:8000
```

## 📝 Common Questions

### Q: How do I update the website after initial deployment?
**A:** Just push your changes:
```bash
git add .
git commit -m "Updated team members"
git push
```
GitHub Pages auto-updates in 1-2 minutes!

### Q: Can I use a custom domain (e.g., connectomelab.snu.ac.kr)?
**A:** Yes!
1. GitHub Settings → Pages → Custom domain
2. Add DNS CNAME record at your domain provider

### Q: The website looks broken / doesn't work
**A:** Check:
- All files uploaded correctly (especially `assets` folder)
- GitHub Pages is enabled
- Wait 2-3 minutes after enabling Pages
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### Q: How do I add new members?
**A:** Edit `assets/js/data.js`:
```javascript
// Add to teamMembers array
{
    name: "새 멤버",
    role: "박사과정",
    degree: "박사",
    department: "심리학과",
    email: "email@snu.ac.kr",
    research: ["Research Area"]
}
```

### Q: How do I add news?
**A:** Edit `assets/js/data.js`:
```javascript
// Add to newsItems array
{
    date: "2024-12-21",
    title: "News Title",
    content: "Description...",
    type: "latest"  // or "archive"
}
```

## 🎨 Customization Tips

### Change Colors
Edit `assets/css/style.css` around line 10:
```css
:root {
    --primary-color: #2563eb;    /* Main color */
    --secondary-color: #1e40af;  /* Accent color */
}
```

### Update Lab Description
Edit `index.html` around line 40 (hero section).

### Add Sections
Copy an existing section in `index.html` and modify.

## 🔍 Troubleshooting

### Images not showing
- Check `assets/images/` folder exists
- Verify logo path in HTML: `assets/images/connectomelab_logo.png`

### JavaScript not working
- Check browser console (F12) for errors
- Ensure `assets/js/data.js` and `assets/js/main.js` are loaded

### Mobile menu not working
- Clear cache
- Check hamburger icon appears on mobile

## 📧 Need Help?

Contact: connectome@snu.ac.kr

---

**Remember:** After ANY change, commit and push to GitHub for the website to update!
