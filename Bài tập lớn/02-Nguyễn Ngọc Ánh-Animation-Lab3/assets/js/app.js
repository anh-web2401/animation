
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
  };
  
 
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu a");
  
  window.addEventListener("scroll", () => {
    sections.forEach((sec, index) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        menuLinks.forEach(link => link.classList.remove("active"));
        menuLinks[index].classList.add("active");
      }
    });
  });
  
  
  const boxes = document.querySelectorAll(".box");
  
  window.addEventListener("scroll", () => {
    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        box.classList.add("show");
      }
    });
  });
  

  const jumpBtn = document.querySelector(".jump");
  
  jumpBtn.addEventListener("mouseover", () => {
    jumpBtn.classList.add("animate");
    setTimeout(() => jumpBtn.classList.remove("animate"), 400);
  });
  
 
  const circle = document.querySelector('.circle');

document.addEventListener('mousemove', function (e) {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
});