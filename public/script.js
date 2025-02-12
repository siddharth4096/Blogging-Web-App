

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("read-more")) {
            event.preventDefault();

            const post = event.target.closest(".blog-post");
            const fullContent = post.querySelector(".full-content");
            const readMoreBtn = event.target;

            if (!fullContent) {
                console.error("Full content element not found.");
                return;
            }

            if (fullContent.style.display === "none" || fullContent.style.display === "") {
                fullContent.style.display = "inline"; // Show full content
                readMoreBtn.textContent = "Read Less";
            } else {
                fullContent.style.display = "none"; // Hide full content
                readMoreBtn.textContent = "Read More";
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelector(".logout");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent immediate navigation

            alert("You are being logged out...");

            setTimeout(() => {
                window.location.href = logoutBtn.href; // Redirect after 3 seconds
            }, 1000); // 3 seconds delay
        });
    }
});
