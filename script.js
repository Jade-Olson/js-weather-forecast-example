var cityName = [
    "Burbank",
    "Chicago",
    "Dallas"
]
var temps = [
    [23,18,26,17,25,19,24,17],
    [25,16,28,18,19,19,21,20],
    [29,20,27,16,25,18,26,21],
]

var isCelcius = true;

function acceptCookies(){
    document.getElementById("cookieBox").remove();
}

function switchUnits(element){
    if(element.value == "°F"){
        isCelcius = false;
    } else {
        isCelcius = true;
    }
    cityChange(0);
}

function cityChange(idx){
    alert("Loading weather report...")
    document.getElementById("subTitleText").innerText = cityName[idx];

    if(isCelcius == true){
        document.getElementById("HT1").innerText = temps[idx][0] + "°";
        document.getElementById("LT1").innerText = temps[idx][1] + "°";
        document.getElementById("HT2").innerText = temps[idx][2] + "°";
        document.getElementById("LT2").innerText = temps[idx][3] + "°";
        document.getElementById("HT3").innerText = temps[idx][4] + "°";
        document.getElementById("LT3").innerText = temps[idx][5] + "°";
        document.getElementById("HT4").innerText = temps[idx][6] + "°";
        document.getElementById("LT4").innerText = temps[idx][7] + "°";
    } else {
        document.getElementById("HT1").innerText = Math.round(temps[idx][0] * 1.8 + 32) + "°";
        document.getElementById("LT1").innerText = Math.round(temps[idx][1] * 1.8 + 32) + "°";
        document.getElementById("HT2").innerText = Math.round(temps[idx][2] * 1.8 + 32) + "°";
        document.getElementById("LT2").innerText = Math.round(temps[idx][3] * 1.8 + 32) + "°";
        document.getElementById("HT3").innerText = Math.round(temps[idx][4] * 1.8 + 32) + "°";
        document.getElementById("LT3").innerText = Math.round(temps[idx][5] * 1.8 + 32) + "°";
        document.getElementById("HT4").innerText = Math.round(temps[idx][6] * 1.8 + 32) + "°";
        document.getElementById("LT4").innerText = Math.round(temps[idx][7] * 1.8 + 32) + "°";
    }
}