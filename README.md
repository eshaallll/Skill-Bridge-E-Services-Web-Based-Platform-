Skill Bridge — Sprint 1

This workspace contains a simple static prototype for Sprint 1 pages.

Pages:
- `index.html` — Login / Signup (implemented)
- `home.html` — Home / Service Discovery
- `listing.html` — Worker Listing (by category)
- `profile.html` — Worker Profile
- `booking.html` — Booking (basic)

How to run:
1. Serve the folder or open `home.html` / `index.html` directly.

Quick server (from project folder):
```bash
python -m http.server 8000
```
Open http://localhost:8000/home.html

Demo credentials (login page):
- Email: user@example.com
- Password: password123

Next steps you can request:
- Wire to a backend API (Node/Express) and a DB
- Add filters and sorting on `listing.html`
- Implement real signup and password reset flows

Design flow (what to show in the report):
Login → Home → Select category → Worker list → Profile → Booking

