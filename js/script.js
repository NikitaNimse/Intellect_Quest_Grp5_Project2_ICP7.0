function darkMode(){
    const imgdark=document.getElementById('img-dark');
    imgdark.classList.add('active');

    const imglight=document.getElementById('img-light');
    imglight.classList.remove('active');

    const bodyelement=document.getElementById('body');
    bodyelement.classList.add('theme-dark');
    const bodylelement=document.getElementById('body');
    bodylelement.classList.remove('theme-light');

}
function lightMode(){
    const imglight=document.getElementById('img-light');
    imglight.classList.add('active');

    const imgdark=document.getElementById('img-dark');
    imgdark.classList.remove('active');

    const bodylelement=document.getElementById('body');
    bodylelement.classList.add('theme-light');
    const bodyelement=document.getElementById('body');
    bodyelement.classList.remove('theme-dark');
    
}
    // timer
    const startingMinutes = 30;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('timer');

    setInterval(Updatecountdown, 1000);


    function Updatecountdown() {
        const min = Math.floor(time / 60);
        let sec = time % 60;

        sec = sec < 10 ? '0' + sec : sec;

        countdownEl.innerHTML = `Time Left: ${ min }: ${ sec }`;
        time--;
    }
    // timer end
    
    // next button 
       
        const nextPageButton = document.getElementById("btn-next");

       
        nextPageButton.addEventListener("click", function () {
           
            window.location.href = "java.html";
        });

        // next button end

        // previous button  

        const previousPageButton = document.getElementById("btn-pre");

       
        previousPageButton.addEventListener("click", function () {
           
            window.location.href = "Data_Analytics.html";
        });

        // previous button  end


    

