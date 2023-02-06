const icon = [ './images/icon-moon.svg', './images/icon-sun.svg' ];
const background_image = [ './images/bg-desktop-light.jpg', './images/bg-desktop-dark.jpg' ];
const box_color = [ 'white', '#312d3e' ]
const color = [ 'white', '#0f0e11' ];
var id_icon = 0;
var id_background_image = 0;
var id_background_color = 0;
var id_text_color = 1;
var id_box_color = 0;

function changeIconTheme() {
    document.getElementById('theme-icon').src=icon[1-id_icon];
    id_icon = 1-id_icon;
}
 
function changeBackground() {
    document.body.style.backgroundImage = `url(${background_image[1-id_background_image]})`;
    id_background_image = 1-id_background_image;

    document.body.style.backgroundColor = color[1-id_background_color];
    id_background_color = 1-id_background_color;
}

function changeBoxColor() {
    var els = document.getElementsByClassName('box');
    for (var i = 0; i < els.length; i++) {
        els[i].style.color = color[1-id_text_color];
        els[i].style.backgroundColor = box_color[1-id_box_color];
    }
    id_text_color = 1-id_text_color;
    id_box_color = 1-id_box_color;
}

function changeTheme() {
    changeIconTheme();
    changeBackground();
    changeBoxColor();
}
