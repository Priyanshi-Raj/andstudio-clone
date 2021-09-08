
         const texts=document.querySelector(".animate-text").children,
               textsLen=texts.length;
           let index=0;
          const textInTimer=3000,
                textOutTimer=2800;

         function animateText() {
            for(let i=0; i<textsLen; i++){
              texts[i].classList.remove("text-in","text-out");  
            }
            texts[index].classList.add("text-in");

            setTimeout(function(){
                texts[index].classList.add("text-out");              
            },textOutTimer)

            setTimeout(function(){

              if(index == textsLen-1){
                  index=0;
                }
               else{
                   index++;
                 }
                animateText();
            },textInTimer); 
         }
         
         window.onload=animateText;
   
