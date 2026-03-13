# SkillBridge — Frontend Prototype

SkillBridge is a modern, premium web-based platform designed to connect customers with top-rated professional skill workers (Plumbers, Electricians, Carpenters, and Mechanics). 

This repository contains the interactive frontend UI prototype, demonstrating the platform's core user journeys, modern aesthetic, and responsive design.

## 🚀 Key Features & UI Highlights

- **Modern Aesthetic**: Clean card-based layouts, soft drop-shadows, fully rounded "pill" buttons, and smooth hover micro-interactions.
- **Dynamic Homepage**: Features interactive "Recent Projects" grids, a hover-to-reveal "Before & After" gallery, "Special Offers", and a comprehensive SaaS-style modern footer.
- **Advanced Auth Architecture**: A dedicated split-screen authentication flow separating Login, Role Selection, and specialized multi-step Signups.
- **Responsive Design**: Fully mobile-optimized, easily stacking grids and layout panels for smaller screens.

## 📂 Page Directory

### Authentication Flows
- `index.html` — Modern Split-Screen Login Page
- `role-selection.html` — Choose between joining as a Customer or Worker
- `customer-signup.html` — Dedicated customer registration with OTP mockup
- `worker-signup.html` — 3-Step Wizard for workers (Basic Info, Professional Info, Document Uploads)
- `verification-status.html` — "Analysis in Progress" hold screen post-worker-signup
- `forgot-password.html` — Password recovery flow

### Core Platform
- `home.html` — The main landing and service discovery page
- `listing.html` — Worker search and filtering 
- `profile.html` — Detailed professional worker profile
- `booking.html` — Service booking checkout flow
- `review.html` — Submit a review and rating for a completed job

### Dashboards
- `customer-dashboard.html` — Manage ongoing bookings, favorites, and account details
- `worker-dashboard.html` — Manage incoming job requests, schedule, and earnings
- `admin.html` — Platform administration (Approve/Reject workers, monitor disputes)

## 🛠️ How to Run

Because this is a static frontend prototype, no build steps are required. 

1. Simply clone the repository or download the folder.
2. Open `index.html` in any modern web browser (Chrome, Safari, Firefox, Edge) to begin the journey from the Login screen.
3. *Optional:* To run via a local server (recommended for avoiding CORS issues with local assets):
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000/index.html`

## 📝 Backend Integration Notes
- **Worker Signup Validations:** The custom styled file upload fields in `worker-signup.html` currently have their native HTML `required` attributes removed. This was done to prevent hidden native inputs from silently failing prototype form submission. When attaching a backend framework, you must implement custom JS validation to check for the presence of files and re-enforce restriction on these specific uploads.

## 🎨 Design Philosophy
The design language focuses on **Trust, Quality, and Usability**. We utilize a nature-inspired green primary color (`#6C8A3D`) to evoke growth and reliability, paired with significant whitespace, modern typography, and interactive depth (shadows/scaling) to ensure the platform feels like a premium consumer product.
