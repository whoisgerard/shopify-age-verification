document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('age-verification-modal');
  const yesBtn = document.getElementById('age-yes');
  const noBtn = document.getElementById('age-no');

  if (localStorage.getItem('ageVerified') !== 'true') {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  yesBtn.addEventListener('click', () => {
    yesBtn.classList.add('pop-animation');
    launchConfetti();
    setTimeout(() => {
      localStorage.setItem('ageVerified', 'true');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 1000);
  });

  noBtn.addEventListener('click', () => {
    window.location.href = "https://disney.com";
  });

  function launchConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
});
