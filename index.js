/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




let input = document.getElementById("input-field").value = 0
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const convertBtn = document.getElementById("convert-btn")


function converter(){
    let input = document.getElementById("input-field").value;


    let m = input* 0.305
    let ft =  input * 3.281
    let l = input * 3.785
    let gl = input * 0.264
    let kg = input * 0.454
    let pd = input * 2.204

    lengthEl.textContent = `${input} meters = ${ft.toFixed(2)} feet | ${input} feet =  ${m.toFixed(2)} meters`
    volumeEl.textContent = `${input} liters = ${gl.toFixed(2)} gallons | ${input} gallons =  ${l.toFixed(2)} liters`
    massEl.textContent = `${input} kilos = ${pd.toFixed(2)} pounds | ${input} pounds =  ${kg.toFixed(2)} kilos`

}
//convertedValue = converter()


convertBtn.addEventListener("click", converter)
convertBtn.document.querySelector('#txtSearch').addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
        event.preventDefault();
        converter
    }
  });

