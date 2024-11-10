
function declareBtns(){
    let burger_btn = document.querySelector("#burger_btn");
    let nav_open = document.querySelector("#nav_open");
    burger_btn.addEventListener("click",function(){
      //
      (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
      // if(nav_open.style.display != "block"){
      //   nav_open.style.display = "block";
      // }
      // else{
      //   nav_open.style.display = "none";
      // }
    })
  }
  
  declareBtns();


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }