let title = document.getElementById("title");
let imdb = document.getElementById("imdb");
let duration = document.getElementById("duration");
let year = document.getElementById("year");
let play = document.getElementById("play");
let background = document.getElementsByTagName("body");
let text = document.getElementById("text");
let img = document.querySelector("img");
let p = document.getElementById("foo");
let cardMovie = document.getElementById("card-movie");

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
        play.innerHTML = `
    <div>
    <a href="${this.url}" target="blank" class="glightbox_video"> 
    <svg width="80" height="80" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
        <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
        <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#FCF02D"></path>
    </svg>
    </a>
    </div>`;
        document.body.style.backgroundImage = `${this.background}`;
    }
}

const peliculas = [
    new Pelicula("The Lost Boys", "7,2", "1h 37min", "1987", "https://drive.google.com/file/d/1kI8cScQabqNfKvgF5KgVeQleTnQ0LGyS/view?usp=share_link", "url('/css/assets/TheLostBoys.jpg')", "Después de mudarse a una nueva ciudad, dos hermanos descubren que el área es un refugio para vampiros."),
    new Pelicula("Muriel’s Wedding", "7,2", "1h 46min", "1994", "https://drive.google.com/file/d/1RbnklZVm-zWHRcoR8QkiVlEhoZ8RbXOP/view?usp=share_link", "url('/css/assets/Muriel’sWedding.jpg')", "Una joven marginada social de Australia le roba dinero a sus padres para financiarse unas vacaciones en las que espera encontrar la felicidad y, quién sabe, quizás incluso el amor."),
    new Pelicula("Tomboy", "7,4", "1h 22min", "2011", "https://drive.google.com/file/d/1KEWr3ETqDrMovKXVxAH8L5zboLtfv5lB/view?usp=share_link", "url('/css/assets/Tomboy.JPG')", "Una familia se muda a un nuevo vecindario, y una niña de 10 años llamada Laure se presenta deliberadamente como un niño llamado Mikhael a los niños del vecindario."),
    new Pelicula("VFW", "6,1", "1h 32min", "2019", "https://drive.google.com/file/d/1VkcY4f5U4qAzrI0MzyF0T4iO4qnDRxdO/view?usp=share_link", "url('/css/assets/VFW.jpg')", "Un grupo de veteranos de guerra deben defender su puesto local de VFW y a un adolescente inocente contra un narcotraficante trastornado y su implacable ejército de matones mutantes."),
    new Pelicula("Dressed To Kill", "7,1", "1h 44min", "1980", "https://drive.google.com/file/d/1Cvz3OFS4DFWr3ayQb2AM58q0IPrCGVEG/view?usp=share_link", "url('/css/assets/DressedToKill.jpg')", "Una misteriosa mujer rubia mata a uno de los pacientes de un psiquiatra, y luego va a por la única testigo."),
    new Pelicula("True Romance", "7,9", "1h 59min", "1993", "https://drive.google.com/file/d/17He3R2TdwQgAFnzZ2uEcvPVEPiNe2JQw/view?usp=share_link", "url('/css/assets/TrueRomance.jpg')", "Clarence conoce a Alabama, del encuentro de estas dos almas perdidas surgirá un romance que les llevará a iniciar una nueva vida juntos, mientras unos traficantes de drogas les pisan los talones."),
    new Pelicula("Los Paranoicos", "6,7", "1h 38min", "2008", "https://drive.google.com/file/d/1SK7we_1wV0FYX269rm2ct2Q3wE83MHab/view?usp=share_link", "url('/css/assets/LosParanoicos.png')", "Dos animadores de fiestas infantiles se las rebuscan como pueden en una Argentina que se les resiste."),
    new Pelicula("Like Father Like Son", "7,8", "2h 1min", "2013", "https://drive.google.com/file/d/1FAQ6ixbROCSIFWdCYRxDBF9RJPFr31aT/view?usp=share_link", "url('/css/assets/LikeFatherLikeSon.jpg')", "Ryota es un exitoso empresario adicto al trabajo quien se entera de que su hijo biológico fue cambiado por otro niño después del nacimiento."),
    new Pelicula("Under The Silver Lake", "6,5", "2h 19min", "2018", "https://drive.google.com/file/d/1YxeeR8V8HPj4OGxv6Zc5oUygk9VSVzh6/view?usp=share_link", "url('/css/assets/UnderTheSilverLake.jpg')", "Sam conoce a una misteriosa mujer nadando en la piscina de su apartamento una noche. A la mañana siguiente, ella desaparece. Sam intenta encontrarla y desvela una conspiración bizarra."),
    new Pelicula("Targets", "7,3", "1h 30min", "1968", "https://drive.google.com/file/d/1jE9nkp4pXQ11ZTjbvvQVS_UhfOZSFxz_/view?usp=share_link", "url('/css/assets/Targets.jpg')", "Cuando el viejo actor Byron Orlock comprueba que la vida real supera con creces la violencia de sus películas de terror, decide abandonar el cine."),
    new Pelicula("Picnic at Hanging Rock", "7,4", "1h 55min", "1975", "https://drive.google.com/file/d/1yudBT_4_cDAZS65RAr2zEb-w4FnNj7zm/view?usp=share_link", "url('/css/assets/PicnicAtHangingRock.jpg')", "Durante un picnic rural de verano, algunos estudiantes y una maestra de una escuela de niñas de Australia desaparecen sin dejar rastro. Su ausencia frustra y acecha a las personas que quedan atrás."),
    new Pelicula("Do The Right Thing", "8,0", "2h", "1989", "https://drive.google.com/file/d/16ZAfGPsGY27itT1AzhbALe_mMGqnI4Jn/view?usp=share_link", "url('/css/assets/DoTheRightThing.jpg')", "En el día más caluroso del año, las tensiones crecen en un sector de Brooklyn hasta explotar en violencia."),
    new Pelicula("The Assistant", "6,4", "1h 27min", "2019", "https://drive.google.com/file/d/1kcZ7vL7pVG9RuSLU7nPO_P80S-4AiA-e/view?usp=share_link", "url('/css/assets/TheAssistant.jpg')", "Una mirada al día a día de la asistente de un ejecutivo corporativo."),
    new Pelicula("Bringing Up Baby", "7,8", "1h 42min", "1938", "https://drive.google.com/file/d/1m7Y8vqOeV2Qiz-XvObus3mWd_Oif5rKe/view?usp=share_link", "url('/css/assets/BringingUpBaby.jpg')", "Mientras intenta conseguir una donación de un millón de dólares para su museo, un paleontólogo desconcertado es perseguido por una heredera huidiza y a menudo irritante y su leopardo mascota."),
    new Pelicula("Le Cercle Rouge", "7,9", "2h 20min", "1970", "https://drive.google.com/file/d/1K-cDiwcZsMvt6WR17f_NJNv0jGivqE6p/view?usp=share_link", "url('/css/assets/LeCercleRouge.jpg')", "Tras salir de la cárcel, el experto ladrón Corey se cruza en el camino con un conocido prófugo y un antiguo policía alcohólico. Los tres trazarán el plan de un elaborado golpe."),
    new Pelicula("Bring Me the Head of Alfredo Garcia", "7,4", "1h 52min", "1974", "https://drive.google.com/file/d/1x991jOWWl4mSEdaIdHNzuBokxm7pJBGC/view?usp=share_link", "url('/css/assets/BringMeTheHead.jpg')", "Un pianista de bar americano y su novia viajan al submundo mexicano para obtener la recompensa por la cabeza de un gigoló muerto.")
];


function clicked() {
    let randomIndex = Math.floor(Math.random() * peliculas.length);
    let randomMovie = peliculas[randomIndex];
    randomMovie.mostrar();
    img.removeAttribute('src');
    cardMovie.classList.add('background');
}
newPeli.addEventListener("click", clicked);



function recarga(evento) {
    location.reload();
}

p.onclick = recarga;

function cambiarboton() {
    newPeli.value = "¿OTRA?";
}