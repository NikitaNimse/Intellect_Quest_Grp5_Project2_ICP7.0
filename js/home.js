
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
        mainimg.src="./Images/brain.jpg";

    }
    else if(num==2){
        mainimg.src="./Images/squote2 - Copy (2).webp";
    }
    else if(num==3){
        mainimg.src="./Images/hmpg3.jpeg";
    }
    else if(num==4){
        mainimg.src="./Images/code img.jpg";
    }

}

