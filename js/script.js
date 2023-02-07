let title = document.getElementById("title");
let imdb = document.getElementById("imdb");
let duration = document.getElementById("duration");
let year = document.getElementById("year");
let play = document.getElementById("play");
let background = document.getElementsByTagName("body");
let text = document.getElementById("text");
let img = document.querySelector("img");
let p = document.getElementById("foo");
let newPeli = document.getElementById('btn-new');
let info = document.getElementById("info");






class Pelicula {
    constructor(title, imdb, duration, year, url, background, text) {
        this.title = title;
        this.imdb = imdb;
        this.duration = duration;
        this.year = year;
        this.url = url;
        this.background = background;
        this.text = text;
    }

    mostrar() {
        title.innerText = `${this.title}`;
        info.innerHTML = `  <div>
                                <i style="color:#FCF02D" ; class="fa-regular fa-lg fa-star"></i> <span id="imdb" class="padding-span">IMDB: ${this.imdb}</span>
                            </div>
                            <div>
                                <i style="color:#FCF02D" ; class="fa-regular fa-lg fa-clock"></i> <span id="duration" class="padding-span">DURATION: ${this.duration}</span>
                            </div>
                            <div>
                                <i style="color:#FCF02D" ; class="fa-regular fa-lg fa-calendar-days"></i> <span id="year" class="padding-span">YEAR: ${this.year}</span>
                            </div>`
        text.innerText = `${this.text}`
        play.innerHTML = `<a href="${this.url}" target="_blank" style= "color:black;">
                                                <button id="play" class="btn-play">
                                                    <i class="fa-sharp fa-solid fa-play"></i> PLAY
                                                </button> 
                                            </a>`;
        document.body.style.backgroundImage = `${this.background}`;
    }
}

const peliculas = [
    new Pelicula("The Lost Boys", "7.2", "1H 37M", "1987", "https://drive.google.com/file/d/1kI8cScQabqNfKvgF5KgVeQleTnQ0LGyS/view?usp=share_link", "url('/css/assets/TheLostBoys.jpg')", "After moving to a new town two brothers discover that the area is a heaven for vampires"),
    new Pelicula("Muriel’s Wedding", "7.2", "1H 46M", "1994", "https://drive.google.com/file/d/1RbnklZVm-zWHRcoR8QkiVlEhoZ8RbXOP/view?usp=share_link", "url('/css/assets/Muriel’sWedding.jpg')", "A young social outcast in Australia steals money from her parents to finance a vacation where she hopes to find happiness, and perhaps love."),
    new Pelicula("Tomboy", "7.4", "82M", "2011", "https://drive.google.com/file/d/1KEWr3ETqDrMovKXVxAH8L5zboLtfv5lB/view?usp=share_link", "url('/css/assets/Tomboy.JPG')", "A family moves into a new neighborhood, and a 10-year-old named Laure deliberately presents as a boy named Mikhael to the neighborhood children."),
    new Pelicula("VFW", "6.1", "1H 32M", "2019", "https://drive.google.com/file/d/1VkcY4f5U4qAzrI0MzyF0T4iO4qnDRxdO/view?usp=share_link", "url('/css/assets/VFW.jpg')", "A group of old war veterans put their lives on the line to defend a young woman taking shelter in their local VFW post, who's running from a deranged drug dealer and his relentless army of drug-addled punks."),
    new Pelicula("Dressed To Kill", "7.1", "1H 46M", "1980", "https://drive.google.com/file/d/1Cvz3OFS4DFWr3ayQb2AM58q0IPrCGVEG/view?usp=share_link", "url('/css/assets/DressedToKill.jpg')", "A mysterious blonde woman kills one of a psychiatrist's patients, and then goes after the high-class call girl who witnessed the murder."),
    new Pelicula("True Romance", "7.9", "2H", "1993", "https://drive.google.com/file/d/17He3R2TdwQgAFnzZ2uEcvPVEPiNe2JQw/view?usp=share_link", "url('/css/assets/TrueRomance.jpg')", "In Detroit, a lonely pop culture geek marries a call girl, steals cocaine from her pimp, and tries to sell it in Hollywood. Meanwhile, the owners of the cocaine, the Mob, track them down in an attempt to reclaim it."),
    new Pelicula("Los Paranoicos", "6.5", "1H 50M", "2008", "https://drive.google.com/file/d/1SK7we_1wV0FYX269rm2ct2Q3wE83MHab/view?usp=share_link", "url('/css/assets/LosParanoicos.png')", "Luciano works in birthday parties and writes his first feature when friend Manuel returns from Spain to repeat his TV show, The Paranoids, with his girl Sofia. Manuel is everything he is not and his help in his career and with women only worsen the conflict."),
    new Pelicula("Like Father Like Son", "7.8", "2H", "2013", "https://drive.google.com/file/d/1FAQ6ixbROCSIFWdCYRxDBF9RJPFr31aT/view?usp=share_link", "url('/css/assets/LikeFatherLikeSon.jpg')", "Ryota is a successful workaholic businessman. When he learns that his biological son was switched with another boy after birth, he faces the difficult decision to choose his true son or the boy he and his wife have raised as their own."),
    new Pelicula("Under The Silver Lake", "6", "2H 19M", "2018", "https://drive.google.com/file/d/1YxeeR8V8HPj4OGxv6Zc5oUygk9VSVzh6/view?usp=share_link", "url('/css/assets/UnderTheSilverLake.jpg')", "Sam, a disenchanted young man, finds a mysterious woman swimming in his apartment's pool one night. The next morning, she disappears. Sam sets off across LA to find her, and along the way he uncovers a conspiracy far more bizarre.")
];


function clicked() {
    let randomIndex = Math.floor(Math.random() * peliculas.length);
    let randomMovie = peliculas[randomIndex];
    randomMovie.mostrar();
    img.removeAttribute('src');
}
newPeli.addEventListener("click", clicked);

function recarga(evento) {
    location.reload();
}
p.onclick = recarga;