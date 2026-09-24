document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

   
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
});



const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const homeHeader = document.getElementById('hero');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  if (homeHeader) {
    homeHeader.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});