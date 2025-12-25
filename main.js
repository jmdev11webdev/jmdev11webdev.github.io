document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function open_nav() {
    document.getElementById("MySidebar").style.display = "block"; 
    document.getElementById("MySidebar").style.width = "250px"; 
}

function close_nav() {
    document.getElementById("MySidebar").style.width = "0"; 
    document.getElementById("MySidebar").style.display = "none";
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