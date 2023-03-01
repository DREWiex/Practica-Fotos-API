document.addEventListener("DOMContentLoaded", () => {
  //* VARIABLES
  const flores = document.querySelector("#flower");
  // const naturaleza=document.querySelector("#nature")
  const div = document.querySelector("#pintar");
  const enlaces = document.querySelector(".enlaces");
  const formulario = document.querySelector("#formulario");
  const texto = document.querySelector("#texto");
  const botones = document.querySelector("#botones");
  const fotoGrande =document.querySelector('#fotoGrande')

  //* EVENTOS

  //   document.addEventListener(`submit`, (ev) => {
  //     ponerId();
  //   });

  document.addEventListener(`click`, ({ target }) => {

    if (target.matches(`#mas`)) {

      pasarPaginas(target.id);
    }
    if (target.matches(`#menos`)) {
      pasarPaginas(target.id);

    }
  });

  const init = () => {

    const url = location.search;

    let params = new URLSearchParams(url);

    if (params.has("texto")) {

      const texto = params.get("texto");

      //   const page=params.get("page");

      //   console.log(page);

      pintarBotones();
      pintarFotos(texto);

    } else {
      console.log("yoquese");
    }
  };

  //* FUNCIONES

  //   const ponerId = () => {
  //     formulario.action = `busqueda.html?id=${texto.value}&page=${page}`; //${page}
  //   };

  const consulta = async (busqueda, page = 1) => {

    try {
      let ruta;

      if (busqueda != null) {
        ruta = `https://api.pexels.com/v1/search?query=${busqueda}&per_page=20&page=${page}`
      }

      // if(){
      //     ruta=  `https://api.pexels.com/v1/search?query=${busqueda}&${id}`
      //  }
      //  if(){

      //  }

      let peticion = await fetch(ruta,
        {
          method: "GET",
          headers: {
            Authorization:
              "AF47xNz2Dq7rUjCuFzlGjs0eUuIQI87nopfo6HwwFypgZTSOZJdqEHC1",
          },
        }
      );

      if (peticion.ok) {
        const respuesta = await peticion.json();

        return respuesta;
      } else throw `error en la ejecucion`;
    } catch (error) {
      return error;
    }
  };

  const pasarPaginas = (pagina) => {

    if (pagina == "mas") {
      page++
    } else if (pagina == "menos") {
      page--
    }

  }

  const pintarFotos = async (texto, page) => {

    // let paginacion=  pasarPaginas()
    // console.log(paginacion);

    const fotos = await consulta(texto, page);
    // fotos.page=7
    console.log(fotos);
    const arrayfotos = fotos.photos;
    arrayfotos.forEach(({ src, id }) => {
      let img = document.createElement("img");

      img.src = src.tiny;

      img.id = id
      img.setAttribute("")

      div.append(img)

      console.log(id)

      

    });


    // return fotos.next_page

  };

  // const PintarFotoGrande = async () => {
  
  // }



  const pintarBotones = async (page) => {

    // const pasarpaginas= await pintarFotos()
    // console.log(pasarpaginas);

    let botonFlechaMas = document.createElement("button");

    //console.log(page);
    botonFlechaMas.id = "mas"
    botonFlechaMas.textContent = " >>";

    let boton1 = document.createElement("button");
    boton1.textContent = page;

    let botonFlechaMenos = document.createElement("button");
    botonFlechaMenos.id = "menos"
    botonFlechaMenos.textContent = "<< ";


    botones.append(botonFlechaMenos, boton1, botonFlechaMas);
  };



  init();
}); //LOAD
