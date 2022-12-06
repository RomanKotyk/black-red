let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = 0;
let red = 0;
let black = 0;
let click = 0;


btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
}

document.onkeypress = function(event){
  
    if(event.key == '0' && red%2==0){
      if(number>=1300){
        number = 0 + Math.random()*15;
        container.style.transform = "rotate(" + number + "deg)";
        
        red ++;
        click++;
        } else{
        number = 2520 + Math.random()*15;
        container.style.transform = "rotate(" + number + "deg)";
        
        red ++;
        click++;
        }
        
    }else{ 
        if(event.key == '0' && red%2!=0){
          if(number>=1300){
            number = 0 - Math.random()*15;
            container.style.transform = "rotate(" + number + "deg)";
          
            red ++;
            click++;

          }
          else{
            number = 2520 - Math.random()*15;
            container.style.transform = "rotate(" + number + "deg)";
          
            red ++;
            click++;
          }   
        
        } else{
            if(event.key == '1' && black%2==0){
              if(number>=1300){
                   number = 45 + Math.random()*15;
                   container.style.transform = "rotate(" + number + "deg)";
              
                   black ++;
                   click++;
                }
                else{
                  number = 2475 + Math.random()*15;
                   container.style.transform = "rotate(" + number + "deg)";
              
                   black ++;
                   click++;
                }
        
            }else{
              if (event.key == '1' && black%2==1) {
                if(number>=1300){
                  number = 45 - Math.random()*15;
                   container.style.transform = "rotate(" + number + "deg)";
              
                   black ++;
                   click++;
              }
              else{
                   number = 2475 - Math.random()*15;
                   container.style.transform = "rotate(" + number + "deg)";
              
                   black ++;
                   click++;
            }
              }
              
               
            }
        }
    }
    

    


}
