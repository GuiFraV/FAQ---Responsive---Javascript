const clique = document.querySelectorAll(".clique");
const Apparaitre = document.querySelectorAll(".Apparaitre");
const Arrow = document.getElementsByClassName("Arrow"); 
const gras = document.getElementsByClassName("g");

console.log(gras)



for(let i=0; i< clique.length; i++){
    
    clique[i].addEventListener('click', () => {
        
        for (var j = 0; j<Apparaitre.length; j++){

            if(Apparaitre[j].style.display != "none"){ 

                    Apparaitre[j].style.display = "none";

                    Arrow[j].removeAttribute("id","ArrowSwing");

                    gras[j].removeAttribute("id","gras");

                }
            }


            Apparaitre[i].style.display = "block";

            Arrow[i].setAttribute("id","ArrowSwing");

            gras[i].setAttribute("id","gras");
     

        }
        
    )};



// if(getComputedStyle(Apparaitre).display !="none"){
//     paragraphe.style.display = "none";
//     anim.setAttribute("id","ArrowSwing2");
//     gras.style.fontWeight = "400";


// if(Apparaitre[i].style.display = "none"){
//     Apparaitre[i].style.display = "block";
// }
// else {
//     Apparaitre[i].style.display = "none";
// }

// Si une div apparait 
// Alors tu me cache l'autre divs
