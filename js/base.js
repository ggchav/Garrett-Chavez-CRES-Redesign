document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".cres-nav button:not(:last-child)");
    const primaryLinks = document.querySelectorAll(".primary-links");
    const asides = document.querySelectorAll(".card-dropdown aside");

    let currentOpenDropdown = null;

    // Close all open dropdowns
    function closeDropdowns() {
        dropdownButtons.forEach(button => {
            const dropdown = button.nextElementSibling;
            dropdown.classList.remove("open");
            button.classList.remove("open");
        });
        currentOpenDropdown = null;
    }

    // Toggle a dropdown and close others
    function toggleDropdown(button, index) {
        const dropdown = primaryLinks[index];

        if (currentOpenDropdown === dropdown) {
            closeDropdowns();
        } else {
            closeDropdowns();
            dropdown.classList.add("open");
            button.classList.add("open");
            currentOpenDropdown = dropdown;
        }
    }

    // Dropdown button click listeners
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

    // Toggle aside content
    asides.forEach(aside => {
        aside.addEventListener("click", () => {
            aside.classList.toggle("open");
            const svg = aside.querySelector("svg");
            svg.classList.toggle("open");
            const hiddenContent = aside.querySelector(".hidden");
            hiddenContent.classList.toggle("open");
        });
    });
});
