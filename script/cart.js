import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let home=()=>{

    window.location.href="index.html"
}
document.querySelector("#vlogo").addEventListener("click",home)
import {quantity_div} from "../component/common.js"
// console.log(quantity_div())
let cart1=JSON.parse(localStorage.getItem("cart"))||[]
console.log(cart1)
document.querySelector("#vvalue").innerText=cart1.length
// console.log(cart1)

start()
function start() {
    let id;
    let col=["#ee7752","#e73c7e","#23a6d5","#23d5ab"]
    let i=0

    let div=document.querySelector("#r_items>div:first-child")

    // div.style.backgroundColor="green"
    id=setInterval(()=>{
        if(i==col.length){
            i=0;
        }
        div.style.backgroundColor=col[i]
        i++;
    },1000)

}
// function stop(){
//     clearInterval(id)
// }

// stop()
function getEl(id){
    return document.getElementById(id)
}

// collect data from local storage and append the data id r_data
let data= JSON.parse(localStorage.getItem("cart"))
//  console.log(data)
let total_price=0;
function appendData(data) {
    console.log(data)
    data.forEach(({image,name,total_reviews},index)=>{
        let price
        let str=total_reviews.toString()
        if(str.length>4)
        {
       let num=str[0]+str[1]+str[2]+str[3]
        price=+num
        }
        else
        price=total_reviews
        let main=document.createElement("div")



        let col1=document.createElement("div")
        col1.id="r_col1"
        let cancel=document.createElement("div")
        cancel.id="r_cancel";
        cancel.innerText="X"
        cancel.addEventListener("click",()=>{
            remove(data,index)
        })
        let img=document.createElement("img")
        img.id="r_img";
        img.src=image;
        col1.append(cancel,img)
        let pName=document.createElement("p")
        pName.id="r_col2"
        let pPrice=document.createElement("p")
        pPrice.id="r_col3"
        pName.innerText=name;
        pPrice.innerText=price;
        let col4=document.createElement("div")
        col4.className="r_inQuntity";
        // col4.innerHTML=quantity_div();
        let dec=document.createElement("div")
        let qunt=document.createElement("div")
        let inc=document.createElement("div")
        dec.id="minus"
        dec.innerText="-"
        qunt.id="r_in"
        inc.id="plus"
        inc.innerText="+"
        let r_inp= document.createElement("input")
        r_inp.type="text"
        r_inp.id="r_number"
        r_inp.value=1
        dec.addEventListener("click",()=>{
            // console.log(r_inp.value)
            r_inp.value--
            col5.innerText=price*r_inp.value;
            total_price-=price
            document.getElementById("pp").innerText=total_price
            if(Number(r_inp.value)<=0){
                remove(data,index)
            }

        });
        inc.addEventListener("click",()=>{
            // console.log(r_inp.value)
            r_inp.value++
            col5.innerText=price*r_inp.value;
            total_price+=price
            document.getElementById("pp").innerText=total_price
            if(Number(r_inp.value)<=0){
                remove(data,index)
            }

        });
        r_inp.addEventListener("input",()=>{
            col5.innerText=price*r_inp.value;
            total_price=ram_total(document.querySelectorAll("#r_col5"))
            document.getElementById("pp").innerText=total_price
            if(Number(r_inp.value)<=0){
                remove(data,index)
            }


        });

        qunt.append(r_inp)
        col4.append(dec,qunt,inc)

        let col5=document.createElement("p")
        col5.id="r_col5"
        col5.innerText=price*r_inp.value;
        //collect from local storage
        total_price+=Number(col5.innerText)
        document.getElementById("pp").innerText=total_price
        let hr=document.createElement("hr")
        main.append(col1,pName,pPrice,col4,col5)
        document.getElementById("r_data").append(main,hr)


        // console.log(document.querySelectorAll("#r_col5"))




    })

};

function remove(data,index){
    event.preventDefault()
    console.log(index)
    document.getElementById("r_pop").innerText=`Remove ${data[index].name} from cart`;
    document.getElementById("r_pop").style.display="block"
    data.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(data))
// <<<<<<< HEAD
    // window.location.reload()
// =======
    window.location.reload()
// >>>>>>> 299271ccf4f4538b586c47b9c56985b479141cfd
}
appendData(data)
// let quantity=JSON.parse(localStorage.getItem("qnt")) || 0
// let minuS=document.querySelectorAll("#minus")
// for(let x of minuS){
//     console.log(x)
//     x.addEventListener("click",()=>{
//         quantity--;
//         console.log(x.id,quantity)
//     })
// }

// document.getElementById("r_number").addEventListener("click",()=>{
//     quantity++;
//     // console.log(quantity)
// })

function ram_total(data){
    let total=0
    for(let i=1; i<data.length; i++){
        total+=Number(data[i].innerText)
    }
    return total
    // console.log(total)
}
document.getElementById("update").addEventListener("click",()=>{
    window.location.reload()
})
document.getElementById("proceedFun").addEventListener("click",()=>{

    localStorage.setItem("subtotal",total_price)
    window.location.href="../checkout.html"// connect with next page checkout page

})
document.querySelector("#signinButton").addEventListener("click",logIn)
function logIn()
{
event.preventDefault()
let arr=JSON.parse(localStorage.getItem("sing_data"))||[]
let name=document.querySelector("#signinEmail").value
let ans=false
  arr.map(function(ele)
  {
      if(ele.name==name)
      {
          ans=true
      }
  })
  if(ans)
  {
      alert("logIn successful")
  }
  else
  alert("wrong details")
}