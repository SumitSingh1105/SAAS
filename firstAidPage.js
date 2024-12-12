import { firstAidGuides } from '../guides/firstAidGuides.js';

export function createFirstAidPage() {
  return `
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-8">First Aid Guidelines</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${Object.entries(firstAidGuides).map(([key, guide]) => createGuideCard(guide)).join('')}
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg mt-8">
        <h2 class="text-xl font-bold text-yellow-800 mb-4">⚠️ Important Notice</h2>
        <p class="text-yellow-700">
          These guidelines are for informational purposes only. In case of emergency,
          always call professional medical help immediately at 102 or 112.
        </p>
      </div>
    </div>
  `;
}

function createGuideCard(guide) {
  return `
    <div class="card">
      <h3 class="text-xl font-bold text-blue-800 mb-4">${guide.title}</h3>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        ${guide.steps.map(step => `<li class="text-gray-700">${step}</li>`).join('')}
      </ol>
      <p class="text-sm text-gray-600 italic">${guide.notes}</p>
    </div>
  `;
}