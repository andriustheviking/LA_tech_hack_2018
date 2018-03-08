


document.addEventListener("DOMContentLoaded", function(event){
    dispWindow = "pre";
    initDisplay();
    
    

});


function initDisplay(){
    document.getElementById("preInterview").style.display = "block";
    document.getElementById("postInterview").style.display = "none";

    var outputArr = document.getElementsByClassName("dataOutput");

    for (var i = 0 ; i < outputArr.length; i++){
        outputArr[i].innerHTML = "";
    }

}

function showHideData(event){
        if (dispWindow === "pre"){
            document.getElementById("preInterview").style.display = "none";
            document.getElementById("postInterview").style.display = "block";
            dispWindow = "post";
        }

        else if (dispWindow === "post"){
            document.getElementById("preInterview").style.display = "block";
            document.getElementById("postInterview").style.display = "none";
            dispWindow = "pre";
        }
            
}




