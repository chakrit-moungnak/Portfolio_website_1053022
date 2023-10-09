window.onload = pageLoad;

function pageLoad(){
    var clickbuttonIF = document.getElementById("back");
    clickbuttonIF.onclick = INFO;

    var clickbuttonPJ = document.getElementById("Project");
    clickbuttonPJ.onclick = Project;
}
function INFO(){
    return true;
}
function Project(){
    return true;
}