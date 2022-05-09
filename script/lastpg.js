let arr=JSON.parse(localStorage.getItem("details")) || [];

import { navbar,navbar1 } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#vcategorie").innerHTML=navbar1()

let home=()=>{
    window.location.href="index.html"
}
document.querySelector("#vlogo").addEventListener("click",home)



function Register(){
    // show_err();
    var obj={
         firstname : document.getElementById("f_name").value,
         lastname : document.getElementById("l_name").value,
         Login_Username : document.getElementById("user_name").value,
         Email : document.getElementById("email").value,
         Confirm_email : document.getElementById("c_email").value,
         Vendor_name : document.getElementById("vendor_name").value,
         Description : document.getElementById("description").value,
         PAN_No : document.getElementById("pan").value,
         GST_No : document.getElementById("gst").value,
         Contact_No : document.getElementById("contact_no").value
    };
  
 
// let item=0
document.querySelector("#err_div").innerHTML=null
if(obj.PAN_No.length<=9)
{
     alert("Invalid PAN No.")
    
}
    for(let x in obj){


      
   

         
         if(obj[x]=="" ){
            // console.log("hello")
            let para=document.createElement("p");
            para.innerText=`${x} is a required field `
            para.setAttribute("class","required_field")
            document.querySelector("#err_div").append(para);
             
            // item++

        }
        if(obj.firstname.length>0 && obj.lastname.length>0 &&  obj. Login_Username.length >0 &&  obj. Email.length>0 && obj. Confirm_email.length >0 && obj. Vendor_name.length>0 
            && obj. Description.length >0 && obj.PAN_No.length >0 && obj.GST_No.length >0 && obj. Contact_No.length>0 ){
                let para=document.createElement("p");
                para.innerText=`Thanks for Registering`
                para.setAttribute("class","required_field")
                document.querySelector("#err_div").append(para);
                
                var Thanks= document.querySelector("#err_div");
                Thanks.style.backgroundColor="green";
                para.style.color="white"
                break;
           }
       
         
           
    }
    
   
     
    
    
    arr.push(obj)
    
   

    
//     console.log(firstname,lastname);
    localStorage.setItem("details",JSON.stringify(arr))
   

    var data=JSON.parse(localStorage.getItem("details"));
   
   
   
    
   
   
    }
    document.querySelector("#Reg_button").addEventListener("click",Register)
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