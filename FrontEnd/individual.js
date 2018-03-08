document.addEventListener("DOMContentLoaded", function(event){
    dispWindow = "pre";
    initDisplay();
    initDescriptions();
    initCharts();
    
    

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


function initDescriptions(event){
    var pie1 = "Chart 1";
    var pie2 = "Chart 2";
    var pie3 = "Chart 3";
    var pie4 = "Chart 4";
    var pie5 = "Chart 5";
    desArr = [pie1, pie2, pie3, pie4, pie5];
 
    document.getElementById("sumDescPre").innerHTML = desArr[0];
}


//Basic Function that will hide all the videos on the page, except the first one
function initCharts(event)
{

    //Get an Array of all existing videos
    chartArr = document.getElementsByClassName("chart");

    
    //Initialize a variable i (to be used in the for loop below) to zero
    var i = 0;

    //debugger;
    //Initialize the current chart index - this variable will be used in the nextChart and prevChart functions
    currChart = 0; 

    //Use a for loop to hide all charts except the first chart in the array (the chart at index 0)
    for (i = 0; i < chartArr.length; i++){

        if (i===0){

            chartArr[i].style.display = "block";
        }
        else{
            chartArr[i].style.display = "none";
        }
        
    }

    // event.stopPropagation();
}



function nextVideo(event){
    //debugger;

    //hide the current chart
    chartArr[currChart].style.display = "none";

    //update the current chart index to the nextchart. 
    //currChart variable is declared in the initCharts function()
    currChart++;

    //but if we have reached the last video, reset the currVid index to zero
    if (currVid >= vidArr.length){
        currVid = 0;
    }

    //now display the next video
    vidArr[currVid].style.display = "block";

    //now update the description for the video
    document.getElementById("fillDes").innerHTML = desArr[currVid];

    //stop propagation
    //event.stopPropagation();
}





