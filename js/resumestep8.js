// Resume Step 8 - Preview and Download
// This file handles the resume preview and PDF generation

document.addEventListener('DOMContentLoaded', function() {
  loadResumePreview();
});

function loadResumePreview() {
  // Get all resume data from localStorage
  const personal = JSON.parse(localStorage.getItem('resumePersonal') || '{}');
  const education = JSON.parse(localStorage.getItem('resumeEducation') || '{}');
  const experience = JSON.parse(localStorage.getItem('resumeExperience') || '{}');
  const skills = JSON.parse(localStorage.getItem('resumeSkills') || '{}');
  const projects = JSON.parse(localStorage.getItem('resumeProjects') || '{}');
  const certifications = JSON.parse(localStorage.getItem('resumeCertifications') || '{}');
  const summary = JSON.parse(localStorage.getItem('resumeSummary') || '{}');

  // Build the preview HTML
  let previewHTML = buildResumeHTML(personal, education, experience, skills, projects, certifications, summary);
  
  // Insert into preview container
  const previewContainer = document.getElementById('resume-preview');
  if (previewContainer) {
    previewContainer.innerHTML = previewHTML;
  }
}

function buildResumeHTML(personal, education, experience, skills, projects, certifications, summary) {
  let html = '';

  // Header with personal information
  html += buildHeaderSection(personal);

  // Professional Summary
  if (summary.summary) {
    html += buildSummarySection(summary.summary);
  }

  // Career Objective
  if (summary.objective) {
    html += buildObjectiveSection(summary.objective);
  }

  // Education
  if (education.degree) {
    html += buildEducationSection(education);
  }

  // Work Experience
  if (experience.jobTitle) {
    html += buildExperienceSection(experience);
  }

  // Skills
  if (skills.technicalSkills || skills.tools || skills.languages || skills.frameworks || skills.softSkills) {
    html += buildSkillsSection(skills);
  }

  // Projects
  if (projects.projectName) {
    html += buildProjectsSection(projects);
  }

  // Certifications
  if (certifications.certName) {
    html += buildCertificationsSection(certifications);
  }

  // Key Achievements
  if (summary.achievements) {
    html += buildAchievementsSection(summary.achievements);
  }

  return html;
}

function buildHeaderSection(personal) {
  return `
    <div class="preview-header">
      <h1>${personal.fullName || 'Your Name'}</h1>
      <div class="preview-contact">
        ${personal.email ? `<span><i class="fas fa-envelope"></i> ${personal.email}</span>` : ''}
        ${personal.phone ? `<span><i class="fas fa-phone"></i> ${personal.phone}</span>` : ''}
        ${personal.city || personal.state ? `<span><i class="fas fa-map-marker-alt"></i> ${[personal.city, personal.state].filter(Boolean).join(', ')}</span>` : ''}
        ${personal.linkedin ? `<span><i class="fab fa-linkedin"></i> ${personal.linkedin}</span>` : ''}
        ${personal.github ? `<span><i class="fab fa-github"></i> ${personal.github}</span>` : ''}
        ${personal.portfolio ? `<span><i class="fas fa-globe"></i> ${personal.portfolio}</span>` : ''}
      </div>
    </div>
  `;
}

function buildSummarySection(summary) {
  return `
    <div class="preview-section">
      <h2><i class="fas fa-user-tie"></i> Professional Summary</h2>
      <p>${summary}</p>
    </div>
  `;
}

function buildObjectiveSection(objective) {
  return `
    <div class="preview-section">
      <h2><i class="fas fa-bullseye"></i> Career Objective</h2>
      <p>${objective}</p>
    </div>
  `;
}

function buildEducationSection(education) {
  let html = `<div class="preview-section"><h2><i class="fas fa-graduation-cap"></i> Education</h2>`;
  
  const degrees = Array.isArray(education.degree) ? education.degree : [education.degree];
  degrees.forEach((degree, i) => {
    const institution = getArrayValue(education.institution, i);
    const location = getArrayValue(education.location, i);
    const grade = getArrayValue(education.grade, i);
    const startDate = getArrayValue(education.startDate, i);
    const endDate = getArrayValue(education.endDate, i);
    const details = getArrayValue(education.details, i);

    html += `
      <div class="preview-entry">
        <div class="preview-entry-header">
          <div class="preview-entry-title">
            <h3>${degree}</h3>
            <p><strong>${institution}</strong>${location ? ` - ${location}` : ''}</p>
            ${grade ? `<p>Grade: ${grade}</p>` : ''}
          </div>
          <div class="preview-entry-date">${startDate || ''} - ${endDate || 'Present'}</div>
        </div>
        ${details ? `<p>${details}</p>` : ''}
      </div>
    `;
  });
  
  html += `</div>`;
  return html;
}

function buildExperienceSection(experience) {
  let html = `<div class="preview-section"><h2><i class="fas fa-briefcase"></i> Work Experience</h2>`;
  
  const titles = Array.isArray(experience.jobTitle) ? experience.jobTitle : [experience.jobTitle];
  titles.forEach((title, i) => {
    const company = getArrayValue(experience.company, i);
    const location = getArrayValue(experience.location, i);
    const startDate = getArrayValue(experience.startDate, i);
    const endDate = getArrayValue(experience.endDate, i);
    const description = getArrayValue(experience.description, i);

    html += `
      <div class="preview-entry">
        <div class="preview-entry-header">
          <div class="preview-entry-title">
            <h3>${title}</h3>
            <p><strong>${company}</strong>${location ? ` - ${location}` : ''}</p>
          </div>
          <div class="preview-entry-date">${startDate || ''} - ${endDate || 'Present'}</div>
        </div>
        ${description ? `<p style="white-space: pre-line;">${description}</p>` : ''}
      </div>
    `;
  });
  
  html += `</div>`;
  return html;
}

function buildSkillsSection(skills) {
  let html = `<div class="preview-section"><h2><i class="fas fa-code"></i> Skills</h2>`;
  
  if (skills.technicalSkills) {
    html += `<p><strong>Technical Skills:</strong> ${skills.technicalSkills}</p>`;
  }
  if (skills.languages) {
    html += `<p><strong>Programming Languages:</strong> ${skills.languages}</p>`;
  }
  if (skills.frameworks) {
    html += `<p><strong>Databases & Frameworks:</strong> ${skills.frameworks}</p>`;
  }
  if (skills.tools) {
    html += `<p><strong>Tools & Technologies:</strong> ${skills.tools}</p>`;
  }
  if (skills.softSkills) {
    html += `<p><strong>Soft Skills:</strong> ${skills.softSkills}</p>`;
  }
  
  html += `</div>`;
  return html;
}

function buildProjectsSection(projects) {
  let html = `<div class="preview-section"><h2><i class="fas fa-project-diagram"></i> Projects</h2>`;
  
  const names = Array.isArray(projects.projectName) ? projects.projectName : [projects.projectName];
  names.forEach((name, i) => {
    const technologies = getArrayValue(projects.technologies, i);
    const link = getArrayValue(projects.projectLink, i);
    const desc = getArrayValue(projects.projectDesc, i);

    html += `
      <div class="preview-entry">
        <h3>${name}</h3>
        <p><strong>Technologies:</strong> ${technologies || ''}</p>
        ${link ? `<p><i class="fas fa-link"></i> <a href="${link}" target="_blank">${link}</a></p>` : ''}
        ${desc ? `<p style="white-space: pre-line;">${desc}</p>` : ''}
      </div>
    `;
  });
  
  html += `</div>`;
  return html;
}

function buildCertificationsSection(certifications) {
  let html = `<div class="preview-section"><h2><i class="fas fa-certificate"></i> Certifications</h2>`;
  
  const names = Array.isArray(certifications.certName) ? certifications.certName : [certifications.certName];
  names.forEach((name, i) => {
    const issuer = getArrayValue(certifications.issuer, i);
    const issueDate = getArrayValue(certifications.issueDate, i);
    const credId = getArrayValue(certifications.credentialId, i);
    const credUrl = getArrayValue(certifications.credentialUrl, i);

    html += `
      <div class="preview-entry">
        <div class="preview-entry-header">
          <div class="preview-entry-title">
            <h3>${name}</h3>
            <p><strong>${issuer || ''}</strong></p>
            ${credId ? `<p>Credential ID: ${credId}</p>` : ''}
            ${credUrl ? `<p><i class="fas fa-link"></i> <a href="${credUrl}" target="_blank">Verify</a></p>` : ''}
          </div>
          ${issueDate ? `<div class="preview-entry-date">${issueDate}</div>` : ''}
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  return html;
}

function buildAchievementsSection(achievements) {
  return `
    <div class="preview-section">
      <h2><i class="fas fa-trophy"></i> Key Achievements</h2>
      <p style="white-space: pre-line;">${achievements}</p>
    </div>
  `;
}

// Helper function to get array value at index
function getArrayValue(value, index) {
  if (Array.isArray(value)) {
    return value[index] || '';
  }
  return value || '';
}

// Export functions for use in HTML
window.downloadPDF = function() {
  const element = document.getElementById('resume-preview');
  const personal = JSON.parse(localStorage.getItem('resumePersonal') || '{}');
  const filename = `${personal.fullName || 'Resume'}_Resume.pdf`.replace(/\s+/g, '_');

  const opt = {
    margin: 0.5,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
};

window.startNewResume = function() {
  if (confirm('Are you sure you want to start a new resume? This will clear all current data.')) {
    localStorage.removeItem('resumePersonal');
    localStorage.removeItem('resumeEducation');
    localStorage.removeItem('resumeExperience');
    localStorage.removeItem('resumeSkills');
    localStorage.removeItem('resumeProjects');
    localStorage.removeItem('resumeCertifications');
    localStorage.removeItem('resumeSummary');
    window.location.href = 'resumestep1.html';
  }
};
