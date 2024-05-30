let btnColors = document.querySelectorAll(".button");
let body = document.querySelector("body");

btnColors.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
        console.log(e); 
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        } else {
            body.style.backgroundColor = "red";
        }
    });
});
