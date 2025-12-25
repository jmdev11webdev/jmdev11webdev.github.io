document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function open_nav() {
    document.getElementById("MySidebar").classList.add("show");
}

function close_nav() {
    document.getElementById("MySidebar").classList.remove("show");
}

const navbar = document.getElementById("navbar");
  const main = document.getElementById("main-content");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    },
    {
      threshold: 0,
    }
  );

  observer.observe(main);