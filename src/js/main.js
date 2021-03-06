document.addEventListener("DOMContentLoaded", async function(event) {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Dark mode
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.querySelector(".img1 img").setAttribute("src", "images/menu2-white.svg");
            document.querySelector("#pouce").setAttribute("src", "images/dislike-white.svg");
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.querySelector(".img1 img").setAttribute("src", "images/menu2.svg");
            document.querySelector("#pouce").setAttribute("src", "images/dislike.svg");
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

// API titre/Image/description

    let resultat_api = await callAPI();
    console.log(resultat_api);
    console.log(resultat_api.articles[0].title);
    let articleTitle = resultat_api.articles[0].title;
    let articleImage = resultat_api.articles[0].urlToImage;
    console.log(articleImage);
    let articleDescription = resultat_api.articles[0].description;
    console.log(articleDescription);

    document.getElementById('titreville').innerHTML = articleTitle;
    document.getElementById('ville').setAttribute("src",articleImage);

    let divImages = document.getElementsByClassName('images2')[0];
    divImages.insertAdjacentHTML("afterend",'<p class="description">'+articleDescription+'</p>');
})

/*Fonction qui appelle l'API */

async function callAPI(){
let articles_api = await fetch('https://newsapi.org/v2/everything?q=pollution&apiKey=2f8847d9e4e1440ea93c57a8d9539684');
return await articles_api.json();
}

console.log(callAPI());
