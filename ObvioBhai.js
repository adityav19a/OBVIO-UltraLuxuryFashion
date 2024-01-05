// script.js
// bhai Scroll Animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const headerContent = document.querySelector('.header-content');
    const headerPosition = header.getBoundingClientRect().top;

    if (headerPosition < window.innerHeight - 50) {
        header.classList.add('active');
        headerContent.classList.add('active');
    } else {
        header.classList.remove('active');
        headerContent.classList.remove('active');
    }
});



  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // bhai Show/Hide Back to Top Button
  window.onscroll = function() {
    var scrollButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };
  


function openSignUpModal() {
    // bhai istemaal sign-up modal logic here
    // bhai istemaal libraries like Bootstrap or create a custom modal
    alert('Sign Up button clicked!'); // bhai demonstration keliyea
  }
  