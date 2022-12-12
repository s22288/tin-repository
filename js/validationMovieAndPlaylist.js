function validateForm() {
    debugger;
    console.log("Validating form...");
    const movieChoose = document.getElementById("movieChoose");
    const errorMovieChoose = document.getElementById("errorMovieChoose");
    const playlistChoose = document.getElementById("playlistChoose");
    const errorPlaylistChoose = document.getElementById("errorPlaylistChoose");
    const commetn = document.getElementById("comment");
    const numberOnPlaylist = document.getElementById("numberOnPlaylist");
    const errorComment = document.getElementById("errorComment");
    const errorNumberOnPlaylist = document.getElementById("errorNumberOnPlaylist");

    let valid = true;

    if (!movieChoose?.value) {
        valid = false;
        console.log("errorMovieChoose");
        movieChoose.classList.add("error-input");
        errorMovieChoose.innerText = "Pole jest wymagane";
    }
    if (!playlistChoose?.value) {
        valid = false;
        console.log("errorPlaylistChoose");
        playlistChoose.classList.add("error-input");
        errorPlaylistChoose.innerText = "Pole jest wymagane";
    }

    if (!commetn?.value) {
        valid = false;
        console.log("errorComment");
        commetn.classList.add("error-input");
        errorComment.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(commetn.value, 2, 60)) {
        valid = false;
        console.log("errorComment");
        commetn.classList.add("error-input");
        errorComment.innerText = " Pole powinno zawierać od 2 do 60 znaków";
    }
    if (!numberOnPlaylist?.value) {
        valid = false;
        console.log("errorNumberOnPlaylist");
        numberOnPlaylist.classList.add("error-input");

        errorNumberOnPlaylist.innerText = "Pole jest wymagane";
    }
    else if (!checkIfValueisNumber(numberOnPlaylist.value)) {
        valid = false;
        console.log("errorNumberOnPlaylist");
        numberOnPlaylist.classList.add("error-input");
        errorNumberOnPlaylist.innerText =

            "pole powinno zawierać tylko cyfry";
    }
    else if (!maxLengthCheck(numberOnPlaylist.value, 0, 1000)) {
        valid = false;
        console.log("errorNumberOnPlaylist");
        numberOnPlaylist.classList.add("error-input");

        errorNumberOnPlaylist.innerText = "wartośc od 0 do 1000";
    }





    return valid;
}
function checkIfDateisCorrect(date) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    return regex.test(date);
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

