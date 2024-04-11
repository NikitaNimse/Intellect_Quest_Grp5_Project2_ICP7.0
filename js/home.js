
  function updateclock(){
      const date=new Date();
      const timestring= date.toLocaleTimeString();    
      document.getElementById('clock').innerText= timestring;
   }
   setInterval( updateclock,1000);
   updateclock();



   function  changeimg(num){
    const mainimg=document.getElementById('main-prodimg');
    if(num==1){
        mainimg.src="./Images/homepage_img.jpg";

    }
    else if(num==2){
        mainimg.src="./Images/homepgimg2.jpg";
    }
    else if(num==3){
        mainimg.src="./Images/hmpg3.jpeg";
    }
    else if(num==4){
        mainimg.src="./Images/home4.jpeg";
    }

}