document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("backToTop");
    const main = document.querySelector("main"); // the actual scroll container

    if (!btn || !main) return;

    window.addEventListener("scroll", () => {
        if (main.scrollTop > 200 || window.scrollY > 200) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        console.log("Scroll to top!");
        main.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
    });
});
