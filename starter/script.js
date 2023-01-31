//use moment.js to add current date
$(window).ready(function () {
    var day = moment().format('dddd MMM Do');
    $("#currentDay").text(day);
    generateTimeBlock();
    loadSavedEvent();
});

function generateTimeBlock() {
    let htmlText = "";
    for (let i = 0; i < timeBlock.length; i++) {
        htmlText += "<div class='grid-item'>" + timeBlock[i] + "</div>";
        htmlText += "<div class='grid-item'>";
        htmlText += "<textarea id='" + timeBlock[i] + "'></textarea>";
        htmlText += "</div>";
        htmlText += "<div class='grid-item'>";
        htmlText += "<button class='saveBtn' onclick='saveEvent(\"" + timeBlock[i] + "\")'>Save</button>";
        htmlText += "</div>";
    }
    $(".container").html(htmlText);
}

// function for saving event by clicking the save button
function saveEvent(eventId) {

    saveToStorage(eventId,$("#" + eventId).val());
    console.log($("#" + eventId).val());
}

// function for load saved event
function loadSavedEvent(){

    getFromStorage()
}

// function for geting local storage content
function getFromStorage(key) {
    // localStorage.getItem("1PM")
    return JSON.parse(localStorage.getItem(key));
}

// function for saving local storage content
function saveToStorage(key, content) {
    //localStorage.setItem("1PM", "Meeting with me");
    localStorage.setItem(key, JSON.stringify(content));
}