export function initHome() {
  const homeSection = document.getElementById('home');
  
  homeSection.innerHTML = `
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-blue-800 mb-4">Smart Accident Assistance System</h1>
        <p class="text-xl text-gray-600">Your Safety Companion in Emergency Situations</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${createFeatureCard('🚨', 'Quick Response', 'Instant emergency alerts to nearest help centers')}
        ${createFeatureCard('🗺️', 'Smart Location', 'Precise accident location tracking and sharing')}
        ${createFeatureCard('🏥', 'Hospital Network', 'Connected to major hospitals in Ghaziabad')}
      </div>

      <div class="bg-blue-50 p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">Emergency Numbers</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${createEmergencyContact('Police', '100', '👮')}
          ${createEmergencyContact('Ambulance', '102', '🚑')}
          ${createEmergencyContact('Fire', '101', '🚒')}
          ${createEmergencyContact('Unified Emergency', '112', '🆘')}
        </div>
      </div>
    </div>
  `;
}

function createFeatureCard(emoji, title, description) {
  return `
    <div class="card text-center hover:shadow-lg transition-shadow">
      <div class="text-4xl mb-4">${emoji}</div>
      <h3 class="text-xl font-bold text-blue-800 mb-2">${title}</h3>
      <p class="text-gray-600">${description}</p>
    </div>
  `;
}

function createEmergencyContact(title, number, emoji) {
  return `
    <div class="bg-white p-4 rounded-lg shadow text-center">
      <div class="text-2xl mb-2">${emoji}</div>
      <h4 class="font-bold text-gray-800">${title}</h4>
      <p class="text-red-600 font-bold">${number}</p>
    </div>
  `;
}