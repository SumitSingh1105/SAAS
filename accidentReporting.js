export function initAccidentReporting() {
  const reportSection = document.getElementById('report');
  
  reportSection.innerHTML = `
    <div class="card max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">Report an Accident</h2>
      <div class="space-y-4">
        <button id="emergencyBtn" class="btn btn-emergency w-full text-xl py-4">
          🚨 Emergency - Report Accident Now
        </button>
        <div class="grid grid-cols-2 gap-4">
          <button class="btn btn-primary">📞 Voice Report</button>
          <button class="btn btn-primary">📍 Share Location</button>
        </div>
      </div>
    </div>
  `;

  setupEventListeners();
}

function setupEventListeners() {
  const emergencyBtn = document.getElementById('emergencyBtn');
  emergencyBtn?.addEventListener('click', handleEmergencyReport);
}

function handleEmergencyReport() {
  // Simulate accident reporting
  console.log('Emergency report triggered');
  // In a real implementation, this would connect to emergency services
}