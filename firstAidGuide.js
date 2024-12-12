export function initFirstAidGuide() {
  const firstAidSection = document.getElementById('firstaid');
  
  firstAidSection.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${createFirstAidCard('CPR Guide', 'Step-by-step CPR instructions')}
      ${createFirstAidCard('Bleeding Control', 'How to control severe bleeding')}
      ${createFirstAidCard('Recovery Position', 'Placing someone in recovery position')}
    </div>
  `;
}

function createFirstAidCard(title, description) {
  return `
    <div class="card hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-bold mb-2">${title}</h3>
      <p class="text-gray-600 mb-4">${description}</p>
      <button class="btn btn-primary">View Guide</button>
    </div>
  `;
}