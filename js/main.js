/**
 * file: main.js
 * author: pleb
 *
 * main js file for the stupid fucking timer
 */

$(document).ready(function() {
    console.log("document loaded and ready to rock");
    let totals = getTotals();
    console.log(totals.questions + ":" + totals.time);
});

function getTotals() {
    return {
        questions: parseInt($("#questionTotal").val(), 10),
        time: parseInt($("#timeTotal").val(), 10)
    }
}

class clock {
    constructor(name, currentTime) {
        this.name = name;
        this.currentTime = currentTime;
    }
}

