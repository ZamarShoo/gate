
var firstGate = document.querySelector(".gate__first");
var secondGate = document.querySelector(".gate__second");
var chooseTypeOfGate = document.querySelector(".type-selected");
var newDiv = document.createElement('div')

var selectedType = 0;

function chooseType() {
    if (selectedType == 0) {
        firstGate.classList.remove("hidden");
        secondGate.classList.add("hidden");
        selectedType++;
    } else {
        firstGate.classList.add("hidden");
        secondGate.classList.remove("hidden");
        selectedType--;
    }
}
