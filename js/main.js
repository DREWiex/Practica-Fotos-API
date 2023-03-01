document.addEventListener("DOMContentLoaded", () => {


  //* VARIABLES
  const flores = document.querySelector("#flower");
  const div = document.querySelector("#pintar");
  const enlaces = document.querySelector(".enlaces");
  const formulario = document.querySelector("#formulario");
  const texto = document.querySelector("#texto");
  const botones = document.querySelector("#botones");
  const select = document.querySelector('#select');
  let pagina = 1;
    


  //* EVENTOS

  document.addEventListener("click", ({target}) => {

        if(target.matches("#mas")){
          pagina += 1;
          pintarBotones(pagina);
          pintarFotos(getQuery(), pagina);
        };

        if(target.matches("#menos")){
          pagina -= 1;
          pintarBotones(pagina);
          pintarFotos(getQuery(), pagina);
        };

        /*
        if(select.value == "portrait"){
          console.log(select.value);
          pintarFotosOrientadas("portrait");
        }else if(select.value == "landscape"){
          console.log(select.value)
          pintarFotosOrientadas("landscape");
        }
        */
  
  });




  //* FUNCIONES

  const init = () => {

  const url = location.search;

  let params = new URLSearchParams(url);

  if(params.has("texto")){

    const texto = params.get("texto");

  //   const page=params.get("page");

    pintarBotones();
    pintarFotos(texto);

  }else{
    console.log("yoquese");
  }

  };



  const consulta = async (busqueda, page, orientacion) => {

    try {

       let ruta;

       if(busqueda && orientacion){

        ruta = `https://api.pexels.com/v1/search?query=${busqueda}&orientation=${orientacion}&per_page=15&page=${page}`;

      } else if(busqueda != null) {

        ruta = `https://api.pexels.com/v1/search?query=${busqueda}&per_page=15&page=${page}`;

      };


        


        let peticion = await fetch(ruta,
        {
          method: "GET",
          headers: {
            Authorization: "AF47xNz2Dq7rUjCuFzlGjs0eUuIQI87nopfo6HwwFypgZTSOZJdqEHC1"
          }
        });

        if(peticion.ok){
        const respuesta = await peticion.json();
        return respuesta;
      
      }else throw "Error en la ejecución";

    }catch(error){
      
      return error;
    }
  };



  const pintarFotos = async (busqueda, pagina, orientacion) => {

    div.innerHTML = "";
    
    const fotos = await consulta(busqueda, pagina, orientacion);

    const arrayfotos = fotos.photos;

    arrayfotos.forEach(({ src,id }) => {
      let img = document.createElement("IMG");
      img.src = src.medium;
      img.id = id;

      div.append(img);

    }); 
    
  };


 
  const pintarBotones = async (page = 1) => {

    botones.innerHTML = "";

    const fotos = await consulta(texto, pagina);

    let botonFlechaMas = document.createElement("BUTTON");
    botonFlechaMas.id = "mas";
    botonFlechaMas.textContent = ">>";

    let botonUno = document.createElement("BUTTON");
    botonUno.id = "pagina-actual"
    botonUno.textContent = page;

    let botonFlechaMenos = document.createElement("BUTTON");
    botonFlechaMenos.id = "menos";
    botonFlechaMenos.textContent = "<<";
    
    botones.append(botonFlechaMenos, botonUno, botonFlechaMas);

  };



  const getQuery = () => { //* pasa el argumento "texto" a la función pintarFotos al ser llamado en el evento

    let url = location.search;
    let params = new URLSearchParams(url)
    return params.get("texto");

  }



  init();


}); //!LOAD
