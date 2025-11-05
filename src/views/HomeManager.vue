<template>
  <DefaultLayout>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-2xl p-8 mb-8">
        <h2 class="text-4xl font-extrabold text-white mb-4">HomeManager</h2>
        <p class="text-xl text-green-100">Development sandbox & domestic economy management tool</p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Project Overview</h3>
        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          HomeManager serves a dual purpose: it's a practical application for managing household finances and chores, 
          while also functioning as a development sandbox to experiment with new technologies and improve coding skills. 
          This project combines real-world utility with continuous learning and skill development.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-green-50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-green-900 mb-3">Core Features</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Budget tracking and expense management
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Bill payment reminders
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Household chores scheduling
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Financial reports and analytics
              </li>
            </ul>
          </div>
          
          <div class="bg-teal-50 rounded-lg p-6">
            <h4 class="text-xl font-semibold text-teal-900 mb-3">Tech Stack</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                Vue.js 3 with Composition API
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                Node.js & Express backend
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                PostgreSQL database
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
                TailwindCSS for styling
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Development TODOs</h3>
        <div class="space-y-4">
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Implement user authentication system</h4>
              <p class="text-gray-600 text-sm mt-1">Set up secure login, registration, and session management</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Create expense tracking dashboard</h4>
              <p class="text-gray-600 text-sm mt-1">Build interface for adding, editing, and viewing expenses</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Add budget category management</h4>
              <p class="text-gray-600 text-sm mt-1">Allow users to create and manage custom spending categories</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Develop recurring bill payment system</h4>
              <p class="text-gray-600 text-sm mt-1">Track recurring expenses and send payment reminders</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Build chores assignment feature</h4>
              <p class="text-gray-600 text-sm mt-1">Create system for assigning and tracking household tasks</p>
            </div>
          </div>
          
          <div class="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <input type="checkbox" class="mt-1 mr-3 h-5 w-5 text-green-600" />
            <div>
              <h4 class="font-semibold text-gray-900">Implement data visualization charts</h4>
              <p class="text-gray-600 text-sm mt-1">Add charts and graphs for spending patterns and trends</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Project Milestones</h3>
        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-green-300"></div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow"></div>
            <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 class="font-bold text-green-900 mb-2">v0.1: Project Setup (Completed)</h4>
              <p class="text-gray-700">Initial project structure, database design, and basic UI framework</p>
              <p class="text-sm text-gray-500 mt-2">Completed: January 2024</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow animate-pulse"></div>
            <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-900 mb-2">v0.2: Core Features (In Progress)</h4>
              <p class="text-gray-700">User authentication, expense tracking, and basic reporting</p>
              <p class="text-sm text-gray-500 mt-2">Target: March 2024</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">v0.3: Advanced Budget Tools</h4>
              <p class="text-gray-700">Budget planning, category management, and spending alerts</p>
              <p class="text-sm text-gray-500 mt-2">Target: May 2024</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">v0.4: Household Management</h4>
              <p class="text-gray-700">Chores tracking, task assignments, and family collaboration</p>
              <p class="text-sm text-gray-500 mt-2">Target: July 2024</p>
            </div>
          </div>
          
          <div class="relative mb-8 ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">v0.5: Analytics & Reports</h4>
              <p class="text-gray-700">Detailed financial reports, data visualization, and insights</p>
              <p class="text-sm text-gray-500 mt-2">Target: September 2024</p>
            </div>
          </div>
          
          <div class="relative ml-12">
            <div class="absolute -left-10 mt-1.5 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow"></div>
            <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
              <h4 class="font-bold text-gray-900 mb-2">v1.0: Public Release</h4>
              <p class="text-gray-700">Full feature set, mobile app, and public launch</p>
              <p class="text-sm text-gray-500 mt-2">Target: December 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>
