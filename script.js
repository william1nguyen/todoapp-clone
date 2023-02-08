const icon = [ './images/icon-moon.svg', './images/icon-sun.svg' ];
const background_image = [ './images/bg-desktop-light.jpg', './images/bg-desktop-dark.jpg' ];
const box_color = [ 'white', '#312d3e' ]
const color = [ 'white', '#0f0e11' ];
var id_icon = 0;
var id_background_image = 0;
var id_background_color = 0;
var id_text_color = 1;
var id_box_color = 0;
var id_task = 7;

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
    document.getElementById('input').style.color = color[1-id_text_color];
    var els = document.getElementsByTagName('li');
    for (var i = 1; i < els.length; i++) {
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

function completedEvent(id) {
    if (document.getElementById("task" + id).parentElement.style.textDecoration != 'line-through') {
        document.getElementById("task" + id).parentElement.style.textDecoration = 'line-through';
    } else {
        document.getElementById("task" + id).parentElement.style.textDecoration = 'none';
    }
}

function displayAllEvent() {
    els = document.getElementsByTagName('li');
    for (var i = 2; i < els.length - 1; i++) {
        els[i].style.display = 'block';
    }
}

function displayAllActive() {
    els = document.getElementsByTagName('li');
    for (var i = 2; i < els.length - 1; i++) {
        if (els[i].style.textDecoration != 'line-through') {
            els[i].style.display = 'block';
        } else {
            els[i].style.display = 'none';
        }
    }
}

function displayAllCompleted() {
    els = document.getElementsByTagName('li');
    for (var i = 2; i < els.length - 1; i++) {
        if (els[i].style.textDecoration == 'line-through') {
            els[i].style.display = 'block';
        } else {
            els[i].style.display = 'none';
        }
    }
}

function removeAllCompleted() {
    els = document.getElementsByTagName('li');
    for (var i = 2; i < els.length - 1; i++) {
        if (els[i].style.textDecoration == 'line-through') {
            els[i].style.display = 'none';
        }
    }
}

function addEvent() {
    var li = document.createElement('li');
    li.style.backgroundColor = box_color[id_box_color];
    li.style.color = color[id_text_color];
    var input_value = document.getElementById('input').value;
    var event = document.createTextNode(input_value);
    var ip = document.createElement('input');
    ++id_task;
    ip.setAttribute('id', `task${id_task}`);
    ip.setAttribute('type', 'checkbox');
    ip.setAttribute('class', 'checkbox-round');
    ip.setAttribute('onclick' ,`completedEvent(${id_task})`);
    li.appendChild(ip);
    li.appendChild(event);
    if (input_value == '') {
        alert('Write Something');
    } else {
        document.getElementById('task-list').appendChild(li);
    }
    document.getElementById('input').value = '';
}