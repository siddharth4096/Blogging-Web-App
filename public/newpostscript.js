document.addEventListener("DOMContentLoaded", () => {
    const contentInput = document.getElementById("content");
    const charCount = document.getElementById("charCount");
    const maxChars = 500;

    // Update character count on input
    contentInput.addEventListener("input", () => {
        const currentLength = contentInput.value.length;
        charCount.textContent = `${currentLength} / ${maxChars}`;
        if (currentLength > maxChars) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#555";
        }
    });

    // Form submission event
    document.getElementById("postForm").addEventListener("submit", (event) => {
        // event.preventDefault(); // Prevent actual submission (for demo)

        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
        const image = document.getElementById("image").files[0];

        if (title === "" || content === "") {
            alert("Title and content cannot be empty.");
            return;
        }

        alert("Post Published Successfully!");
    });
});



//Javascript for the login/register page


document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");
    const formTitle = document.getElementById("formTitle");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginTab && registerTab) {  // Ensure elements exist before adding event listeners
        // Switch to Register Form
        registerTab.addEventListener("click", () => {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            formTitle.textContent = "Register";
            loginTab.classList.remove("active");
            registerTab.classList.add("active");
        });

        // Switch to Login Form
        loginTab.addEventListener("click", () => {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            formTitle.textContent = "Login";
            registerTab.classList.remove("active");
            loginTab.classList.add("active");
        });

        // Handle Login Form Submission
        loginForm.addEventListener("submit", async (event) => {
            // event.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            console.log("Logging in:", { email, password });
            alert("Login Successful! (Mock Implementation)");
        });

        // Handle Register Form Submission
        registerForm.addEventListener("submit", async (event) => {
            // event.preventDefault();
            const name = document.getElementById("registerName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("registerPassword").value.trim();

            if (!name || !email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            console.log("Registering user:", { name, email, password });
            alert("Account Created Successfully! (Mock Implementation)");
        });
    }
});
