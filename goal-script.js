var selectedType = "small";
var selectedColor = "white";

function selectedOwnGate() {
    document.getElementById("gate_own").src = `./img/${selectedColor}-${selectedType}.png`;
}

function chooseType(type) {
    var firstGate = document.querySelector(".gate__first");
    var secondGate = document.querySelector(".gate__second");

    if (type) {
        firstGate.classList.remove("hidden");
        secondGate.classList.add("hidden");
        selectedType = "big";
    } else {
        secondGate.classList.remove("hidden");
        firstGate.classList.add("hidden");
        selectedType = "small";
    }
    selectedOwnGate();
}

function changeColor(typeOfColor) {
    document.getElementById('block-1').src = `./img/${typeOfColor}-small.png`;
    document.getElementById('block-2').src = `./img/${typeOfColor}-big.png`;
    selectedColor = typeOfColor;
    selectedOwnGate();
}