const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click', function() {
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener('click', function() {
    sideMenu.classList.remove('active')
})

// load up the the iframe with the data the user selected
$('#thumbnail1').attr("src", "/Custom/Data/" + data.id);

// I can get find the body tag in the iframe like:
var iframeBody = $(".small-thumbnail1").contents().find("body");

var styleTag = iframeBody.append($('.myimage'));