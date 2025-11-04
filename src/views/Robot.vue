<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-indigo-600">Unlimited-Imagination</h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Home</router-link>
            <router-link to="/robot" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">Robot</router-link>
            <router-link to="/homemanager" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md font-medium">HomeManager</router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-2xl p-8 mb-8">
        <h2 class="text-4xl font-extrabold text-white mb-4">Project Robot</h2>
        <p class="text-xl text-purple-100">Building a robot from scratch - an ambitious journey into robotics and AI</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Project Overview</h3>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Project Robot is an ambitious endeavor to design and build a robot from the ground up. 
          This project combines mechanical engineering, electronics, programming, and artificial intelligence 
          to create an autonomous system capable of interacting with its environment.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-purple-50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-purple-900 mb-3">Key Features</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom mechanical chassis design
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Sensor integration (ultrasonic, infrared, cameras)
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Autonomous navigation system
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Machine learning capabilities
              </li>
            </ul>
          </div>
          
          <div class="bg-pink-50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-pink-900 mb-3">Technologies Used</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                Arduino
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                C++ for AI/ML
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                C++ for control systems
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                ROS (Robot Operating System)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Current TODOs</h3>
        <div class="space-y-4">
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-purple-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Design and 3D print chassis components</h4>
              <p class="text-gray-600 text-sm mt-1">Create CAD models for the robot body and print prototype parts</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-purple-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Set up motor control system</h4>
              <p class="text-gray-600 text-sm mt-1">Configure motor drivers and implement basic movement controls</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-purple-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Integrate ultrasonic sensors</h4>
              <p class="text-gray-600 text-sm mt-1">Add distance sensors for obstacle detection and avoidance</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-purple-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Implement basic navigation algorithm</h4>
              <p class="text-gray-600 text-sm mt-1">Develop path planning and obstacle avoidance logic</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-purple-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Add camera module for computer vision</h4>
              <p class="text-gray-600 text-sm mt-1">Integrate camera and implement object detection capabilities</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Project Milestones</h3>
        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-300"></div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow"></div>
            <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">Phase 1: Planning & Design (Completed)</h4>
              <p class="text-gray-700">Research, concept development, and initial design specifications</p>
              <p class="text-sm text-gray-500 mt-2">Completed: Q2 2025</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow animate-pulse"></div>
            <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-2">Phase 2: Prototype Development (In Progress)</h4>
              <p class="text-gray-700">Building the first working prototype with basic functionality</p>
              <p class="text-sm text-gray-500 mt-2">Target: Q1 2026</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">Phase 3: Sensor Integration</h4>
              <p class="text-gray-700">Adding sensors and implementing environmental awareness</p>
              <p class="text-sm text-gray-500 mt-2">Target: Q1 2026</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">Phase 4: AI & Machine Learning</h4>
              <p class="text-gray-700">Implementing learning algorithms and autonomous decision-making</p>
              <p class="text-sm text-gray-500 mt-2">Target: Q1 2026</p>
            </div>
          </div>
          
          <div class="relative ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">Phase 5: Testing & Refinement</h4>
              <p class="text-gray-700">Final testing, optimization, and documentation</p>
              <p class="text-sm text-gray-500 mt-2">Target: Q2 2026</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-gray-800 text-white mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p class="text-gray-400">&copy; 2025 Unlimited-Imagination. Building the future, one project at a time.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
