# How to Access "My Roadmaps"

## For Returning Users - Multiple Access Points

### 1. Dashboard (Main Access Point)
**Location**: Dashboard page (`/pages/dashboard.html`)

**Option A - Sidebar Navigation**
- Look at the left sidebar
- Click on "🗺️ My Roadmaps" link
- Direct access to all your career paths

**Option B - Stats Card (Top of Dashboard)**
- First card in the stats grid shows "My Roadmaps"
- Displays count of active career paths
- Click anywhere on the card to view all roadmaps

### 2. Homepage Navigation
**Location**: Homepage (`/pages/homepage.html`)

- Click on "Career Guide" dropdown in navbar
- Select "🗺️ My Roadmaps" from dropdown menu
- Quick access from any page

### 3. Career Recommendation Page
**Location**: After taking career quiz (`/career-recommendation`)

- Scroll to bottom of recommendations
- See "Already have roadmaps?" section
- Click "View All My Roadmaps" button

### 4. Direct URL
Simply navigate to: `/my-roadmaps`

## What You'll See

### My Roadmaps Dashboard
- **Grid of Career Path Cards**: Each roadmap you've committed to
- **Progress Bars**: Visual progress for each path
- **Stats**: Completed topics / Total topics
- **Actions**: 
  - "View Roadmap" - Continue learning
  - "Share" - Share your progress

### Empty State (No Roadmaps Yet)
If you haven't committed to any roadmap:
- See message: "No Roadmaps Yet"
- Button: "Start Career Assessment"
- Takes you to career quiz

## User Journey

### First Time User:
1. Take career quiz → Get recommendations
2. Commit to a path → View roadmap
3. Mark topics complete → Progress saved

### Returning User:
1. Login → Go to Dashboard
2. See "My Roadmaps" card (shows count)
3. Click card or sidebar link
4. View all roadmaps with progress
5. Click any roadmap to continue

### Exploring New Paths:
1. Take quiz again (from Career Guide)
2. Get new recommendations
3. Commit to new path
4. Old roadmaps remain accessible in "My Roadmaps"

## Visual Indicators

### Dashboard Stats Card:
```
┌─────────────────────────┐
│  🗺️                     │
│  My Roadmaps            │
│  3                      │  ← Number of active paths
│  Active career paths    │
└─────────────────────────┘
```

### Sidebar Link:
```
🗺️ My Roadmaps  ← Click here
```

### Homepage Dropdown:
```
Career Guide ▼
  ├─ Job Recommendations
  ├─ Skills & Courses
  ├─ Career Guidance
  ├─ 🗺️ My Roadmaps  ← Click here
  └─ Job Alerts
```

## Tips

✅ **Bookmark** `/my-roadmaps` for quick access  
✅ **Dashboard card** shows live count of your roadmaps  
✅ **No data loss** - All roadmaps are preserved  
✅ **Multi-path learning** - Work on multiple careers simultaneously  
✅ **Progress syncs** across devices (saved in Firebase)  

## Troubleshooting

**Q: I don't see "My Roadmaps" option**
- Make sure you're logged in
- Check if you're on the dashboard page
- Look in the left sidebar

**Q: My roadmap count shows 0**
- You haven't committed to any career path yet
- Take the career assessment quiz first
- Commit to a recommended path

**Q: Can I have multiple roadmaps?**
- Yes! You can commit to multiple career paths
- Each maintains independent progress
- All accessible from "My Roadmaps" page
