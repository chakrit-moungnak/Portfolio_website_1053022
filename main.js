window.onload = pageLoad;

function pageLoad(){
    var clickbuttonPJ = document.getElementById("Project");
    clickbuttonPJ.onclick = Project;

    var clickbuttonPF = document.getElementById("Portfolio");
    clickbuttonPF.onclick = Portfolio;
}
function Project(){
    return true;
}
function Portfolio(){
    return true;
}