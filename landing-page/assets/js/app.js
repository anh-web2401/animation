// DARK MODE
document.getElementById("toggle-theme").onclick = () => {
    document.body.classList.toggle("dark");
  };
  
  // SCROLL SPY + REVEAL
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const reveals = document.querySelectorAll(".reveal");
  
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
  
    sections.forEach(sec => {
      let top = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`a[href="#${id}"]`).classList.add("active");
      }
    });
  
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });
  
  // CUSTOM CURSOR
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  