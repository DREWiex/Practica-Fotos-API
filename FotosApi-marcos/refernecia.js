document.addEventListener('DOMContentLoaded',()=>{

    const saberCual=(cual)=>{
        console.log(cual)
    }


    const init=()=>{
        const url=location.search

        let params = new URLSearchParams(url);

        if(params.has('id')){
            console.log(params)
            const id=params.get('id')
            console.log(id)
            saberCual('otro')
        }else{
            saberCual('index')
        }
        


    }


    init()




})//LOAD




img.onclick 

const id = e.target.getAttribute("id");
console.log("Se ha clickeado el id "+id);

console.log( img.onclick)



document.querySelectorAll(".click").forEach(Imagen => {
    Imagen.addEventListener("click", ev => {
      const id = ev.target.getAttribute("id");
      console.log("Se ha clickeado el id "+photos.id);
    });
  });

// import { createClient } from 'pexels';

// const client = createClient('AF47xNz2Dq7rUjCuFzlGjs0eUuIQI87nopfo6HwwFypgZTSOZJdqEHC1');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});