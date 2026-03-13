/* =========================================================================
   MODERN DASHBOARD NAVBAR LOGIC
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE MENUS ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbarLinks = document.getElementById('navbar-links');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMobileMenu() {
    if(navbarLinks) navbarLinks.classList.add('mobile-open');
    if(mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if(navbarLinks) navbarLinks.classList.remove('mobile-open');
    if(mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if(mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if(mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // --- PROFILE DROPDOWN ---
  const profileTrigger = document.getElementById('profile-trigger');
  const profileMenu = document.getElementById('profile-menu');
  
  if (profileTrigger && profileMenu) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
        profileMenu.classList.remove('open');
      }
    });
  }

  // --- SPA SECTION NAVIGATION ---
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.dashboard-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetId = item.getAttribute('data-target');
      
      // If there is no data-target, allow default anchor behavior (href navigation)
      if (!targetId) return;

      e.preventDefault();

      // Update Nav active states
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update Sections
      sections.forEach(sec => sec.classList.remove('active'));
      const targetSec = document.getElementById(targetId);
      if(targetSec) targetSec.classList.add('active');

      // Close mobile menu on click
      closeMobileMenu();
    });
  });

});

/* =========================================================================
   DYNAMIC NAVBAR ROLE ROUTING (For Shared Pages like Home)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const currentRole = localStorage.getItem('userRole'); // 'worker' or 'customer' or null

  // If we are on the Home page (or any shared public page)
  // We want to update the links and the profile dropdown to match their role.
  const isPublicPage = window.location.pathname.includes('home.html') || window.location.pathname.includes('listing.html') || window.location.pathname.endsWith('/');

  if (isPublicPage) {
    const navLinksContainer = document.getElementById('navbar-links');
    const profileMenu = document.getElementById('profile-menu');
    const profileTriggerImg = document.querySelector('#profile-trigger img');
    const authActionsContainers = document.querySelectorAll('.navbar-actions'); // Might need to swap out the whole right side if logged out

    if (!currentRole) {
      // LOGGED OUT STATE
      // We can hide the notification bell and profile, and show Login/Signup on public pages
      authActionsContainers.forEach(container => {
        container.innerHTML = `
          <a href="index.html" class="btn outline" style="padding:8px 16px;font-size:14px;border-color:var(--border);color:var(--text)">Log In</a>
          <a href="index.html" class="btn gradient" style="padding:8px 16px;font-size:14px">Sign Up</a>
          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-toggle" id="mobile-toggle">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        `;
      });
      
      // Re-attach mobile toggle listener since we overwrote the DOM
      const newToggle = document.getElementById('mobile-toggle');
      if(newToggle) {
        newToggle.addEventListener('click', () => {
            const nl = document.getElementById('navbar-links');
            const mo = document.getElementById('mobile-overlay');
            if(nl) nl.classList.add('mobile-open');
            if(mo) mo.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
      }

    } else if (currentRole === 'worker') {
      // LOGGED IN AS WORKER
      if (navLinksContainer) {
        navLinksContainer.innerHTML = `
          <a class="nav-item ${window.location.pathname.includes('home.html') ? 'active' : ''}" href="home.html">Home</a>
          <a class="nav-item" href="worker-dashboard.html">Dashboard</a>
          <a class="nav-item" href="worker-dashboard.html">Job Requests</a>
          <a class="nav-item" href="worker-dashboard.html">My Jobs</a>
        `;
      }
      
      if (profileMenu) {
        profileMenu.innerHTML = `
          <div class="dropdown-header">
            <div class="dropdown-name">Hassan Raza</div>
            <div class="dropdown-role" style="color:var(--primary);font-weight:600">Verified Worker</div>
          </div>
          <a class="dropdown-item" href="worker-dashboard.html">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            My Profile
          </a>
          <a class="dropdown-item" href="#" onclick="localStorage.removeItem('userRole'); location.href='index.html';" style="color: #ef4444;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Log Out
          </a>
        `;
      }

      if (profileTriggerImg) {
        profileTriggerImg.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop";
      }

    } else if (currentRole === 'customer') {
      // LOGGED IN AS CUSTOMER
      if (navLinksContainer) {
        navLinksContainer.innerHTML = `
          <a class="nav-item ${window.location.pathname.includes('home.html') ? 'active' : ''}" href="home.html">Home</a>
          <a class="nav-item" href="customer-dashboard.html">Overview</a>
          <a class="nav-item" href="listing.html">Find Workers</a>
          <a class="nav-item" href="customer-dashboard.html">My Bookings</a>
        `;
      }

      if (profileMenu) {
        profileMenu.innerHTML = `
          <div class="dropdown-header">
            <div class="dropdown-name">Alex Johnson</div>
            <div class="dropdown-role">Customer Account</div>
          </div>
          <a class="dropdown-item" href="customer-dashboard.html">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            My Profile
          </a>
          <a class="dropdown-item" href="#" onclick="localStorage.removeItem('userRole'); location.href='index.html';" style="color: #ef4444;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Log Out
          </a>
        `;
      }
    }
  }

  // Handle Logout clicks across the entire site
  const logoutButtons = document.querySelectorAll('a[href="index.html"]');
  logoutButtons.forEach(btn => {
    // Only hit this on explicit logout buttons (by text content, or ones in dropdowns)
    if(btn.textContent.includes('Log Out') || btn.classList.contains('logout')) {
      btn.addEventListener('click', () => {
        localStorage.removeItem('userRole');
      });
    }
  });

});
