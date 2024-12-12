import { initMap } from './modules/map.js';
import { initAccidentReporting } from './modules/accidentReporting.js';
import { initFirstAidGuide } from './modules/firstAidGuide.js';
import { initNavigation } from './modules/navigation.js';
import { initEmergencyServices } from './modules/emergencyServices.js';
import { initHome } from './modules/home.js';
import { createFirstAidPage } from './modules/pages/firstAidPage.js';
import { createTrafficRulesPage } from './modules/pages/trafficRulesPage.js';
import { createFooter } from './modules/footer.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHome();
  initMap();
  initAccidentReporting();
  
  // Initialize new pages
  const firstAidSection = document.getElementById('firstaid');
  firstAidSection.innerHTML = createFirstAidPage();
  
  const rulesSection = document.getElementById('rules');
  rulesSection.innerHTML = createTrafficRulesPage();
  
  // Initialize footer
  const footer = document.querySelector('footer');
  footer.innerHTML = createFooter();
  
  initEmergencyServices();
});