
    document.addEventListener("DOMContentLoaded", () => {
   const toggleBtn = document.getElementById("aboutToggle");
      const dropdown = document.getElementById("aboutMenu");
      const arrowIcon = document.getElementById("arrowIcon");

      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("hidden");
        arrowIcon.classList.toggle("rotate-180"); // Toggle rotation
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", () => {
        if (!dropdown.classList.contains("hidden")) {
          dropdown.classList.add("hidden");
          arrowIcon.classList.remove("rotate-180"); // Reset rotation
        }
      });

      dropdown.addEventListener("click", (e) => e.stopPropagation());
    });

const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

//Faculty
   function filterFaculty(type) {
      const cards = document.querySelectorAll('.faculty-card');
      cards.forEach(card => {
        if (type === 'all') {
          card.style.display = 'block';
        } else if (!card.classList.contains(type)) {
          card.style.display = 'none';
        } else {
          card.style.display = 'block';
        }
      });
    }