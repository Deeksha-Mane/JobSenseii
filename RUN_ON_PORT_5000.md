# Running Entire Application on Port 5000

## Quick Start

1. **Stop your Live Server** (if running on port 5502)

2. **Run Flask:**
   ```bash
   python app.py
   ```

3. **Access your application:**
   - Homepage: `http://localhost:5000/`
   - Dashboard: `http://localhost:5000/pages/dashboard.html`
   - AI Career Guide: `http://localhost:5000/career-guide`
   - Any page: `http://localhost:5000/pages/[filename].html`

## What Changed

### ✅ Flask Configuration
- `app.py` now serves ALL static files (CSS, JS, images)
- Added route `/pages/<filename>` to serve your HTML pages
- Static folder set to root directory (`.`)

### ✅ All Pages Work
- `/` → templates/index.html (Flask template)
- `/pages/homepage.html` → Your homepage
- `/pages/dashboard.html` → Your dashboard
- `/pages/profile.html` → Profile page
- `/career-guide` → AI Career Guide (Flask route)
- All other pages in `/pages/` folder

### ✅ Assets Work
- CSS: `/css/homepage.css`, `/css/dashboard.css`, etc.
- JS: `/js/dashboard.js`, `/js/config.js`, etc.
- Images: `/assets/images/logo.svg`, etc.

## File Structure
```
your-project/
├── app.py                 # Flask server (runs on port 5000)
├── career_engine.py       # AI recommendation engine
├── templates/             # Flask templates
│   ├── index.html         # Landing page
│   ├── career_guide.html  # AI Career Guide form
│   ├── career_recommendation.html
│   └── roadmap.html
├── pages/                 # Static HTML pages (served by Flask)
│   ├── homepage.html
│   ├── dashboard.html
│   ├── profile.html
│   └── ... (all other pages)
├── css/                   # Stylesheets
├── js/                    # JavaScript files
└── assets/                # Images and other assets
```

## Benefits of Running on Port 5000

1. **Single Server** - Everything runs from one Flask instance
2. **No CORS Issues** - All pages on same origin
3. **Session Management** - Flask sessions work across all pages
4. **Unified Routing** - Clean URL structure
5. **Easy Deployment** - Deploy one Flask app, not multiple servers

## Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### CSS Not Loading
- Make sure `static_folder='.'` is set in Flask app
- Check browser console for 404 errors
- Verify file paths start with `/` (e.g., `/css/homepage.css`)

### Pages Not Found
- Ensure files are in `/pages/` folder
- Use `/pages/filename.html` in URLs
- Check Flask console for routing errors

## Development vs Production

### Development (Current Setup)
```python
if __name__ == '__main__':
    app.run(debug=True)  # Port 5000 by default
```

### Production
```python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
```

Or use a production server like Gunicorn:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## Next Steps

1. Update any hardcoded URLs in your JavaScript files
2. Test all navigation links
3. Verify Firebase authentication works
4. Test AI Career Guide flow end-to-end
5. Check all forms submit correctly

Your entire application now runs on **http://localhost:5000** 🚀
