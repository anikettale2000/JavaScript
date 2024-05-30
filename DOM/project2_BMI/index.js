let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e)
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#results");
    let bmi ='';

    if (height == "" || height < 0 || isNaN(height)) {
        result.innerHTML = `plese Enter a valid height ${height}`;
    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter a valid weight ${weight}`;
    } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`
    }
    
    let divMsg = document.querySelector("#msg");

    if (bmi <= 16) {
        divMsg.innerHTML = `<p>ook</p>`;
    } else if (bmi >= 18 && bmi <= 24) {
        divMsg.innerHTML = `<p>good case</p>`;
    } else if (bmi > 24) {
        divMsg.innerHTML = `<p>Worse case</p>`
    } else {
        divMsg.innerHTML = `<p>Enter proper Height and Weight</p>`
    }
});