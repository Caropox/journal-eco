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
    let articles = await fetch('https://newsapi.org/v2/top-headlines?q=environment&apiKey=2f8847d9e4e1440ea93c57a8d9539684');
    console.log(articles)
    return await articles.json();
}

console.log(callAPI());

