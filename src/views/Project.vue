<template>
  <section class="max-w-4xl mx-auto prose">
    <h1>{{ title }}</h1>
    <p class="text-gray-600">{{ description }}</p>

    <div class="bg-white p-6 rounded shadow mt-4">
      <h3>Quick links</h3>
      <ul>
        <li><a :href="repoUrl" target="_blank" rel="noreferrer">Project repository (placeholder)</a></li>
        <li><router-link :to="{ path: '/' }">Back to homepage</router-link></li>
      </ul>
    </div>

    <section class="mt-6">
      <h3>README (summary)</h3>
      <p v-html="readmeHtml"></p>
      <div class="mt-4">
        <router-link class="text-sm text-purple-600 hover:underline" :to="{ path: '/' }">Return home</router-link>
      </div>
    </section>
  </section>
</template>

<script>
const README_CONTENTS = {
  robot: {
    title: 'Project Robot',
    description: 'A project to design and build a robot from scratch — includes mechanical design, electronics, and control software.',
    repo: '#',
    readme: `### Overview
Project Robot aims to design and build an autonomous robot from the ground up: chassis, motor control, sensors, and control firmware/software.

### Getting started
- Hardware: initial parts list, microcontroller board (e.g., STM32 / ESP32 / Arduino), motors, motor drivers, chassis.
- Software: development environment, cross-compile toolchain, and initial firmware skeleton.

### TODOs
- [ ] Finalize parts list and suppliers
- [ ] Create mechanical CAD for chassis (v1)
- [ ] Design motor driver interface and test
- [ ] Implement base motor control loop
- [ ] Add obstacle detection with ultrasonic / LIDAR

### Milestones
1. Milestone 1 — Prototype wheels & drive (2–4 weeks)
2. Milestone 2 — Sensor and obstacle avoidance (4–8 weeks)
3. Milestone 3 — Autonomous navigation demo (8–16 weeks)

### Notes
Keep logs of hardware tests and firmware versions. Use incremental commits and tag milestones.
`
  },
  homemanager: {
    title: 'Project HomeManager',
    description: 'Sandbox for improving development skills and building tools to help manage household finances and chores.',
    repo: '#',
    readme: `### Overview
HomeManager is a sandbox web app to track household expenses, tasks, and small automation scripts to help manage domestic economy.

### Getting started
- Frontend: Vue 3 + Tailwind (this site)
- Backend: simple Node/SQLite or serverless endpoints (TBD)

### TODOs
- [ ] Create database schema for expenses and recurring bills
- [ ] Implement authentication (local / OAuth)
- [ ] Build expense entry + visualization dashboard
- [ ] Add recurring bill scheduler and alerts
- [ ] Integrate CSV import/export

### Milestones
1. Milestone 1 — MVP expense tracker (2–3 weeks)
2. Milestone 2 — Recurring bills and notifications (3–6 weeks)
3. Milestone 3 — Budget planning tools and graphs (6–12 weeks)

### Notes
Focus on iterating quickly in the sandbox, write small unit tests for core calculations (e.g., monthly budget projections).
`
  }
}

export default {
  props: ['id'],
  computed: {
    meta() {
      return README_CONTENTS[this.id] || README_CONTENTS['robot']
    },
    title() {
      return this.meta.title
    },
    description() {
      return this.meta.description
    },
    repoUrl() {
      return this.meta.repo
    },
    readmeHtml() {
      // Convert minimal markdown headings and lists to HTML for display.
      // Keep simple conversion to preserve sample content.
      const md = this.meta.readme
      return md
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*)/gm, '<h4>$1</h4>')
        .replace(/^- \[ \]/g, '<li>[ ]')
        .replace(/^- \[x\]/gi, '<li>[x]')
        .replace(/^- /gim, '<li>')
        .replace(/\n\n/g, '<p></p>')
        .replace(/\n/g, '<br/>')
    }
  }
}
</script>