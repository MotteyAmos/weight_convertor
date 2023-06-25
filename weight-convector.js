let form = document.querySelector("form"),
    pounds = document.querySelector(".pounds"),
    kilograms = document.querySelector(".kilograms"),
    grams = document.querySelector(".grams"),
    ounces = document.querySelector(".ounces");


form.addEventListener("input", (e)=>{
    if (e.target.classList.contains("pounds")){
        let x = e.target.value;
        kilograms.value = (x * 0.45359).toFixed(3);
        grams.value = (x * 453.592).toFixed(3);
        ounces.value = (x * 16).toFixed(3);
    }
    else if(e.target.classList.contains("kilograms")){
        let x = e.target.value;
        pounds.value = (x * 2.20462).toFixed(3);
        grams.value = (x * 1000).toFixed(3);
        ounces.value = (x * 35.274).toFixed(3);
    }
    else if(e.target.classList.contains("grams")){
        let x  = e.target.value;
        pounds.value = (x * 0.00220462).toFixed(3);
        kilograms.value = (x * 0.001).toFixed(3);
        ounces.value = (x * 0.035274).toFixed(3);
    }
    else if(e.target.classList.contains("ounces")){
        let x = e.target.value;
        pounds.value = (x / 16).toFixed(3);
        kilograms.value = (x / 35.274).toFixed(3);
        grams.value = (x * 28.3495).toFixed(3);
    }
})