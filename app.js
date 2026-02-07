const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Backend_Developer_Resume.pdf";
    link.click();
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
}

// Close menu when clicking on a link
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
mobileMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Toggle project content
const projectTitles = document.querySelectorAll("#projects h3");

projectTitles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("hidden");
  });
});
