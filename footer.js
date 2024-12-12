export function createFooter() {
  return `
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Section -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4">About SAAS</h3>
          <p class="text-gray-300">
            Smart Accident Assistance System (SAAS) is dedicated to providing immediate emergency response
            and assistance in Ghaziabad, helping save lives through quick action and smart technology.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#report" class="text-gray-300 hover:text-white">Report Accident</a></li>
            <li><a href="#firstaid" class="text-gray-300 hover:text-white">First Aid Guide</a></li>
            <li><a href="#rules" class="text-gray-300 hover:text-white">Traffic Rules</a></li>
          </ul>
        </div>

        <!-- Emergency Contacts -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4">Emergency Contacts</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">Police: <span class="font-bold">100</span></li>
            <li class="text-gray-300">Ambulance: <span class="font-bold">102</span></li>
            <li class="text-gray-300">Fire: <span class="font-bold">101</span></li>
            <li class="text-gray-300">Unified Emergency: <span class="font-bold">112</span></li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">
              <span class="font-bold">Address:</span><br>
              Sector 23, Raj Nagar<br>
              Ghaziabad, UP 201002
            </li>
            <li class="text-gray-300">
              <span class="font-bold">Email:</span><br>
              support@saas-ghaziabad.in
            </li>
            <li class="text-gray-300">
              <span class="font-bold">Helpline:</span><br>
              +91-120-2789000
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-300">
          © ${new Date().getFullYear()} Smart Accident Assistance System - Ghaziabad. All rights reserved.
        </p>
        <div class="mt-4 space-x-4">
          <a href="#privacy" class="text-gray-300 hover:text-white">Privacy Policy</a>
          <span class="text-gray-600">|</span>
          <a href="#terms" class="text-gray-300 hover:text-white">Terms of Service</a>
          <span class="text-gray-600">|</span>
          <a href="#accessibility" class="text-gray-300 hover:text-white">Accessibility</a>
        </div>
      </div>
    </div>
  `;
}