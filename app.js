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

// Toast notification function
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.className = `fixed top-20 right-4 text-white px-4 py-2 rounded-lg shadow-lg opacity-100 transition-opacity duration-300 z-50 ${isError ? 'bg-red-500' : 'bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950'}`;

  setTimeout(() => {
    toast.classList.add("opacity-0");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 3000);
}

// Contact form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all fields.", true);
      return;
    }

    try {
      const response = await fetch("https://mail-sender-cyan.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast(data.message || "Your message has been sent successfully!");
        contactForm.reset();
      } else {
        showToast("Failed to send message. Please try again.", true);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("An error occurred. Please try again later.", true);
    }
  });
}
