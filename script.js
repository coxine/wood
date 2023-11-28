var music = document.getElementById("woodMusic");

function unmuteAndPlay() {
    music.muted = false;
    music.play();
}
document.addEventListener("click", unmuteAndPlay);
