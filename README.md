# Unlimited‑Imagination — Website

This repository contains a small Vue 3 + Vite website for the Unlimited‑Imagination organization. It links to two example projects:

- Project Robot — create a robot from scratch
- Project HomeManager — a sandbox to improve dev skills and help manage domestic economy

Features:
- Vue 3 + Vite
- TailwindCSS for styling
- Router with project pages
- GitHub Actions workflow to build and deploy to GitHub Pages

Getting started (local):
1. Install dependencies:
   npm install
2. Run dev server:
   npm run dev
3. Build:
   npm run build
4. Preview production build:
   npm run preview

Deploy to GitHub Pages:
- A workflow is included at `.github/workflows/deploy.yml` that builds the site and publishes the `dist` folder to GitHub Pages using the official Pages deploy action.
- After pushing to the main branch, the workflow will run and publish the site. Ensure GitHub Pages is enabled for the repository (the Actions workflow will handle the upload and deployment step).

Project READMEs are available under the `projects/` directory and contain TODOs and milestones for each project.