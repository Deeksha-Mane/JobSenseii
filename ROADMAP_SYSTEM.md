# Career Roadmap System

## Overview
Users can now have multiple career roadmaps with independent progress tracking for each path.

## Features

### 1. Multiple Roadmaps Per User
- Users can commit to multiple career paths
- Each path maintains its own progress independently
- No data loss when exploring new career options

### 2. Progress Storage (Firebase Firestore)

**Collection**: `roadmapProgress`  
**Document ID**: User's Firebase Auth UID

**Data Structure**:
```javascript
{
  "frontend_internship": {
    "completedNodes": ["html", "css", "javascript", ...],
    "lastUpdated": "2024-02-18T10:30:00.000Z",
    "pathName": "Frontend Development"
  },
  "backend_dsa": {
    "completedNodes": ["programming-lang", "arrays", ...],
    "lastUpdated": "2024-02-18T11:00:00.000Z",
    "pathName": "Backend + DSA"
  },
  // ... other career paths
}
```

### 3. User Journey

#### First Time User:
1. Takes career assessment quiz
2. Gets 2 recommendations (primary + secondary)
3. Commits to one path
4. Views visual roadmap
5. Marks topics as complete/incomplete
6. Progress saved to Firebase

#### Returning User:
1. Can access "My Roadmaps" page
2. Sees all committed career paths with progress
3. Can switch between different roadmaps
4. Can take quiz again to explore new paths
5. Old roadmaps remain accessible

### 4. Pages & Routes

#### `/career-guide`
- Career assessment quiz
- Shows recommendations

#### `/my-roadmaps`
- Dashboard showing all user's career paths
- Progress cards for each path
- Quick access to view any roadmap

#### `/view-roadmap/<path_key>`
- Visual roadmap for specific career path
- Interactive SVG flowchart
- Click nodes to mark complete/incomplete
- Progress auto-saved to Firebase

#### `/my-roadmap` (legacy)
- Redirects to most recent roadmap

### 5. Navigation

Users can access roadmaps from:
- Dashboard sidebar: "My Roadmaps" link
- Career recommendation page: "View All My Roadmaps" button
- Direct URL: `/my-roadmaps`

### 6. Available Career Paths

1. **Frontend Development** (31 topics)
   - HTML, CSS, JavaScript, React, Testing, Deployment

2. **Backend + DSA** (24 topics)
   - Data Structures, Algorithms, APIs, Databases, System Design

3. **Data Analyst** (22 topics)
   - Statistics, Excel, SQL, Python, Pandas, Visualization

4. **Full Stack Web** (22 topics)
   - Frontend + Backend + Databases + Deployment

5. **UI/UX Design** (23 topics)
   - Design Fundamentals, Figma, User Research, Prototyping

6. **Digital Marketing** (24 topics)
   - Content Marketing, SEO, Social Media, Email, Analytics

## Technical Implementation

### Frontend (JavaScript)
- Firebase Authentication for user identity
- Firestore for progress storage
- SVG rendering for visual roadmaps
- Real-time progress updates

### Backend (Flask/Python)
- `roadmap_data.py` - All roadmap definitions
- `career_engine.py` - Recommendation logic
- `app.py` - Routes and session management

### Data Flow
1. User clicks node → Toggle completion
2. JavaScript updates `completedNodes` Set
3. Saves to Firestore: `roadmapProgress/{userId}/{pathKey}`
4. Re-renders SVG with updated colors
5. Updates progress stats

## Benefits

✅ **No Data Loss**: Old roadmaps preserved when exploring new paths  
✅ **Multi-Path Learning**: Users can pursue multiple careers simultaneously  
✅ **Progress Tracking**: Visual progress bars and completion percentages  
✅ **Persistent Storage**: Data saved in Firebase, accessible anywhere  
✅ **Easy Navigation**: Centralized dashboard for all roadmaps  
✅ **Shareable Progress**: Users can share their achievements  

## Future Enhancements

- [ ] Add roadmap completion certificates
- [ ] Weekly progress emails
- [ ] Roadmap recommendations based on progress
- [ ] Community features (compare progress with peers)
- [ ] Resource links for each topic
- [ ] Estimated time to complete each topic
- [ ] Streak tracking and gamification
