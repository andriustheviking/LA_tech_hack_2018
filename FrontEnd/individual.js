document.addEventListener("DOMContentLoaded", function(event){
    dispWindow = "pre";
    dispWindowPost = "prePost";
    dispPage = "individual";
    initDisplay();
    initDescriptions();
    initCharts();
    
    

});


function initDisplay(){
    document.getElementById("preInterview").style.display = "block";
    document.getElementById("postInterview").style.display = "none";
    document.getElementById("preInterviewSummary").style.display = "block";
    document.getElementById("postInterviewSummary").style.display = "none";

    var outputArr = document.getElementsByClassName("dataOutput");

    for (var i = 0 ; i < outputArr.length; i++){
        outputArr[i].innerHTML = "";
    }

}

function showHideData(event){
        if (dispWindow === "pre" ){
            document.getElementById("preInterview").style.display = "none";
            document.getElementById("postInterview").style.display = "block";
            dispWindow = "post";
        }

        else if (dispWindow === "post"){
            document.getElementById("preInterview").style.display = "block";
            document.getElementById("postInterview").style.display = "none";
            dispWindow = "pre";
        }

        else if (dispWindowPost === "prePost"){
            document.getElementById("preInterviewSummary").style.display = "none";
            document.getElementById("postInterviewSummary").style.display = "block";
            dispPage = "postPost";
        }
    
        else if (dispWindowPost === "postPost"){
            document.getElementById("preInterviewSummary").style.display = "block";
            document.getElementById("postInterviewSummary").style.display = "none";
            dispPage = "postPost";
        }
            
}




function showHidePages(event){
    if (dispPage === "individual"){
        document.getElementById("individual").style.display = "none";
        document.getElementById("summary").style.display = "block";
        dispPage = "summary";
    }

    else if (dispPage === "summary"){
        document.getElementById("individual").style.display = "block";
        document.getElementById("summary").style.display = "none";
        dispPage = "individual";
    }

        
}


function initDescriptions(event){
    
    //Initialize descriptions for pre-interview charts
    
    var pie1 = "Chart 1";
    var pie2 = "Chart 2";
    var pie3 = "Chart 3";
    var pie4 = "Chart 4";
    var pie5 = "Chart 5";
    desArr = [pie1, pie2, pie3, pie4, pie5];

    document.getElementById("sumDescPre").innerHTML = desArr[0];

    //Initialize descriptions for post-interview charts
    var pie6 = "Chart 6";
    var pie7 = "Chart 7";
    var pie8 = "Chart 8";
    var pie9 = "Chart 9";
    var pie10 = "Chart 10";
    desArrPost = [pie6, pie7, pie8, pie9, pie10];
    document.getElementById("sumDescPost").innerHTML = desArrPost[0];
 
    


}


//Basic Function that will hide all the videos on the page, except the first one
function initCharts(event)
{

    //Get an Array of all existing videos
    chartArr = document.getElementsByClassName("chart");
    chartArrPost = document.getElementsByClassName("chart2");
    
    //Initialize a variable i (to be used in the for loop below) to zero
    var i = 0;

    //debugger;
    //Initialize the current chart index - this variable will be used in the nextChart and prevChart functions
    currChart = 0;
    currChartPost = 0; 

    //Use a for loop to hide all charts except the first chart in the array (the chart at index 0)
    for (i = 0; i < chartArr.length; i++){

        if (i===0){

            chartArr[i].style.display = "block";
            chartArrPost[i].style.display = "block";
        }
        else{
            chartArr[i].style.display = "none";
            chartArrPost[i].style.display = "none";
        }
        
    }

    // event.stopPropagation();
}



function nextChart(event){
    //debugger;

    //hide the current chart
    chartArr[currChart].style.display = "none";
    //update the current chart index to the nextchart. 
    //currChart variable is declared in the initCharts function()
    currChart++;

    //but if we have reached the last chart, reset the currChart index to zero
    if (currChart >= chartArr.length){
        currChart = 0;
    }

    //now display the next chart
    chartArr[currChart].style.display = "block";

    //now update the description for the video
    document.getElementById("sumDescPre").innerHTML = desArr[currChart];

    //stop propagation
    //event.stopPropagation();
}

function nextChartPost(event){
    //debugger;

    //hide the current chart
    chartArrPost[currChartPost].style.display = "none";
    //update the current chart index to the nextchart. 
    //currChart variable is declared in the initCharts function()
    currChartPost++;

    //but if we have reached the last chart, reset the currChart index to zero
    if (currChartPost >= chartArrPost.length){
        currChartPost = 0;
    }

    //now display the next chart
    chartArrPost[currChartPost].style.display = "block";

    //now update the description for the video
    document.getElementById("sumDescPost").innerHTML = desArrPost[currChartPost];

    //stop propagation
    //event.stopPropagation();
}




function prevChart(event){
    //debugger;

    //hide the current chart
    chartArr[currChart].style.display = "none";

    //update the current chart index to the nextchart. 
    //currChart variable is declared in the initCharts function()
    currChart--;

    //but if we have reached the last chart, reset the currChart index to zero
    if (currChart < 0){
        currChart = chartArr.length -1 ;
    }

    //now display the next chart
    chartArr[currChart].style.display = "block";

    //now update the description for the video
    document.getElementById("sumDescPre").innerHTML = desArr[currChart];

    //stop propagation
    //event.stopPropagation();
}




function prevChartPost(event){
    //debugger;

    //hide the current chart
    chartArrPost[currChartPost].style.display = "none";
    //update the current chart index to the nextchart. 
    //currChart variable is declared in the initCharts function()
    currChartPost--;

    //but if we have reached the last chart, reset the currChart index to zero
    if (currChartPost < 0){
        currChartPost = chartArrPost.length-1;
    }

    //now display the next chart
    chartArrPost[currChartPost].style.display = "block";

    //now update the description for the video
    document.getElementById("sumDescPost").innerHTML = desArrPost[currChartPost];

    //stop propagation
    //event.stopPropagation();
}





