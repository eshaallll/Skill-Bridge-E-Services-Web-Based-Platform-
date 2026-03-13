// Minimal client logic to render pages from SKILLBRIDGE_DATA
function q(name){return new URLSearchParams(location.search).get(name)}

function cardHTML(w){
  const photo = w.photo || 'https://i.pravatar.cc/150?img=47';
  return `<div class="worker-card">
    <div style="display:flex;gap:12px;align-items:center">
      <img src="${photo}" alt="${w.name}" class="worker-photo">
      <div style="flex:1">
        <h3 style="margin:0 0 6px 0">${w.name}</h3>
        <div style="color:#6b7280;font-size:13px">${w.service} • ${w.experience} yrs • <span class=\"stars\">⭐ ${w.rating}</span></div>
        <p style="margin:8px 0 0 0">${w.bio}</p>
      </div>
    </div>
    <div style="display:flex;gap:8px;margin-top:12px">
      <a class="btn outline" href="profile.html?worker=${w.id}">View Profile</a>
      <a class="btn gradient" href="booking.html?worker=${w.id}">Book Now</a>
    </div>
  </div>`
}

function goCategory(cat){ location.href = 'listing.html?cat='+encodeURIComponent(cat) }

// Home rendering
if (location.pathname.endsWith('/home.html') || location.pathname.endsWith('home.html')){
  const container = document.getElementById('top-workers');
  const top = SKILLBRIDGE_DATA.workers.slice().sort((a,b)=>b.rating-a.rating).slice(0,4);
  container.innerHTML = top.map(cardHTML).join('')
}

// Listing rendering
if (location.pathname.endsWith('/listing.html') || location.pathname.endsWith('listing.html')){
  const cat = q('cat') || 'All';
  document.getElementById('listing-title').textContent = cat + ' workers';
  const list = document.getElementById('workers-list');
  let workers = SKILLBRIDGE_DATA.workers.filter(w=> cat==='All' ? true : w.service===cat);
  list.innerHTML = workers.map(cardHTML).join('') || '<div>No workers found.</div>';
}

// Profile rendering
if (location.pathname.endsWith('/profile.html') || location.pathname.endsWith('profile.html')){
  const id = parseInt(q('worker'),10);
  const card = document.getElementById('profile-card');
  if (!id || isNaN(id)){
    card.innerHTML = '<p>Worker not specified. Redirecting to home...</p>';
    setTimeout(()=> location.href = 'home.html', 1400);
  } else {
    const w = SKILLBRIDGE_DATA.workers.find(x=>x.id===id);
    if (!w){ card.innerHTML = '<p>Worker not found. Redirecting to home...</p>'; setTimeout(()=> location.href = 'home.html', 1400); }
    else {
      card.innerHTML = `<h1 class="title">${w.name}</h1>
      <div style="display:flex;gap:18px;align-items:flex-start">
        <div style="flex:1">
          <p><strong>Service:</strong> ${w.service}</p>
          <p><strong>Experience:</strong> ${w.experience} years</p>
          <p><strong>Rating:</strong> ${w.rating}</p>
          <p>${w.bio}</p>
          <a class="btn" href="booking.html?worker=${w.id}">Book Now</a>
        </div>
      </div>`;
    }
  }
}

// Booking rendering + simple confirm
if (location.pathname.endsWith('/booking.html') || location.pathname.endsWith('booking.html')){
  const id = parseInt(q('worker'),10);
  const area = document.getElementById('booking-area');
  if (!id || isNaN(id)){
    area.innerHTML = '<p>Worker not specified. Redirecting to home...</p>';
    setTimeout(()=> location.href = 'home.html', 1400);
  } else {
    const w = SKILLBRIDGE_DATA.workers.find(x=>x.id===id);
    if (!w){ area.innerHTML = '<p>Worker not found. Redirecting to home...</p>'; setTimeout(()=> location.href = 'home.html', 1400); }
    else {
      area.innerHTML = `<p><strong>Booking for:</strong> ${w.name} — ${w.service}</p>
      <label>Select date</label>
      <select id="bk-date">${w.availability.map(d=>`<option value="${d}">${d}</option>`).join('')}</select>
      <label style="display:block;margin-top:8px">Select time</label>
      <select id="bk-time"><option>09:00</option><option>11:00</option><option>14:00</option></select>
      <div style="margin-top:12px"><button id="confirm" class="btn">Confirm booking</button></div>
      <div id="bk-msg" style="margin-top:10px;color:#6b7280"></div>`;
      document.getElementById('confirm').addEventListener('click', function(){
        const date = document.getElementById('bk-date').value;
        const time = document.getElementById('bk-time').value;
        document.getElementById('bk-msg').textContent = 'Booking requested — check backend to persist.';
      })
    }
  }
}
