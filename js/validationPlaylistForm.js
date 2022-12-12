function validateForm() {

    console.log("Validating form...");

    const playlistName = document.getElementById("title");
    const errorPlaylistName = document.getElementById("errorTitlePlaylist");
    const playlistLenght = document.getElementById("playlistlenght");
    const errorPlaylistLenght = document.getElementById("errorPlaylistLength");
    const playlistRating = document.getElementById("Playlistrating");
    const errorPlaylistRating = document.getElementById("errorRatingPlaylist");
    const playlistCreateDate = document.getElementById("createDate");
    const errorPlaylistCreateDate = document.getElementById("erroCreateDate");

    let valid = true;


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

    if (!playlistLenght?.value) {
        valid = false;
        console.log("errorPlaylistLenght");

        playlistLenght.classList.add("error-input");
        errorPlaylistLenght.innerText = "Pole jest wymagane";
    }
    else if (!checkIfValueisNumber(playlistLenght.value)) {
        valid = false;
        console.log("errorPlaylistLenght");
        playlistLenght.classList.add("error-input");
        errorPlaylistLenght.innerText =
            "pole powinno zawierać tylko cyfry";
    }
    else if (!maxLengthCheck(playlistLenght.value, 0, 1000)) {
        valid = false;
        console.log("errorPlaylistLenght");
        playlistLenght.classList.add("error-input");
        errorPlaylistLenght.innerText =
            "pole powinno zawierać od 0 do 1000";
    }
    if (!playlistRating?.value) {
        valid = false;
        console.log("errorPlaylistRating");

        playlistRating.classList.add("error-input");
        errorPlaylistRating.innerText = "Pole jest wymagane";
    }
    else if (!checkIfValueisNumber(playlistRating.value)) {
        valid = false;
        console.log("errorPlaylistRating");
        playlistRating.classList.add("error-input");
        errorPlaylistRating.innerText =

            "pole powinno zawierać tylko cyfry";
    }
    else if (!maxLengthCheck(playlistRating.value, 0, 5)) {
        valid = false;
        console.log("errorPlaylistRating");
        playlistRating.classList.add("error-input");
        errorPlaylistRating.innerText =
            "pole powinno zawierać od 0 do 5";

    }
    if (!playlistCreateDate?.value) {
        valid = false;
        console.log("errorPlaylistCreateDate");

        playlistCreateDate.classList.add("error-input");
        errorPlaylistCreateDate.innerText = "Pole jest wymagane";

    }
    else if (!checkIfDateisCorrect(playlistCreateDate.value)) {
        valid = false;
        console.log("errorPlaylistCreateDate");
        playlistCreateDate.classList.add("error-input");
        errorPlaylistCreateDate.innerText =
            "pole powinno zawierać datę w formacie dd/mm/yyyy";
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

