const dino  = document.getElementById("dino") ; 
const cactus = document.getElementById("block") ;
const start = document.getElementById("start") ; 
const body = document.getElementById("body") ; 
const main = document.getElementById( "main") ; 




// creating a start button to start game 
start.addEventListener('click' , ( ) => { 
    cactus.style.animation = "move 1700ms  infinite linear";
   
    
})
function jump ( ) { 
    dino.style.top  = "210px" ; 
    setTimeout( function ( ){ 
        dino.style.top = "328px " 
    } , 300 )

}
body.addEventListener('click' , jump) ; 
var blockLeft = parseInt( window.getComputedStyle(cactus).getPropertyValue("left")) ; 
 
function gameover ( ) { 
    
    var blockLeft = parseInt( window.getComputedStyle(cactus).getPropertyValue("left")) ; 
    var DinoTop = parseInt( window.getComputedStyle(dino).getPropertyValue("top")) ; 

    var blockRight = parseInt( window.getComputedStyle(cactus).getPropertyValue("right")) ; 
    if ( blockLeft <= 30  && DinoTop >= 288){ 
        
        cactus.style.animation = "";
        const ashneer = document.createElement("img") ; 
        ashneer.setAttribute("id" , "ash") ; 
        ashneer.setAttribute("src" , "https://www.bing.com/images/blob?bcid=ry5kuyqUA8QE.w") ; 

        const main = document.getElementById("main") ; 
        main.appendChild( ashneer) ; 

        setInterval( function ( ){ 
              window.location.reload( ) ;
        } , 2000 )
         
         
    }
     
    
    
    
}
 
setInterval( function ( ){ 
    gameover( ) ;  
} , 1 )

