let currentStep = 0;
const steps = document.querySelectorAll('.form-step');
const bgMusic = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleMusicBtn");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

function startProtocol() {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('formContainer').style.display = 'block';
  bgMusic.muted = false;
  bgMusic.play();
  toggleBtn.innerText = "🔊 Music On";
  showStep(currentStep);
}

function toggleMusic() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    toggleBtn.innerText = "🔊 Music On";
  } else {
    bgMusic.muted = true;
    toggleBtn.innerText = "🔇 Music Off";
  }
}

function submitForm(event) {
  event.preventDefault();
  console.log("✅ Submit button clicked!");
  currentStep++;
  showStep(currentStep);
}


