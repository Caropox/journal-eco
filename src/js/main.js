document.addEventListener("DOMContentLoaded", async function(event) {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
})
/*
Fonction qui appelle l'API 
*/
async function callAPI(){
    let articles = await fetch('https://newsapi.org/v2/top-headlines?q=pollution&apiKey=2f8847d9e4e1440ea93c57a8d9539684');
    console.log(articles)
    return await articles.json();
}

console.log(callAPI());

document.addEventListener("DOMContentLoaded", function(event) {
    // Gestion du menu mobile
    document.getElementById("nav-mobile-open").addEventListener("click", openNavMenu, false);
    document.getElementById("nav-mobile-close").addEventListener("click", closeNavMenu, false);

    var mobileMenuLinks = document.querySelectorAll("nav#nav-mobile ul li a");
    mobileMenuLinks.forEach(function(linkElem) {
        linkElem.addEventListener("click", closeNavMenu, false);
    })

    function openNavMenu() {
        var menuToEdit = document.getElementById("mobileMenu");
        menuToEdit.classList.remove("hidden"); // EnlÃ¨ve la classe CSS
        menuToEdit.removeAttribute("hidden"); // EnlÃ¨ve l'attribut HTML
    }

    function closeNavMenu() {
        var menuToEdit = document.getElementById("mobileMenu");
        menuToEdit.classList.add("hidden"); // Ajoute la classe CSS
        menuToEdit.setAttribute("hidden","hidden"); // Ajoute l'attribut HTML
    }
});