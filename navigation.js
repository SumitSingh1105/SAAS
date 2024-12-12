export function initNavigation() {
  const sections = ['home', 'report', 'firstaid', 'rules'];
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  // Show home section by default
  showSection('home');
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  
  const targetSection = document.getElementById(sectionId);
  targetSection?.classList.remove('hidden');
}