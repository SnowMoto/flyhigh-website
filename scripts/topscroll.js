document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTop");

    if (!btn) {
        console.error("Back-to-top button not found.");
        return;
    }

    // Check scroll position and show/hide button
    function toggleBackToTop() {
        if (window.scrollY > 200) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleBackToTop);

    // Back to top
    btn.addEventListener("click", () => {
        console.log("Scroll to top!");

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    // Set initial state
    toggleBackToTop();
});
