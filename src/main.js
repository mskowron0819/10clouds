document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorText = document.querySelector(".error-message");
    // const successText = document.querySelector(".success-message");
    // const email = document.getElementById("email");
    const name = document.getElementById("name");
    // const surname = document.getElementById("surname");
    // const pass1 = document.getElementById("pass1");
    // const pass2 = document.getElementById("pass2");
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    console.log(form,errorText,name,male,female);
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var formValidation = true;
        var allErrors = [];
        errorText.innerText = "";
        if (name.value.length <= 6){
            allErrors.push("Masz za krótkie imie");
            formValidation = false;
        }
        // if( pass1.value.length > 0 && pass1.value === pass2.value){
        //     console.log("dobre hasła");
        // }else {
        //     allErrors.push("Błędne hasło");
        //     formValidation = false;
        // }
        if(!(male.checked)||!(female.checked)){
            allErrors.push("Zaznacz checkbox");
            formValidation = false;
        }
        if(formValidation === true){
            // successText.innerText = "Udało się wysłać formularz!";
            setTimeout(function () {
                form.submit();
            },2000);
        }else{
            for( var i = 0; i < allErrors.length; i++){
                var p = document.createElement("p");
                p.innerText = allErrors[i];
                errorText.appendChild(p);
            }
        }
    });
    const month = document.getElementById('month');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < months.length; i++) {
        const opt = document.createElement('option');
        opt.setAttribute("value", months[i]);
        opt.innerText = months[i];
        month.appendChild(opt);
        // $('#month').append($("<option></option>").attr("value", months[i]).innerTexttext(months[i]));
    } // select default tab
    // $('.tab[data-value="2"]').addClass('tab_active');

});
