// Job Board - Dummy Jobs Data and Functionality

// Dummy Jobs Data
const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    logo: "T",
    location: "Mumbai",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹4-6 LPA",
    description: "We're looking for a passionate Frontend Developer to join our team. You'll work on building responsive web applications using modern frameworks.",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    isNew: true,
    postedDate: "2 days ago"
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "InnovateLabs",
    logo: "I",
    location: "Bangalore",
    type: "Internship",
    experience: "Fresher",
    salary: "₹15k-20k/month",
    description: "Join our dynamic team as a Software Engineering Intern. Learn from experienced developers and work on real-world projects.",
    skills: ["Python", "Java", "Git", "SQL"],
    isNew: true,
    postedDate: "1 day ago"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebWorks India",
    logo: "W",
    location: "Remote",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹8-12 LPA",
    description: "Seeking an experienced Full Stack Developer to build scalable web applications. Must have strong knowledge of both frontend and backend technologies.",
    skills: ["Node.js", "React", "MongoDB", "Express"],
    isNew: false,
    postedDate: "5 days ago"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataDriven Co.",
    logo: "D",
    location: "Pune",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹5-7 LPA",
    description: "Looking for a Data Analyst to help us make data-driven decisions. You'll work with large datasets and create insightful visualizations.",
    skills: ["Python", "SQL", "Excel", "Tableau"],
    isNew: true,
    postedDate: "3 days ago"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "DesignHub",
    logo: "D",
    location: "Delhi",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹6-9 LPA",
    description: "We need a creative UI/UX Designer to craft beautiful and intuitive user experiences. Portfolio required.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    isNew: false,
    postedDate: "1 week ago"
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "CloudTech Systems",
    logo: "C",
    location: "Hyderabad",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹5-8 LPA",
    description: "Join our backend team to build robust APIs and microservices. Experience with cloud platforms is a plus.",
    skills: ["Java", "Spring Boot", "AWS", "Docker"],
    isNew: true,
    postedDate: "2 days ago"
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "AppMakers Inc.",
    logo: "A",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹7-11 LPA",
    description: "Develop cutting-edge mobile applications for iOS and Android. Experience with React Native or Flutter required.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    isNew: false,
    postedDate: "4 days ago"
  },
  {
    id: 8,
    title: "DevOps Engineer",
    company: "InfraCloud",
    logo: "I",
    location: "Remote",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹9-14 LPA",
    description: "Looking for a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. Strong automation skills required.",
    skills: ["Kubernetes", "Docker", "Jenkins", "AWS"],
    isNew: true,
    postedDate: "1 day ago"
  },
  {
    id: 9,
    title: "Content Writer Intern",
    company: "ContentCraft",
    logo: "C",
    location: "Mumbai",
    type: "Internship",
    experience: "Fresher",
    salary: "₹10k-15k/month",
    description: "Join our content team to create engaging articles and blog posts. Great opportunity for freshers to learn and grow.",
    skills: ["Writing", "SEO", "Research", "Editing"],
    isNew: false,
    postedDate: "6 days ago"
  },
  {
    id: 10,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    logo: "A",
    location: "Bangalore",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹10-16 LPA",
    description: "Work on exciting ML projects and build intelligent systems. Strong background in mathematics and statistics required.",
    skills: ["Python", "TensorFlow", "PyTorch", "ML"],
    isNew: true,
    postedDate: "2 days ago"
  },
  {
    id: 11,
    title: "Digital Marketing Specialist",
    company: "MarketPro",
    logo: "M",
    location: "Delhi",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹4-6 LPA",
    description: "Manage digital marketing campaigns across multiple channels. Experience with Google Ads and social media marketing required.",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    isNew: false,
    postedDate: "5 days ago"
  },
  {
    id: 12,
    title: "QA Engineer",
    company: "TestWorks",
    logo: "T",
    location: "Pune",
    type: "Full-time",
    experience: "0-2 years",
    salary: "₹4-7 LPA",
    description: "Ensure software quality through comprehensive testing. Experience with automation testing tools is a plus.",
    skills: ["Selenium", "Testing", "Java", "Automation"],
    isNew: true,
    postedDate: "3 days ago"
  }
];

let displayedJobs = 6;
let filteredJobs = [...dummyJobs];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  renderJobs();
  setupEventListeners();
});

// Render jobs
function renderJobs() {
  const jobsContainer = document.getElementById('jobCards');
  const jobsToShow = filteredJobs.slice(0, displayedJobs);

  if (jobsToShow.length === 0) {
    jobsContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-briefcase"></i>
        <h3>No Jobs Found</h3>
        <p>Try adjusting your filters to see more results</p>
      </div>
    `;
    document.getElementById('showMoreBtn').style.display = 'none';
    return;
  }

  jobsContainer.innerHTML = jobsToShow.map(job => createJobCard(job)).join('');

  // Show/hide "Show More" button
  const showMoreBtn = document.getElementById('showMoreBtn');
  if (displayedJobs >= filteredJobs.length) {
    showMoreBtn.style.display = 'none';
  } else {
    showMoreBtn.style.display = 'inline-flex';
  }
}

// Create job card HTML
function createJobCard(job) {
  return `
    <div class="job-card" data-job-id="${job.id}">
      <div class="job-card-header">
        <div class="company-logo">${job.logo}</div>
        <div class="job-title-section">
          <h3 class="job-title">${job.title}</h3>
          <p class="company-name">${job.company}</p>
        </div>
      </div>

      <div class="job-badges">
        <span class="job-badge type"><i class="fas fa-briefcase"></i> ${job.type}</span>
        <span class="job-badge location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
        <span class="job-badge experience"><i class="fas fa-user-clock"></i> ${job.experience}</span>
        ${job.isNew ? '<span class="job-badge new"><i class="fas fa-star"></i> New</span>' : ''}
      </div>

      <p class="job-description">${job.description}</p>

      <div class="job-skills">
        ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>

      <div class="job-footer">
        <div class="job-salary">
          <i class="fas fa-rupee-sign"></i>
          ${job.salary}
        </div>
        <div class="job-actions">
          <button class="btn-apply" onclick="applyJob(${job.id})">
            <i class="fas fa-paper-plane"></i> Apply
          </button>
          <button class="btn-save" onclick="saveJob(${job.id})">
            <i class="fas fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Setup event listeners
function setupEventListeners() {
  // Search
  document.getElementById('jobSearch').addEventListener('input', filterJobs);

  // Filters
  document.getElementById('locationFilter').addEventListener('change', filterJobs);
  document.getElementById('typeFilter').addEventListener('change', filterJobs);
  document.getElementById('experienceFilter').addEventListener('change', filterJobs);

  // Show More button
  document.getElementById('showMoreBtn').addEventListener('click', function() {
    displayedJobs += 6;
    renderJobs();
  });
}

// Filter jobs
function filterJobs() {
  const searchTerm = document.getElementById('jobSearch').value.toLowerCase();
  const locationFilter = document.getElementById('locationFilter').value;
  const typeFilter = document.getElementById('typeFilter').value;
  const experienceFilter = document.getElementById('experienceFilter').value;

  filteredJobs = dummyJobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm));

    const matchesLocation = !locationFilter || job.location === locationFilter;
    const matchesType = !typeFilter || job.type === typeFilter;
    const matchesExperience = !experienceFilter || job.experience === experienceFilter;

    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  displayedJobs = 6;
  renderJobs();
}

// Apply to job
window.applyJob = function(jobId) {
  const job = dummyJobs.find(j => j.id === jobId);
  alert(`Application submitted for ${job.title} at ${job.company}!\n\nYou will be redirected to the application page.`);
  // In a real app, this would redirect to an application form or external link
};

// Save job
window.saveJob = function(jobId) {
  const button = event.target.closest('.btn-save');
  button.classList.toggle('saved');
  
  if (button.classList.contains('saved')) {
    button.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    // In a real app, save to database
    console.log(`Job ${jobId} saved`);
  } else {
    button.innerHTML = '<i class="fas fa-bookmark"></i>';
    // In a real app, remove from database
    console.log(`Job ${jobId} unsaved`);
  }
};
