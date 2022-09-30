document.getElementById("movieButton").addEventListener("click", myFunction);

function myFunction() {
    let theMovieName = document.getElementById("movie").value;
    let theYearReleased = document.getElementById("year").value;

    let theWhyYouLikeit
    document.getElementById("reason").value;
    //const result = divValue.textContent.trim(); alert(result)
    document.getElementById("movieOutput").innerHTML =
        "The Movie Name is " + theMovieName + ".<br> Year Released  " + theYearReleased + ".<br> Why YouLike it? " + theWhyYouLikeit + ".";
}

let text = "Free Flix movie net!";
let result = text.link("https://myflixer.to/movie");
document.getElementById("movie1").innerHTML = result;
result = "<a href='https://myflixer.to/movie'>" + text + "</a>";
document.getElementById("movie2").innerHTML = result;




//Following codes are for  Movies

document
    .getElementById("movieButton")
    .addEventListener("click", movieFunction);

function movieFunction() {
    let theMovieDatabase = document.getElementById("search").value;

    let thefilm = "";
    for (let i = 0; i < theMovieDatabase; i++) {
        for (let j = 0; j <= i; j++) {
            thefilm = thefilm + "*";
        }
        thefilm = thefilm + "<br>";

        document.getElementById("movieOutput").innerHTML = thefilm
    }
    thefilm = "";
}
var arrMovie = new Array();
var arrYear = new Array();
var arrReason = new Array();

function addData() {
    var movie = document.getElementById('movie').value;
    var reason = document.getElementById('reason').value;
    var year = document.getElementById('year').value;
    arrReason[arrReason.length] = reason;
    arrMovie[arrMovie.length] = movie;
    arrYear[arrYear.length] = year;

    document.getElementById('year').value = '';
    document.getElementById('movie').value = '';
    document.getElementById('reason').value = '';
}


function displayData() {
    var content = "<b>Data Entered by User :</b><br>";
    content += [...arrMovie] + "</br>";
    content += [...arrYear] + "</br>";
    content += [...arrReason] + "</br>";

    document.getElementById('display').innerHTML = content;
}

function resetData() {
    arrMovie = new Array();
    arrYear = new Array();
    arrReason = new Array();

    var content = "<b>Reset Movie Entered by User</b><br>";
    document.getElementById('display').innerHTML = content;
}



/**
 * DOM elements
 */
const addTodo = document.getElementById("addTodo");
const input = document.getElementById("userinput");
const todoList = document.getElementById("todoList");

/**
 * Utility functions
 */
const inputLength = () => input.value.length;
const addList = () => inputLength() > 0 && addListElement();
const addListAfterKeypress = (event) => event.keyCode === 13 && addList();
const addDoneToggleToLi = (li) => li.addEventListener("click", toggleDone);
const toggleDone = (event) => event.target.classList.toggle("done");
const deleteTodo = (event) => event.target.parentElement.remove();

/**
 * Functions to add an element to the DOM
 */
const addListElement = () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", toggleDone);
    addDeleteButton(li);
    todoList.appendChild(li);
    input.value = "";
};

const addDeleteButton = (li) => {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
};

/**
 * Runs for all items pre-existing in the list
 * on page load
 *
 * Add event handlers to DOM elements
 */
addTodo.addEventListener("click", addList);
input.addEventListener("keypress", addListAfterKeypress);
todoList.querySelectorAll("li").forEach((li) => addDoneToggleToLi(li));
todoList.querySelectorAll("li").forEach((li) => addDeleteButton(li));

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});