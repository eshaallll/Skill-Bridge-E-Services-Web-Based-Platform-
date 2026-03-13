/* =========================================================================
   AUTH UTILITIES & WIZARD LOGIC
   ========================================================================= */

// Customer Signup Password Matching
const custForm = document.getElementById('customer-signup-form');
if(custForm) {
  custForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p1 = document.getElementById('password').value;
    const p2 = document.getElementById('confirm-password').value;
    const err = document.getElementById('signup-error');
    
    if(p1 !== p2) {
      err.textContent = "Passwords do not match.";
      return;
    }
    
    // Success -> redirect to customer home
    location.href = 'customer-dashboard.html';
  });
}

// Worker Signup Multi-step Logic
function nextStep(current) {
  // Very basic validation check for the current step before proceeding
  const currentDiv = document.getElementById(`step${current}`);
  const inputs = currentDiv.querySelectorAll('input[required], select[required], textarea[required]');
  
  let valid = true;
  inputs.forEach(input => {
    if(!input.value) {
      input.style.borderColor = 'red';
      valid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  if(current === 1) {
    const p1 = document.getElementById('w-password').value;
    const p2 = document.getElementById('w-confirm').value;
    if(p1 !== p2) {
      document.getElementById('w-error').textContent = "Passwords do not match";
      valid = false;
    } else {
      document.getElementById('w-error').textContent = "";
    }
  }

  if(valid) {
    // Hide current, show next
    document.getElementById(`step${current}`).style.display = 'none';
    document.getElementById(`step${current + 1}`).style.display = 'block';
    
    // Update Indicators
    document.getElementById(`step${current}-ind`).classList.remove('active');
    document.getElementById(`step${current}-ind`).classList.add('completed');
    document.getElementById(`step${current + 1}-ind`).classList.add('active');
  }
}

function prevStep(current) {
  // Hide current, show prev
  document.getElementById(`step${current}`).style.display = 'none';
  document.getElementById(`step${current - 1}`).style.display = 'block';
  
  // Update Indicators
  document.getElementById(`step${current}-ind`).classList.remove('active');
  document.getElementById(`step${current - 1}-ind`).classList.add('active');
  document.getElementById(`step${current - 1}-ind`).classList.remove('completed');
}

const workerForm = document.getElementById('worker-signup-form');
if(workerForm) {
  workerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Redirect to verification post-submit
    location.href = 'verification-status.html';
  });
}
