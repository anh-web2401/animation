// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Form (contact.html)
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    alert("Gửi thành công!");
    form.reset();
  });
}
