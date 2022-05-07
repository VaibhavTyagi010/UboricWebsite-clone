let arr=JSON.parse(localStorage.getItem("details")) || [];

// console.log(arr)
// if(arr==null){
//     arr=[];
// }
// else{
//     arr=JSON.parse(localStorage.getItem("details"));
// }
// let PAN_value=document.getElementById("pan").value;
// let F_Name=document.getElementById("f_name").value;
// let lastname = document.getElementById("l_name").value;
// let Login_User = document.getElementById("user_name").value;
// let Email = document.getElementById("email").value;
// let Confirm_email = document.getElementById("c_email").value;
// let Vendor_name = document.getElementById("vendor_name").value;
// let Description = document.getElementById("description").value;
// let PAN_No = document.getElementById("pan").value;
// let GST_No = document.getElementById("gst").value;
// let Contact_No = document.getElementById("contact_no").value;
// let f_n=document.getElementById("f_n");

// let show_err=()=>{
// document.querySelector("#err_div").innerHTML=null
// arr.map(function(el){
   
   
//     if(el.firstname ==document.getElementById("f_name").value){
//         let para=document.createElement("p");
//         para.innerText=`firstname already exist `
//         para.setAttribute("class","required_field")
//          document.querySelector("#err_div").append(para);
//     }
//   else if(el.Login_Username ==document.getElementById("user_name").value){
//         let para=document.createElement("p");
//         para.innerText=`Login_Username already exist `
//         para.setAttribute("class","required_field")
//          document.querySelector("#err_div").append(para);
//     }
//    else if(el.Email ==document.getElementById("email").value){
//         let para=document.createElement("p");
//         para.innerText=`Email is not valid`
//         para.setAttribute("class","required_field")
//          document.querySelector("#err_div").append(para);
//     }
//    else if(el.Vendor_name ==document.getElementById("vendor_name").value){

//         let para=document.createElement("p");
//         para.innerText=`Vendor_name already exist`
//         para.setAttribute("class","required_field")
//          document.querySelector("#err_div").append(para);
//         }

// });
// }
    


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
        // if(item==0) {
        //     // let para=document.createElement("p");
        //     para.innerText=`Thanks for Registering `
        //     para.setAttribute("class","required_field")
        //     para.style.color="white"
        // document.querySelector("#err_div").append(para);
        //  Thanks.style.backgroundColor="green";
        //  break;
        //  }
         
           
    }
    
   
     
    // break;
    // if(count==10)
    // { show_err()}
    // else
    // alert("Invalid PAN No.")
    
    arr.push(obj)
    
   

    
//     console.log(firstname,lastname);
    localStorage.setItem("details",JSON.stringify(arr))
   
//  window.location.reload();
    var data=JSON.parse(localStorage.getItem("details"));
    // console.log(data[7]);
    // console.log(PAN_value.length)
    // for(let i=0;i<data.length;i++){
    //     if(data[i].PAN_No.length<10 ){
    //         alert("Invalid PAN No.")
    //         break
    //     }
    // }
        
   
   
    
   
   
    }
