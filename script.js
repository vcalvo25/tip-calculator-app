const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipButtons = document.querySelectorAll(".select-tip button");
const customTip = document.getElementById("custom-tip");

let currentTip = 0;

billInput.addEventListener("input", () => calculateTip(currentTip));
peopleInput.addEventListener("input", () => calculateTip(currentTip));

tipButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {

    tipButtons.forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");

    let text = e.target.innerText.replace("%", "");
    currentTip = parseFloat(text) / 100;

    calculateTip(currentTip);
  });
});

customTip.addEventListener("input", () => {
  currentTip = parseFloat(customTip.value) / 100 || 0;
  tipButtons.forEach(b => b.classList.remove("active"));
  calculateTip(currentTip);
});

function calculateTip(tipPercent){
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;
    tipPercent = tipPercent || 0;

    if (people <= 0 || bill <= 0 || !tipPercent){
        document.getElementById("tipAmount").innerHTML = "0.00";
        document.getElementById("totalPerson").innerHTML = "0.00"
        return;
    }

    const tipPerPerson = (bill * tipPercent) / people;
    const totalPerPerson = (bill + (bill * tipPercent)) / people;

    document.getElementById("tipAmount").innerHTML = tipPerPerson.toFixed(2);
    document.getElementById("totalPerson").innerHTML = totalPerPerson.toFixed(2);

};

