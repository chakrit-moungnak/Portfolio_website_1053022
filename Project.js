window.onload = pageLoad;

function pageLoad(){
    var clickbuttonIF = document.getElementById("back");
    clickbuttonIF.onclick = INFO;

    var clickbuttonPF = document.getElementById("Portfolio");
    clickbuttonPF.onclick = Portfolio;
}
function INFO(){
    return true;
}
function Portfolio(){
    return true;
}