document.addEventListener("DOMContentLoaded", function () {
    const cresNav = document.querySelector(".cres-nav");
    const dropdownButtons = document.querySelectorAll(".cres-nav button:not(:last-child)");
    const primaryLinks = document.querySelectorAll(".primary-links");
    const asides = document.querySelectorAll(".card-dropdown aside:not(.no-hidden)");

    // Toggle sticky class based on scroll position
    function toggleSticky() {
        cresNav.classList.toggle("sticky", cresNav.getBoundingClientRect().top <= 0);
    }

    window.addEventListener("scroll", toggleSticky);
    toggleSticky();

    // Dropdown related functions
    function closeDropdowns() {
        dropdownButtons.forEach(button => {
            button.classList.remove("open");
            const dropdown = button.nextElementSibling;
            dropdown.classList.remove("open");
        });
        currentOpenDropdown = null;
    }

    let currentOpenDropdown = null;

    function toggleDropdown(button, index) {
        const dropdown = primaryLinks[index];

        if (currentOpenDropdown === dropdown) {
            closeDropdowns();
        } else {
            closeDropdowns();
            button.classList.add("open");
            dropdown.classList.add("open");
            currentOpenDropdown = dropdown;
        }
    }

    dropdownButtons.forEach((button, index) => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            toggleDropdown(button, index);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", event => {
        const target = event.target;
        if (!target.closest(".cres-nav")) {
            closeDropdowns();
        }
    });

    // Toggle aside visibility
    asides.forEach(aside => {
        aside.addEventListener("click", () => {
            aside.classList.toggle("open");
            const svg = aside.querySelector("svg");
            svg.classList.toggle("open");
            const hiddenContent = aside.querySelector(".hidden");
            hiddenContent.classList.toggle("open");
        });
    });

    // Close the dropdowns on any click
    document.addEventListener("click", closeDropdowns);
});
