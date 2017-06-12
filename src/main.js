document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const errorText = document.getElementById('error');
    const successText = document.getElementById('success');
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const gender = document.getElementsByName('gender');
    const btn = document.querySelector('#error button');
    // change color of gender radio input border
    for (let i = 0; i < gender.length; i++){
        gender[i].addEventListener('change', function(){
            (function(radio) {
                const inputs = document.getElementsByName(radio.name);
                for (let i = 0; i < inputs.length; i++){
                    let pick = inputs[i].checked ? '2px solid #1CD4A3' : '2px solid #c1c1c6';
                    inputs[i].parentNode.style.border = pick;
                }
            }(this));
        });
    }
    // month select options
    const month = document.getElementById('month');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    months.map(a=>{
        const opt = document.createElement('option');
        opt.setAttribute("value", a);
        opt.innerText = a;
        month.appendChild(opt);
    });
    // day select options
    const day = document.getElementById('day');
    const days = Array.from({length: 31}, (v,k) => k+1);
    days.map(a=>{
        const opt = document.createElement('option');
        opt.setAttribute("value", a);
        opt.innerText = a;
        day.appendChild(opt);
    });
    // year select options
    let date = new Date();
    let currentYear = date.getFullYear();
    const year = document.getElementById('year');
    const years = Array.from({length: 100}, (v,k) => k+(currentYear -116));
    years.map(a=>{
        const opt = document.createElement('option');
        opt.setAttribute("value", a);
        opt.innerText = a;
        year.appendChild(opt);
    });

    // form validation
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let formValidation = true;
        let allErrors = [];
        // name validation
        if(/\d/g.test(name.value)){
            allErrors.push("Your name cannot contain numbers.");
            formValidation = false;
        }
        if (name.value.length <= 6){
            allErrors.push("Your name is to short.");
            formValidation = false;
        }
        // phone number validation
        if(/[a-zA-Z]+/g.test(phone.value)){
            allErrors.push("Your phone number cannot contain letters.");
            formValidation = false;
        }
        if(phone.value.length < 9){
            allErrors.push("Your phone number must contain at least 9 characters.");
            formValidation = false;
        }
        // gender validation
        let check = false;
        for(let i=0; i<gender.length; i++){
            if(gender[i].checked == true){
                check = true;
            }
        }
        if(!check){
            allErrors.push("Please select your gender.");
            formValidation = false;
        }
        // date of birth validation for safari
        if (!day.value) {
            allErrors.push("Please select day of birth");
            formValidation = false;
        }
        if (!month.value) {
            allErrors.push("Please select month of birth");
            formValidation = false;
        }
        if (!year.value) {
            allErrors.push("Please select year of birth");
            formValidation = false;
        }

        if(formValidation === true){
            const div = document.querySelector("#success div");
            const p = document.createElement("p");
            p.innerText = "Your data was sent successfully";
            div.appendChild(p);
            successText.appendChild(div);
            successText.classList.add('message');
        }else{
            const div = document.querySelector("#error div");
            allErrors.map(a=>{
                const p = document.createElement("p");
                p.innerText = a;
                div.appendChild(p);
                errorText.appendChild(div);
                errorText.classList.add('message');
                btn.addEventListener('click', function () {
                    errorText.classList.remove('message');
                    p.innerText= '';
                })
            });
        }
    });

});
