const lightBox_init = function () {
    createLightBoxHtml();
    declareEvents();
  }
  
  
  
  // מייצר את הטמל של הקוד של לייט בוקס בבאדי
  const createLightBoxHtml = function () {
    document.body.innerHTML += `
    <div id="light_box" class="light_box">
    <div class="inside_box">
      <img src="images/paypal.png" >
      <p>bal bal bal on the picture....</p>
      <button>close</button>
    </div>
    </div>
    `
  }
  
  
  
  const declareEvents = function () {
    // דיבור עם הכפתור סגירה בלייט בוקס
    let close_light_btn = document.querySelector("#light_box button");
    close_light_btn.addEventListener("click", function () {
      document.querySelector("#light_box").style.display = "none"
    })
  
  
    // לייצר רשימה שיש בה את כל התמונות עם אטרביוט
    let imgList = document.querySelectorAll("img[data-img]");
  
    //console.log(imgList);
    // לולאה על כל התמונות
    imgList.forEach(function (itemElem) {
      // גורם שהסמן עכבר יהפוך לאצבע ת
      itemElem.style.cursor = "pointer";
      itemElem.addEventListener("click", function () {
        let light_box = document.querySelector("#light_box");
        // בשביל להציג משתמשים הפעם בפלקס ולא בלוק
        // כדי שהבוקס הפנימי יהיה באמצע
        light_box.style.display = "flex"
        // משנה את מקור התמונה בלייט בוקס למקור של התמונה
        // שלחצנו עליה
        light_box.querySelector("img").src = itemElem.src;
        light_box.querySelector("p").innerHTML = itemElem.alt;
        // alert(itemElem.alt); 
      })
    })
  }
  
lightBox_init();


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