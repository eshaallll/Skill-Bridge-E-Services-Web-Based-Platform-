// Minimal client logic to render pages from SKILLBRIDGE_DATA
function q(name){return new URLSearchParams(location.search).get(name)}
function goCategory(cat){ location.href = 'listing.html?cat='+encodeURIComponent(cat) }

// SVG Icon System for consistent, encoding-proof UI
const UI_ICONS = {
  star: `<svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="margin-right:2px"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" width="16" height="16" fill="#10b981" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
  check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  location: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`
};

function cardHTML(w){
  const photo = w.photo || 'images/hasnain.jpeg';
  return `<div class="worker-card">
    <div style="display:flex;gap:12px;align-items:center">
      <img src="${photo}" alt="${w.name}" style="width:72px;aspect-ratio:1/1;border-radius:8px;object-fit:cover;">
      <div style="flex:1">
        <h3 style="margin:0 0 6px 0">${w.name}</h3>
        <div style="color:#6b7280;font-size:13px;display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
          ${w.service} <span style="color:#d1d5db">•</span> ${w.experience} yrs <span style="color:#d1d5db">•</span> 
          <span style="display:inline-flex;align-items:center;font-weight:600;color:#111827;">${UI_ICONS.star}${w.rating}</span>
        </div>
        <p style="margin:8px 0 0 0;font-size:13px;color:#4b5563;line-height:1.4;">${w.bio}</p>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:12px">
      <a class="btn outline" href="profile.html?worker=${w.id}">View Profile</a>
      <a class="btn gradient" href="booking.html?worker=${w.id}">Book Now</a>
    </div>
  </div>`
}

// New List View HTML for the All Workers page (LinkedIn style)
function listCardHTML(w){
  const photo = w.photo || 'images/hasnain.jpeg';
  const verifiedBadge = w.verified ? `<span style="display:inline-flex;margin-left:4px;">${UI_ICONS.shield}</span>` : '';
  const starsArray = Array(5).fill(0).map((_, i) => `<span style="color:${i < Math.floor(w.rating) ? '#f59e0b' : '#e5e7eb'};">${UI_ICONS.star}</span>`).join('');
  
  return `<div class="worker-list-card" style="display:flex;align-items:flex-start;padding:20px;background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:12px;margin-bottom:16px;gap:20px;transition:box-shadow 0.2s;">
    <img src="${photo}" alt="${w.name}" style="width:100px;aspect-ratio:1/1;border-radius:10px;object-fit:cover;flex-shrink:0;">
    <div style="flex:1;">
      <h3 style="margin:0 0 4px 0;font-size:18px;display:flex;align-items:center;gap:4px;">
        ${w.name} ${verifiedBadge} <span style="color:var(--muted);font-weight:normal;font-size:14px;margin-left:4px;">• Pro</span>
      </h3>
      <div style="color:var(--text);font-size:15px;font-weight:600;margin-bottom:6px;">
        ${w.service} Specialist <span style="color:#d1d5db;margin:0 4px;">•</span> ${w.experience} years exp
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px;">
        <span style="display:flex;align-items:center;font-size:13px;color:#6b7280;">${UI_ICONS.location} ${w.location || 'Local Region'}</span>
        <span style="display:flex;align-items:center;font-size:13px;color:#059669;font-weight:600;">₨${w.price || 25}/hr</span>
        <span style="display:flex;align-items:center;font-size:13px;color:#6b7280;">${UI_ICONS.check} 155+ Jobs</span>
      </div>
      <p style="margin:0;font-size:14px;color:#4b5563;line-height:1.5;">
        ${w.bio}
      </p>
    </div>
    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:12px;min-width:140px;">
      <a class="btn outline" href="profile.html?worker=${w.id}" style="border-radius:24px;padding:6px 20px;width:auto;font-size:14px;">View Profile</a>
      <div style="display:flex;flex-direction:column;align-items:flex-end;">
         <div style="display:flex;align-items:center;gap:2px;margin-bottom:2px;">${starsArray}</div>
         <span style="font-size:14px;font-weight:700;color:#111827;">${w.rating} Rating</span>
      </div>
    </div>
  </div>`
}

// Home rendering
if (location.pathname.endsWith('/home.html') || location.pathname.endsWith('home.html')){
  const container = document.getElementById('top-workers');
  if (container) {
    const top = SKILLBRIDGE_DATA.workers.slice().sort((a,b)=>b.rating-a.rating).slice(0,5);
    container.innerHTML = top.map(cardHTML).join('');
  }
}

// Listing rendering
if (location.pathname.endsWith('/listing.html') || location.pathname.endsWith('listing.html')){
  const list = document.getElementById('workers-list');
  const title = document.getElementById('listing-title');
  const catRadios = document.querySelectorAll('input[name="filter-category"]');
  const sortSelect = document.getElementById('filter-sort');
  const clearBtn = document.getElementById('clear-filters');
  
  const priceInput = document.getElementById('filter-price');
  const priceDisplay = document.getElementById('price-display');
  const availabilitySelect = document.getElementById('filter-availability');
  const ratingSelect = document.getElementById('filter-rating');
  const experienceSelect = document.getElementById('filter-experience');
  const locationInput = document.getElementById('filter-location');
  const verifiedCheckbox = document.getElementById('filter-verified');

  if (list) {
    let initialCat = q('cat') || 'All';
    const matchingRadio = document.querySelector(`input[name="filter-category"][value="${initialCat}"]`);
    if (matchingRadio) matchingRadio.checked = true;

    function renderList() {
      const selectedCat = document.querySelector('input[name="filter-category"]:checked').value;
      const maxPrice = parseInt(priceInput.value, 10);
      const selectedAvailability = availabilitySelect.value;
      const minRating = parseFloat(ratingSelect.value);
      const selectedExperience = experienceSelect.value;
      const searchLocation = locationInput.value.toLowerCase().trim();
      const requireVerified = verifiedCheckbox.checked;
      const selectedSort = sortSelect.value;

      let filtered = SKILLBRIDGE_DATA.workers.filter(w => {
        if (selectedCat !== 'All' && w.service !== selectedCat) return false;
        if (w.price > maxPrice) return false;
        if (selectedAvailability !== 'All' && !w.availability.includes(selectedAvailability)) return false;
        if (w.rating < minRating) return false;
        if (selectedExperience !== 'All') {
          if (selectedExperience === '1-3' && (w.experience < 1 || w.experience > 3)) return false;
          if (selectedExperience === '4-7' && (w.experience < 4 || w.experience > 7)) return false;
          if (selectedExperience === '8' && w.experience < 8) return false;
        }
        if (searchLocation && (!w.location || !w.location.toLowerCase().includes(searchLocation))) return false;
        if (requireVerified && !w.verified) return false;
        return true;
      });

      filtered.sort((a, b) => {
        if (selectedSort === 'rating') return b.rating - a.rating;
        if (selectedSort === 'experience') return b.experience - a.experience;
        if (selectedSort === 'price_low') return a.price - b.price;
        if (selectedSort === 'price_high') return b.price - a.price;
        return 0;
      });

      if (priceDisplay) priceDisplay.textContent = maxPrice;
      if (title) title.textContent = (selectedCat === 'All' ? 'Available' : selectedCat + ' ') + 'workers';
      list.innerHTML = filtered.map(listCardHTML).join('') || '<div style="padding:20px;text-align:center;color:var(--muted);">No workers found matching your criteria.</div>';
    }

    const allFilters = [...Array.from(catRadios), sortSelect, priceInput, availabilitySelect, ratingSelect, experienceSelect, locationInput, verifiedCheckbox];
    allFilters.forEach(el => {
      if(el) {
        if(el.type === 'text') el.addEventListener('keyup', renderList);
        else el.addEventListener('change', renderList);
        if(el.type === 'range') el.addEventListener('input', renderList);
      }
    });
    
    if(clearBtn) {
      clearBtn.addEventListener('click', () => {
        const allRadio = document.querySelector('input[name="filter-category"][value="All"]');
        if (allRadio) allRadio.checked = true;
        priceInput.value = 100;
        availabilitySelect.value = 'All';
        ratingSelect.value = '0';
        experienceSelect.value = 'All';
        locationInput.value = '';
        verifiedCheckbox.checked = false;
        sortSelect.value = 'rating';
        renderList();
      });
    }
    renderList();
  }
}

// Profile rendering
if (location.pathname.endsWith('/profile.html') || location.pathname.endsWith('profile.html')){
  const id = parseInt(q('worker'),10);
  const container = document.getElementById('profile-container');
  if (container) {
    if (!id || isNaN(id)){
      container.innerHTML = '<p>Worker not specified. Redirecting...</p>';
      setTimeout(()=> location.href = 'home.html', 1400);
    } else {
      let w = SKILLBRIDGE_DATA.workers.find(x=>x.id===id);
      if (!w){ 
        container.innerHTML = '<p>Worker not found. Redirecting...</p>'; 
        setTimeout(()=> location.href = 'home.html', 1400); 
      } else {
        const completedJobs = w.experience * 15 + Math.floor(Math.random() * 50);
        const responseTime = w.rating > 4.5 ? 'Under 1 hour' : 'Under 4 hours';
        const reviewsCount = Math.floor(w.rating * 12 + Math.random() * 30);        const SERVICE_ICONS = {
          pipe: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H9a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9h3a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2z"/></svg>`,
          drain: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
          drop: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
          flame: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
          bolt: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
          bulb: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="21" x2="15" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6H8.3A7 7 0 0 1 5 9a7 7 0 0 1 7-7z"/></svg>`,
          panel: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="9" y1="8" x2="9" y2="16"/><line x1="15" y1="8" x2="15" y2="16"/><line x1="6" y1="12" x2="12" y2="12"/></svg>`,
          chair: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v14M18 2v14M6 10h12M6 16l-2 6M18 16l2 6M4 16h16"/></svg>`,
          door: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 21V4.5A.5.5 0 0 1 3.5 4h13a.5.5 0 0 1 .5.5V21"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>`,
          wood: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="9" y1="7" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="17"/></svg>`,
          car: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="9" width="22" height="9" rx="2"/><path d="M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`,
          brake: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
          oil: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6l3 3-3 3v6"/><path d="M8 8l4 4-4 4"/><circle cx="12" cy="12" r="10"/></svg>`,
          gear: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
          wrench: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
        };
       };

        const specificServices = w.service === 'Plumber' ? [
          { name: 'Pipe Fitting', price: 40, color: '#3b82f6', iconKey: 'pipe', desc: 'Expert pipe fitting for residential buildings with zero leakage guarantee.' },
          { name: 'Drain Cleaning', price: 50, color: '#06b6d4', iconKey: 'drain', desc: 'Deep drain cleaning to resolve and prevent major water blockages.' },
          { name: 'Leak Repair', price: 30, color: '#6366f1', iconKey: 'drop', desc: 'Fast turnaround leak repair for sinks, toilets, and showers.' },
          { name: 'Water Heater Install', price: 120, color: '#f59e0b', iconKey: 'flame', desc: 'Full installation and setup of new electric or gas water heaters.' }
        ] : w.service === 'Electrician' ? [
          { name: 'Wiring Setup', price: 80, color: '#f59e0b', iconKey: 'bolt', desc: 'Complete home or office wiring setup according to safety standards.' },
          { name: 'Lighting Fix', price: 40, color: '#eab308', iconKey: 'bulb', desc: 'Repairing or installing new ambient light fixtures.' },
          { name: 'Panel Upgrade', price: 150, color: '#8b5cf6', iconKey: 'panel', desc: 'Upgrading electrical panels to support modern heavy appliances.' }
        ] : w.service === 'Carpenter' ? [
          { name: 'Custom Furniture', price: 200, color: '#d97706', iconKey: 'chair', desc: 'Designing and building custom wooden furniture pieces.' },
          { name: 'Door Repair', price: 40, color: '#78350f', iconKey: 'door', desc: 'Fixing hinges, locks, and frames for interior and exterior doors.' },
          { name: 'Wood Polishing', price: 60, color: '#92400e', iconKey: 'wood', desc: 'Premium polishing to restore the original shine of wooden surfaces.' }
        ] : w.service === 'Mechanic' ? [
          { name: 'Engine Diagnostic', price: 60, color: '#ef4444', iconKey: 'car', desc: 'Full computer diagnostic of engine lights and performance.' },
          { name: 'Brake Repair', price: 100, color: '#dc2626', iconKey: 'brake', desc: 'Pad replacement and rotor resurfacing for maximum stopping power.' },
          { name: 'Oil Change', price: 35, color: '#7c3aed', iconKey: 'oil', desc: 'Standard oil and filter change with premium synthetic blend.' },
          { name: 'Tire Rotation', price: 25, color: '#059669', iconKey: 'gear', desc: 'Rotating and balancing tires for smooth driving.' }
        ] : [
          { name: 'General Maintenance', price: 30, color: '#6b7280', iconKey: 'gear', desc: 'Basic inspection and maintenance services for your home.' },
          { name: 'Repair Service', price: 40, color: '#374151', iconKey: 'wrench', desc: 'Generic repair services for various household items.' }
        ];

        const servicesHtml = specificServices.map(s => `
          <div class="card service-card" style="padding: 24px; display: flex; flex-direction: column; align-items: flex-start; gap: 16px; transition: all 0.3s ease; border: 1px solid #f3f4f6; border-radius: 16px;">
            <div style="width: 52px; height: 52px; border-radius: 14px; background-color: ${s.color}15; color: ${s.color}; display: flex; align-items: center; justify-content: center;">
              ${SERVICE_ICONS[s.iconKey] || ''}
            </div>
            <div style="flex-grow: 1;">
              <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #1f2937; font-weight: 600;">${s.name}</h3>
              <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${s.desc}</p>
            </div>
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
              <span style="font-weight: 700; color: #111827; font-size: 18px;">₨${s.price}</span>
              <button class="btn gradient" style="width: auto; padding: 8px 20px; font-size: 0.85rem; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">Book</button>
            </div>
          </div>
        `).join('');

        const portfolioImages = w.service === 'Plumber' ? [
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1607472586893-edb57cb31422?q=80&w=400&auto=format&fit=crop'
        ] : [
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=400&auto=format&fit=crop'
        ];

        const portfolioHtml = portfolioImages.map((img, i) => `
          <div class="slider-card slider-portfolio">
            <img src="${img}" alt="Portfolio Work">
            <div style="padding:16px;">
              <div style="font-weight:600; font-size:15px; margin-bottom:4px">Project Showcase ${i+1}</div>
              <div style="font-size:13px; color:var(--muted)">Completed ${(i+1)*2} weeks ago</div>
            </div>
          </div>
        `).join('');

        const reviewerAvatars = ['https://i.pravatar.cc/150?img=11', 'https://i.pravatar.cc/150?img=32', 'https://i.pravatar.cc/150?img=43'];
        const reviewsHtml = [1,2,3].map((i, index) => `
          <div class="slider-card slider-review">
            <div class="review-author" style="margin-bottom:12px;">
              <img src="${reviewerAvatars[index]}" class="review-avatar">
              <div>
                <div style="font-weight:600; font-size:15px; color:var(--text)">Satisfied Customer</div>
                <div style="font-size:13px; color:var(--muted)">Hired for ${w.service}</div>
              </div>
            </div>
            <div class="review-stars">${Array(5).fill(0).map(() => `<span style="color:#f59e0b;">${UI_ICONS.star}</span>`).join('')} 5.0</div>
            <p class="review-text">"Excellent work! ${w.name.split(' ')[0]} was incredibly professional, communicated clearly, and solved the issue faster than expected. Highly recommended."</p>
            <div style="font-size:13px; color:var(--muted); font-weight:500;">Reviewed 2 weeks ago</div>
          </div>
        `).join('');

        const similarHTML = SKILLBRIDGE_DATA.workers
          .filter(x => x.service === w.service && x.id !== w.id)
          .slice(0, 4)
          .map(sw => `
            <div class="card" style="padding:20px; text-align:center; border:1px solid rgba(0,0,0,0.05); box-shadow:0 4px 16px rgba(0,0,0,0.02); transition:transform 0.2s" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
              <img src="${sw.photo}" style="width:80px; height:80px; border-radius:50%; object-fit:cover; margin-bottom:16px;">
              <h4 style="margin:0 0 6px; font-size:16px;">${sw.name}</h4>
              <div style="font-size:14px; color:var(--muted); margin-bottom:12px; display:flex; align-items:center; justify-content:center; gap:4px;">${UI_ICONS.star} ${sw.rating} (${sw.experience} yrs)</div>
              <a href="profile.html?worker=${sw.id}" class="btn outline" style="padding:8px 16px; font-size:14px;">View Profile</a>
            </div>
          `).join('');

        const bannerBgUrl = w.service === 'Plumber' ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop' :
                            w.service === 'Electrician' ? 'https://images.unsplash.com/photo-1621905252472-740c83a77884?q=80&w=1200&auto=format&fit=crop' :
                            w.service === 'Carpenter' ? 'https://images.unsplash.com/photo-1582282577239-2a912bbbc02d?q=80&w=1200&auto=format&fit=crop' :
                            'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop';

        const nextDates = ['Today', 'Tomorrow'];
        const dateForm = nextDates.map(d => `<div class="time-slot bk-date-btn ${d==='Today'?'selected':''}" data-val="${d}">${d}</div>`).join('');
        const times = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];
        const timeForm = times.map((t, i) => `<div class="time-slot bk-time-btn ${i===0?'selected':''}" data-val="${t}">${t}</div>`).join('');

        const verifiedBadge = w.verified ? `<span style="color:#10b981; font-size:18px; margin-left:6px; display:inline-flex" title="Verified Professional">${UI_ICONS.shield}</span>` : '';

        container.innerHTML = `
          <div class="profile-layout">
            <div class="profile-main-content">
              <div style="width:100%;height:220px;border-radius:14px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.10);">
                <img src="${bannerBgUrl}" alt="Cover" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;">
              </div>
              <div style="background:var(--card);border-radius:14px;padding:0 28px 20px 28px;box-shadow:0 4px 16px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.04);margin-top:-20px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:14px;">
                  <div style="margin-top:-52px;background:var(--card);border-radius:50%;padding:5px;display:inline-block;box-shadow:0 2px 12px rgba(0,0,0,0.12);">
                    <img src="${w.photo}" style="width:110px;height:110px;border-radius:50%;object-fit:cover;display:block;">
                  </div>
                  <div style="display:flex;gap:10px;padding-top:16px;">
                    <button class="btn outline" style="padding:9px 18px;font-size:14px;width:auto;border-radius:8px;border-color:rgba(0,0,0,0.15);">🤍 Save</button>
                    <button class="btn outline" style="padding:9px 18px;font-size:14px;width:auto;border-radius:8px;">Message</button>
                    <button class="btn gradient" style="padding:9px 20px;font-size:14px;width:auto;border-radius:8px;" onclick="window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})">Book Service</button>
                  </div>
                </div>
                <h1 style="margin:0 0 4px;font-size:26px;display:flex;align-items:center;gap:6px;letter-spacing:-0.3px;">${w.name} ${verifiedBadge}</h1>
                <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:8px;">Top Rated ${w.service} Professional</div>
                <div style="font-size:13px;color:var(--muted);display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
                  <span style="display:flex; align-items:center; gap:4px;">${UI_ICONS.location} ${w.location || 'Local Area'}</span>
                  <span style="opacity:0.3">•</span>
                  <span style="display:flex; align-items:center; gap:4px;">${UI_ICONS.briefcase} ${w.experience} yrs exp</span>
                  <span style="opacity:0.3">•</span>
                  <span style="display:flex; align-items:center; gap:4px;">${UI_ICONS.check} ${completedJobs} jobs</span>
                  <span style="opacity:0.3">•</span>
                  <span style="color:#d97706; font-weight:700; display:flex; align-items:center; gap:4px;">${UI_ICONS.star} ${w.rating}</span>
                </div>
              </div>
              <div class="tabs-nav">
                <button class="tab-btn active" data-target="about">About</button>
                <button class="tab-btn" data-target="services">Services</button>
                <button class="tab-btn" data-target="portfolio">Portfolio</button>
                <button class="tab-btn" data-target="reviews">Reviews</button>
                <button class="tab-btn" data-target="skills">Skills</button>
              </div>
              <div class="tab-content active" id="tab-about">
                <div style="padding: 32px 0;">
                  <h2 style="font-size: 24px; margin: 0 0 20px;">Professional Description</h2>
                  <div style="display: flex; gap: 12px; margin-bottom: 28px; flex-wrap: wrap;">
                     ${w.rating >= 4.7 ? `<span style="display:flex; align-items:center; gap:6px; background:linear-gradient(135deg, #fef3c7, #fde68a); color:#b45309; padding:8px 16px; border-radius:30px; font-size:14px; font-weight:700;">${UI_ICONS.star} Top Rated Pro</span>` : ''}
                     <span style="display:flex; align-items:center; gap:6px; background:rgba(59,130,246,0.1); color:#2563eb; padding:8px 16px; border-radius:30px; font-size:14px; font-weight:600;">${UI_ICONS.clock} ${responseTime}</span>
                     <span style="display:flex; align-items:center; gap:6px; background:rgba(16,185,129,0.1); color:#10b981; padding:8px 16px; border-radius:30px; font-size:14px; font-weight:600;">${UI_ICONS.shield} Verified Professional</span>
                  </div>
                  <p style="color: var(--text); line-height: 1.8; margin: 0; font-size: 16px;">
                    ${w.bio} My primary goal is ensuring customer satisfaction and long-lasting quality on every project.
                  </p>
                </div>
              </div>
              <div class="tab-content" id="tab-services"><div style="padding:32px 0;"><h2 style="font-size:24px;margin:0 0 24px;">Services Offered</h2><div class="service-grid">${servicesHtml}</div></div></div>
              <div class="tab-content" id="tab-portfolio"><div style="padding:32px 0;"><h2 style="font-size:24px;margin:0 0 24px;">Portfolio</h2><div class="horizontal-slider">${portfolioHtml}</div></div></div>
              <div class="tab-content" id="tab-reviews"><div style="padding:32px 0;"><h2 style="font-size:24px;margin:0 0 24px;">Reviews</h2><div class="horizontal-slider">${reviewsHtml}</div></div></div>
              <div class="tab-content" id="tab-skills">
                 <div style="padding:32px 0;">
                   <h2 style="font-size:24px;margin:0 0 24px;">Qualifications</h2>
                   <div style="display:flex; flex-direction:column; gap:16px;">
                     <div style="display:flex; align-items:center; gap:16px; border:1px solid rgba(0,0,0,0.06); padding:20px; border-radius:12px; background:var(--surface)">
                       <div style="font-size:20px; color:#10b981; background:rgba(16,185,129,0.1); width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</div>
                       <div style="font-weight:600; font-size:16px;">Licensed ${w.service} Professional</div>
                     </div>
                   </div>
                 </div>
              </div>
              <div style="margin-top: 48px; padding-top: 40px; border-top: 1px solid var(--border);"><h2 style="font-size: 26px; margin: 0 0 24px;">Similar Workers</h2><div class="similar-workers-grid">${similarHTML}</div></div>
            </div>
            <div class="profile-sidebar">
              <div class="card" style="box-shadow: 0 16px 40px rgba(0,0,0,0.06); border:1px solid rgba(0,0,0,0.08); padding:32px;">
                <h3 style="margin:0 0 24px; font-size:22px;">Book this Professional</h3>
                <div style="margin-bottom:28px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:20px;">
                   <span style="font-size:16px; font-weight:600; color:var(--muted)">Hourly Rate</span>
                   <span style="font-size:28px; font-weight:800">₨${w.price}</span>
                </div>
                <div style="margin-bottom:28px;"><div class="time-slot-grid">${dateForm}</div><input type="hidden" id="bk-date" value="Today"></div>
                <div style="margin-bottom:36px;"><div class="time-slot-grid">${timeForm}</div><input type="hidden" id="bk-time" value="09:00 AM"></div>
                <button id="profile-book-confirm" class="btn gradient" style="width:100%; font-size:17px; padding:16px; border-radius:12px;">Confirm Request</button>
                <div id="bk-msg" style="margin-top:16px; color:#10b981; font-size:15px; text-align:center; font-weight:700;"></div>
              </div>
            </div>
          </div>
        `;

        const tabs = container.querySelectorAll('.tab-btn');
        const contents = container.querySelectorAll('.tab-content');
        tabs.forEach(t => { t.addEventListener('click', () => { tabs.forEach(btn => btn.classList.remove('active')); contents.forEach(c => c.classList.remove('active')); t.classList.add('active'); container.querySelector('#tab-' + t.dataset.target).classList.add('active'); }); });
        const dateChips = container.querySelectorAll('.bk-date-btn');
        dateChips.forEach(c => { c.addEventListener('click', () => { dateChips.forEach(btn => btn.classList.remove('selected')); c.classList.add('selected'); document.getElementById('bk-date').value = c.dataset.val; }); });
        const timeChips = container.querySelectorAll('.bk-time-btn');
        timeChips.forEach(c => { c.addEventListener('click', () => { timeChips.forEach(btn => btn.classList.remove('selected')); c.classList.add('selected'); document.getElementById('bk-time').value = c.dataset.val; }); });
        const bookBtn = document.getElementById('profile-book-confirm');
        bookBtn.addEventListener('click', () => { bookBtn.innerHTML = 'Sending...'; setTimeout(() => { bookBtn.innerHTML = 'Request Sent!'; bookBtn.style.background = '#10b981'; const dt = document.getElementById('bk-date').value; const tm = document.getElementById('bk-time').value; document.getElementById('bk-msg').textContent = 'Appointment requested for ' + dt + ' at ' + tm; }, 1000); });
      }
    }
  }
}
