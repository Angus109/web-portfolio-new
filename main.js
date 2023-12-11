//navigtion menu

let element = document.getElementById("nav_links");
        let open_menu = document.getElementById("open_menu");
        let close_menu = document.getElementById("close_menu");
        let header_nav= document.getElementById("header_nav");
        let ancherTag= document.getElementsByClassName("ancherTag2");
        

        open_menu.addEventListener("click", () => {

            if (element.className === "topnav") {
                element.className += " active";
                header_nav.className ="active"

            } else {
                element.className ="topnav"
            }




        });

       
//typing text       


let txt = "I am a passionate and results-driven web developer with over 5 years of experience in designing and developing user-friendly websites and web applications. My goal is to create efficient, visually appealing, and intuitive digital solutions that meet my clients' needs.";
let speed= 50;
i=0;
function typeWriting(){
    if(i < txt.length){
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriting, speed);
    }
}

///card animatiom



//form



function validate(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
     var message=document.getElementById("message");
    var popup= document.getElementById("poppup");
    var popup2= document.getElementById("poppup2")

    if(name.value=="" || email.value=="" || message.value==""){
        popup.innerHTML="input valid details";
       myPoppup();
       return 1;
    }
    else{
        popup2.innerHTML="respon sent sucessful";
        myPoppup2();
        return 1;

    }

}

function myPoppup(){
       var x= document.getElementById("poppup");
       x.className= "show";
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}
function myPoppup2(){
    var x = document.getElementById("poppup2")
    x.className= "show"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}




