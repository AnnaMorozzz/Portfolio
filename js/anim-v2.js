document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('.nav-link-v2');

  function closeMenu() {
    burger.classList.remove('active');
    navMenu.classList.remove('open');
  }

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 900) {
        closeMenu();
      }
    });
  });

  // Закрытие меню при ресайзе окна на десктоп
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}); 