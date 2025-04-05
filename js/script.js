document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".switch"); 
    const themeIcon = document.querySelector(".theme-icon");
                                                         
    const theme = localStorage.getItem("theme") || "light"; // отримуємо поточну тему з, якщо немає, за замовчуванням "light"
    document.body.classList.toggle("dark-mode", theme === "dark");
    themeIcon.innerHTML = theme === "dark" ? "&#9789;" : "&#9788;"; // місяць/сонце
    themeToggleButton.addEventListener("click", () => {
        const newTheme = document.body.classList.toggle("dark-mode") ? "dark" : "light";
        themeIcon.innerHTML = newTheme === "dark" ? "&#9789;" : "&#9788;";  
        localStorage.setItem("theme", newTheme); // збереження теми після перезавантаження сторінки
    });
});
