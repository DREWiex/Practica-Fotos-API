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

// import { createClient } from 'pexels';

// const client = createClient('AF47xNz2Dq7rUjCuFzlGjs0eUuIQI87nopfo6HwwFypgZTSOZJdqEHC1');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});