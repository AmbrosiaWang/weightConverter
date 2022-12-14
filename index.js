// conversion formula online

const pounds = document.querySelector(".pounds");
const kilograms = document.querySelector(".kilograms");
const grams = document.querySelector(".grams");
const ounces = document.querySelector(".ounces");
const form = document.querySelector("form");



form.addEventListener("input", convertWeight);

function convertWeight(e){
    if(e.target.classList.contains("pounds")){
        let x = e.target.value;
        kilograms.value =x/2.2046;
        grams.value = x/0.0022046;
        ounces.value = x*16;
    }

    if(e.target.classList.contains("kilograms")){
        let x = e.target.value;
        pounds.value =x*2.2046;
        grams.value = x*1000;
        ounces.value =x*35.274 ;
    }

    if(e.target.classList.contains("grams")){
        let x = e.target.value;
        kilograms.value = x/1000;
        pounds.value = x*0.0022046;
        ounces.value = x*0.035274;
    }

    if(e.target.classList.contains("ounces")){
        let x = e.target.value;
        kilograms.value = x/35.274;
        grams.value = x/0.035274;
        pounds.value = x*0.0625;
    }
}