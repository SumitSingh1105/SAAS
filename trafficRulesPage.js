import { trafficRules } from '../guides/trafficRules.js';

export function createTrafficRulesPage() {
  return `
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-8">${trafficRules.title}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${trafficRules.sections.map(section => createRulesSection(section)).join('')}
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">Traffic Violation Penalties</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${Object.entries(trafficRules.penalties)
            .map(([violation, penalty]) => createPenaltyItem(violation, penalty))
            .join('')}
        </div>
      </div>
    </div>
  `;
}

function createRulesSection(section) {
  return `
    <div class="card">
      <h3 class="text-xl font-bold text-blue-800 mb-4">${section.title}</h3>
      <ul class="space-y-2">
        ${section.rules.map(rule => `
          <li class="flex items-start">
            <span class="text-blue-600 mr-2">•</span>
            <span class="text-gray-700">${rule}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

function createPenaltyItem(violation, penalty) {
  return `
    <div class="flex justify-between items-center p-2 border-b">
      <span class="text-gray-700">${violation}</span>
      <span class="font-bold text-red-600">${penalty}</span>
    </div>
  `;
}