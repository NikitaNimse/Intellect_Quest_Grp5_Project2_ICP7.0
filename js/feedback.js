function star(n){

			
    const star1 = document.getElementById('s1');
    const star2 = document.getElementById('s2');
    const star3 = document.getElementById('s3');
    const star4 = document.getElementById('s4');
    const star5 = document.getElementById('s5');
    const rating = document.getElementById('rating');
    

    for( let i=0; i<n; i++){

    if(n==1){
        star1.src = './../Icons/star2.png';
        star2.src = './../Icons/star1.png';
        star3.src = './../Icons/star1.png';
        star4.src = './../Icons/star1.png';
        star5.src = './../Icons/star1.png';
    }

    
    
    else if(n==2){
        star1.src = './../Icons/star2.png';
        star2.src = './../Icons/star2.png';
        star3.src = './../Icons/star1.png';
        star4.src = './../Icons/star1.png';
        star5.src = './../Icons/star1.png';
    }
    

    else if(n==3){
        star1.src = './../Icons/star2.png'
        star2.src = './../Icons/star2.png'
        star3.src = './../Icons/star2.png'
        star4.src = './../Icons/star1.png';
        star5.src = './../Icons/star1.png';
    }

    else if(n==4){

        star1.src = './../Icons/star2.png'
        star2.src = './../Icons/star2.png'
        star3.src = './../Icons/star2.png'
        star4.src = './../Icons/star2.png'
        star5.src = './../Icons/star1.png';

    }

    else {

        star1.src = './../Icons/star2.png'
        star2.src = './../Icons/star2.png'
        star3.src = './../Icons/star2.png'
        star4.src = './../Icons/star2.png'
        star5.src = './../Icons/star2.png'
    }

    rating.innerText = "Rating is: "+n+"/5"
            
        
    }
}


function submit(){

    alert("Do you want to conform Submit feedback ?");
}