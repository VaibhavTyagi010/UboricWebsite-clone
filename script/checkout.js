import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()


// const codevalue= document.querySelector("v_input");
// codevalue.addEventListener("v_button",()=>{
//     let value = document.querySelector("v_input");
//     value.innerHTML=masai
// })

const wrapper= document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn00");
const searchInp = wrapper.querySelector("input");
const Options = wrapper.querySelector(".options");

let countries = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Armenia",
"Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus",
"Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Colombia","Dominica","Ecuador","Egypt","El Salvador",
"Equatorial Guinea","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)",
"Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Japan","Jersey",
"Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait",
"Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
"Lithuania","Luxembourg","Macao","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte",
"Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)",
"Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Portugal",
"Qatar","Russian Federation (the)","South Africa","Spain","Sri Lanka","Sudan (the)","Suriname","Tuvalu","Uganda","Ukraine",
"United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)",
"United States of America (the)","Uzbekistan",];

function addCountries(){
    countries.forEach(country =>{
       // console.log(country)
       let li = `<li onclick="updateName(this)">${country}</li>`
       Options.insertAdjacentHTML("beforeend",li)
    });
}
addCountries()

function updateName(selectedli){
    // console.log(selectedli.innerText)
    selectBtn.firstElementChild.innerText=selectedli.innerText;
}
searchInp.addEventListener("keyup",()=>{
    let arr =[];
    let SrhValue = searchInp.value.toLowerCase();
    arr= countries.filter(data=>{
        return data.toLowerCase().startsWith(SrhValue);
    })
console.log(arr)
});


selectBtn.addEventListener("click",()=>{
    wrapper.classList.toggle("active");
})

document.querySelector("#last2222").addEventListener("click", finle)
function finle(){
    window.location.href="reserve.html"
}

