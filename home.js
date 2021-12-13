"use strict";


// Slider //
let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
  }
  




  // Nav-hängen //
  let logoLeft= document.getElementById('logo-left');
  let logoright= document.getElementById('logo-right');
  window.addEventListener("scroll", ()=>{
    let topU = document.getElementById("topSet").offsetTop;
    let topA = document.getElementById("topA").offsetTop;
    let topC= document.getElementById("welcome-h").offsetTop;
    let nav=document.querySelector(".nav-desktop");

    if(window.scrollY>=topA && window.scrollY<topU){
      nav.classList.add("nav-toggel");
      nav.classList.remove("nav-toggel-1");
      document.getElementById("dropdown-lang").style.position="fixed";
      document.getElementById("dropdown-lang").style.opacity="80%";
      logoLeft.style.display='inherit';
      logoright.style.display='inherit';
    }
    else if (window.scrollY<topA && nav.classList[1]=="nav-toggel"){
      nav.classList.remove("nav-toggel");
      nav.classList.add("nav-toggel-1");
      document.getElementById("dropdown-lang").style.position="absolute";
      document.getElementById("dropdown-lang").style.display="none";
      document.getElementById("dropdown-lang").style.opacity="90%";
      document.getElementById("DE").style.color="#fff";
      document.getElementById("DE-pfeil").style.color="#fff";
      logoLeft.style.display='none';
      logoright.style.display='none';
    }
    else if(window.scrollY<topC){
      nav.classList.remove("nav-toggel-1");
    }
     if(window.scrollY>=topU && nav.classList[1]=="nav-toggel"){
      nav.classList.remove("nav-toggel");
      nav.classList.add("nav-toggel-1");
      document.getElementById("dropdown-lang").style.position="absolute";
      document.getElementById("dropdown-lang").style.display="none";
      document.getElementById("dropdown-lang").style.opacity="90%";
      document.getElementById("DE").style.color="#fff";
      document.getElementById("DE-pfeil").style.color="#fff";
    }
  
   
  }); 




  // ### stern-Bewertung ### // 
  let bewertung_Sterne=0;

  let sterne  =document.getElementsByClassName("sterne");
     
    for(let i=0; i<sterne.length; i++){
      sterne[i].addEventListener("mouseenter", (e)=>{
        if(bewertung_Sterne==0){
        for(let s=0;s<sterne[i].getAttribute("value"); s++){
         sterne[s].style.color="#F8AD00";
         sterne[s].style.fontSize="1.55rem";
        }
      }
      });
    }
 
    for(let i=0; i<sterne.length; i++){
     sterne[i].addEventListener("mouseout", (e)=>{
      if(bewertung_Sterne==0){
       for(let s=0;s<sterne[i].getAttribute("value"); s++){
        sterne[s].style.color="#fff";
        sterne[s].style.fontSize="1.4rem";
       }
      }
     });
   }
   
  for(let i=0; i<sterne.length; i++){
    sterne[i].addEventListener("click", ()=>{
      if(bewertung_Sterne==0){
      for(let s=0;s<sterne[i].getAttribute("value"); s++){
        sterne[s].style.color="#F8AD00";
        sterne[s].style.fontSize="1.55rem";
       }
       bewertung_Sterne=1;
       let pos_1=document.getElementById("sterne-bereich");
       let element_1=document.createElement("div");
       if(sterne[i].getAttribute("value")<=3){
        element_1.innerHTML="<p>Vielen Dank &#128578</p>  <p> Haben Sie Beschwerde oder Anmerkung dann kontaktieren Sie uns <a href=kontakt.html> <i class='fas fa-comments' style='font-size:20px;color:red'></i></a></p>"
       }
       else{
        element_1.innerHTML="<p>Vielen Dank &#128578</p>";    
       }
       element_1.setAttribute("id","newelement");
       pos_1.insertAdjacentElement("afterend",element_1);
      }
    });
  } 




  // google-Maps //
  function initMap() {
    const myLatLng = { lat: 48.798500, lng: 9.217500 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      mapId: 'fb8bad52d574cd2e',
      center: myLatLng,
      mapTypeControl: false,
      streetViewControl: false,


    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Durra Market Stuttgart",
    });
  }

  


  // Button-footer //
  function scoole(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }



   // nav-mobile-hängen //
   window.addEventListener("scroll",()=>{
    let a=document.getElementById("topA").offsetTop;
    let topC= document.getElementById("welcome-h").offsetTop;
    let nav=document.querySelector("nav>.nav-mobile");
    if(window.scrollY>=a){
      document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-v"); 
      document.querySelector("nav>.nav-mobile").classList.add("nav-mobile-r");
      document.getElementById("dropdown-menü").style.position="fixed";
      document.getElementById("dropdown-menü").style.opacity="80%";
    }
    else if(window.scrollY<a && nav.classList[1]=="nav-mobile-r" ){
      document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-r");
      document.querySelector("nav>.nav-mobile").classList.add("nav-mobile-v");
      document.getElementById("dropdown-menü").style.position="absolute";
    }
    else if(window.scrollY<topC){
      document.querySelector("nav>.nav-mobile").classList.remove("nav-mobile-v"); 
    }
 }); 



 // marken-slider //
 let span=document.querySelectorAll("#marken>div>span");
 let div=document.getElementsByClassName("slider-marken-img");
 let x=0;

 span[0].onclick = ()=>{
  x++;
      if(x==0) {div[0].style.marginLeft = "0px";}
      if(x==1) {div[0].style.marginLeft = "-320px";}
      if(x==2) {div[0].style.marginLeft = "-640px";}
      if(x==3) {div[0].style.marginLeft = "-960px";}
      if(x==5) {div[0].style.marginLeft = "-1280px";}
      if(x==6) {div[0].style.marginLeft = "-1600px";}
      if(x==7) {div[0].style.marginLeft = "-1920px";}
      if(x==8) {div[0].style.marginLeft = "-2240px";}
      if(x==9) {div[0].style.marginLeft = "-2560px";}
      if(x==10) {div[0].style.marginLeft = "-2880px";}
      if(x==11) {div[0].style.marginLeft = "-3200px";}
      if(x==12) {div[0].style.marginLeft = "-3520px";}
      if(x==13) {div[0].style.marginLeft = "-3840px";}
      if(x==14) {div[0].style.marginLeft = "-4160px";}
      if(x==15) {div[0].style.marginLeft = "-4480px";}
      if(x==16) {div[0].style.marginLeft = "-4800px";}
      if(x==17) {div[0].style.marginLeft = "-5120px";}
      if(x==18) {div[0].style.marginLeft = "-5440px";}
      if(x>18){x=18;}
    
  }
 

  span[1].onclick = ()=>{
    x--;
    if(x==0) {div[0].style.marginLeft = "0px";}
    if(x==1) {div[0].style.marginLeft = "-320px";}
    if(x==2) {div[0].style.marginLeft = "-640px";}
    if(x==3) {div[0].style.marginLeft = "-960px";}
    if(x==5) {div[0].style.marginLeft = "-1280px";}
    if(x==6) {div[0].style.marginLeft = "-1600px";}
    if(x==7) {div[0].style.marginLeft = "-1920px";}
    if(x==8) {div[0].style.marginLeft = "-2240px";}
    if(x==9) {div[0].style.marginLeft = "-2560px";}
    if(x==10) {div[0].style.marginLeft = "-2880px";}
    if(x==11) {div[0].style.marginLeft = "-3200px";}
    if(x==12) {div[0].style.marginLeft = "-3520px";}
    if(x==13) {div[0].style.marginLeft = "-3840px";}
    if(x==14) {div[0].style.marginLeft = "-4160px";}
    if(x==15) {div[0].style.marginLeft = "-4480px";}
    if(x==16) {div[0].style.marginLeft = "-4800px";}
    if(x==17) {div[0].style.marginLeft = "-5120px";}
        if(x<0) {x=0;}
    }


    // marken-slider-m //
 let spanm=document.querySelectorAll("#marken-m>div>span");
 let divm=document.getElementsByClassName("slider-marken-img-m");
 let a=0;

 spanm[0].onclick = ()=>{
  a++;
      if(a==0) {divm[0].style.marginLeft = "0px";}
      if(a==1) {divm[0].style.marginLeft = "-320px";}
      if(a==2) {divm[0].style.marginLeft = "-640px";}
      if(a==3) {divm[0].style.marginLeft = "-960px";}
      if(a==5) {divm[0].style.marginLeft = "-1280px";}
      if(a==6) {divm[0].style.marginLeft = "-1600px";}
      if(a==7) {divm[0].style.marginLeft = "-1920px";}
      if(a==8) {divm[0].style.marginLeft = "-2240px";}
      if(a==9) {divm[0].style.marginLeft = "-2560px";}
      if(a==10) {divm[0].style.marginLeft = "-2880px";}
      if(a==11) {divm[0].style.marginLeft = "-3200px";}
      if(a==12) {divm[0].style.marginLeft = "-3520px";}
      if(a==13) {divm[0].style.marginLeft = "-3840px";}
      if(a==14) {divm[0].style.marginLeft = "-4160px";}
      if(a==15) {divm[0].style.marginLeft = "-4480px";}
      if(a==16) {divm[0].style.marginLeft = "-4800px";}
      if(a==17) {divm[0].style.marginLeft = "-5120px";}
      if(a==18) {divm[0].style.marginLeft = "-5440px";}
      if(a==19) {divm[0].style.marginLeft = "-5760px";}
      if(a>19){a=19;}
    
  }
 

  spanm[1].onclick = ()=>{
    a--;
    if(a==0) {divm[0].style.marginLeft = "0px";}
    if(a==1) {divm[0].style.marginLeft = "-320px";}
    if(a==2) {divm[0].style.marginLeft = "-640px";}
    if(a==3) {divm[0].style.marginLeft = "-960px";}
    if(a==5) {divm[0].style.marginLeft = "-1280px";}
    if(a==6) {divm[0].style.marginLeft = "-1600px";}
    if(a==7) {divm[0].style.marginLeft = "-1920px";}
    if(a==8) {divm[0].style.marginLeft = "-2240px";}
    if(a==9) {divm[0].style.marginLeft = "-2560px";}
    if(a==10) {divm[0].style.marginLeft = "-2880px";}
    if(a==11) {divm[0].style.marginLeft = "-3200px";}
    if(a==12) {divm[0].style.marginLeft = "-3520px";}
    if(a==13) {divm[0].style.marginLeft = "-3840px";}
    if(a==14) {divm[0].style.marginLeft = "-4160px";}
    if(a==15) {divm[0].style.marginLeft = "-4480px";}
    if(a==16) {divm[0].style.marginLeft = "-4800px";}
    if(a==17) {divm[0].style.marginLeft = "-5120px";}
    if(a==18) {divm[0].style.marginLeft = "-5440px";}
        if(a<0) {a=0;}
    }





// footer-obere-teil //
let erste=document.getElementById("erst");
if(window.innerWidth<=1100){
   let pad=(window.innerWidth/2)-125;
   erste.style.paddingLeft=`${pad}px`;
}
window.addEventListener("resize",()=>{
  if(window.innerWidth<=1100){
    let pad=(window.innerWidth/2)-125;
    erste.style.paddingLeft=`${pad}px`;
 }
 else{
  erste.style.paddingLeft=0;
 }
})

console.log(window.innerWidth)
let as = document.getElementById("ss");
console.log(as.offsetHeight);

