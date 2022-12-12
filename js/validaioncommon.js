function validateForm() {

    console.log("Validating form...");

    const movieName = document.getElementById("moviename");
    const movieLength = document.getElementById("movieLength");
    const movieRank = document.getElementById("rating");
    const linkToMovie = document.getElementById("linktomovie");
    const linkToPhoto = document.getElementById("linktophoto");


    const errorMovieName = document.getElementById("errorMovieName");
    const errorMovieLength = document.getElementById("errorMovieLength");
    const errorMovieRank = document.getElementById("errorRating");
    const errorLinkToMovie = document.getElementById("errorLinkToMovie");
    const errorLinkToPhoto = document.getElementById("errorLinkToPhoto");


    const playlistName = document.getElementById("title");
    const errorPlaylistName = document.getElementById("errorTitlePlaylist");
    const playlistLenght = document.getElementById("playlistlenght");
    const errorPlaylistLenght = document.getElementById("errorPlaylistLength");
    const playlistRating = document.getElementById("Playlistrating");
    const errorPlaylistRating = document.getElementById("errorRatingPlaylist");
    const playlistCreateDate = document.getElementById("createDate");
    const errorPlaylistCreateDate = document.getElementById("erroCreateDate");
    // resetErrors([movieName, movieLength, movieRank, linkToMovie, linkToPhoto], [errorMovieName, errorMovieLength, errorMovieRank, errorLinkToMovie, errorLinkToPhoto]);


    console.log({ value: movieName.value });

    let valid = true;

    if (!movieName?.value) {
        valid = false;
        console.log("errorMovieName");

        movieName.classList.add("error-input");
        errorMovieName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(movieName.value, 2, 60)) {
        valid = false;

        console.log("errorMovieName");
        movieName.classList.add("error-input");
        errorMovieName.innerText = " Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!movieLength?.value) {
        valid = false;
        console.log("errorMovieLength");

        movieLength.classList.add("error-input");
        errorMovieLength.innerText = "Pole jest wymagane";
    }
    else if (!checkIfValueisNumber(movieLength.value)) {
        valid = false;
        console.log("errorMovieLength");
        movieLength.classList.add("error-input");
        errorMovieLength.innerText =
            "pole powinno zawierać tylko cyfry";
    }
    else if (!maxLengthCheck(movieLength.value, 0, 10000)) {
        valid = false;
        console.log("errorMovieLength");
        movieLength.classList.add("error-input");
        errorMovieLength.innerText = "film powinnien trwać od 0 do 10000 minut";

    }
    if (!movieRank?.value) {
        valid = false;
        console.log("errorMovieRank");

        movieRank.classList.add("error-input");
        errorMovieRank.innerText = "Pole jest wymagane";
    }
    else if (!maxLengthCheck(movieRank.value, 0, 5)) {
        valid = false;
        console.log("errorMovieRank");
        movieRank.classList.add("error-input");
        errorMovieRank.innerText = "ocena powinna być od 0 do 5";
    }
    if (!linkToMovie?.value) {
        valid = false;
        console.log("errorLinkToMovie");

        linkToMovie.classList.add("error-input");
        errorLinkToMovie.innerText = "Pole jest wymagane";
    }
    else if (!checkIfLinkIsValid(linkToMovie.value)) {
        valid = false;
        console.log("errorLinkToMovie");
        linkToMovie.classList.add("error-input");
        errorLinkToMovie.innerText = "link powinien być poprawny";
    }
    if (!linkToPhoto?.value) {
        valid = false;
        console.log("errorLinkToPhoto");

        linkToPhoto.classList.add("error-input");
        errorLinkToPhoto.innerText = "Pole jest wymagane";
    }
    else if (!checkIfLinkIsValid(linkToPhoto.value)) {
        valid = false;
        console.log("errorLinkToPhoto");
        linkToPhoto.classList.add("error-input");
        errorLinkToPhoto.innerText = "link powinien być poprawny";
    }
    // playlist

    if (!playlistName?.value) {
        valid = false;
        console.log("errorPlaylistName");

        playlistName.classList.add("error-input");
        errorPlaylistName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(playlistName.value, 2, 60)) {
        valid = false;

        console.log("errorPlaylistName");
        playlistName.classList.add("error-input");
        errorPlaylistName.innerText = " Pole powinno zawierać od 2 do 60 znaków";
    }


    console.log(movieName.classList);
    return valid;
}
function resetErrors(inputs, errors, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");

    }
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerText = "";

    }
    errorInfo.innerText = "";
}
function checkIfLinkIsValid(link) {
    const regex = /^(http|https):\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    return regex.test(link);
}
function maxLengthCheck(object, min, max) {
    return object >= min && object <= max;

}
function checkIfValueisNumber(value) {
    const regex = /^[0-9]+$/;
    return regex.test(value);
}


function checkTextLengthRange(value, min, max) {
    const length = value.length;
    return length >= min && length <= max;
}


