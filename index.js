window.onload = function () {

var texticon = document.getElementById("design");
const bottompage = document.getElementById("embeded-pdf");


texticon.onclick = function () {
    bottompage.scrollIntoView({ behavior: "smooth" });
}


var projectlink = document.getElementById("projects");
const projects = document.getElementById("selected-works");


projectlink.onclick = function () {
projects.scrollIntoView({ behavior: "smooth" });
}


}