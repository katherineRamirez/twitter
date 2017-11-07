var tuit = function(){
    if(document.getElementById("message").value.length == 0){
        document.getElementById('boton').setAttribute('disabled');
    }else{
        var mensaje = document.getElementById("message").value;
        var tweet = document.getElementById("boton").value;
    }
}
function count_down(obj){
    var element = document.getElementById("count1");
    element.innerHTML = 140 - obj.value.length;

    if (140 - obj.value.length == 130){
        element.style.color = "red";
    } else if(140 - obj.value.length == 120){
        element.style.color = "green";

    } else if(140 - obj.value.length == -1){
        element.style.color = "pink";
    }
    
}