var post = 0;

function postFunction(){
    if(post == 0){
        var text = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML = text;
        post++;
    }else if(post == 1){
        var text = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = " comment1 - " + text;
        post++;
    }else if(post == 2){
        var text = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = " comment2 - " + text;
        post++;
    }
    document.getElementById("text1").value = "";
}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    post = 0;
}
