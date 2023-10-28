import { useCallback, useEffect, useState } from "react";
// import Card from "./Card";
import IconHeart from "./IconHeart";

const Gallery = () => {
  let resultados = [];
  const [result, setResult] = useState([]);
  const [cargando, setCargando] = useState(true)
  useEffect( () => {
    obtenerGaleria();
  }, [])

  const obtenerGaleria = useCallback ( async() => {
    
    try{
      const respuesta = await fetch("https://api.pexels.com/v1/search?query=people",{
        headers: {
          Authorization: "UKeoe1DCnMV0wYmSIomFw7GW5dv5bKKQXPA9Epl70QRXmQMWPa19hYMa"
        }});
      const datos = await respuesta.json();
      resultados = datos.photos;

      let fotos = []
      for(let item in resultados){
        console.log('item: ',resultados[item].src)
         fotos.push({
          id:resultados[item].id,
          alt: resultados[item].alt,
          height: resultados[item].height,
          liked: resultados[item].liked,
          photographer: resultados[item].photographer,
          photographer_url: resultados[item].photographer_url,
          url: resultados[item].url,
          src: resultados[item].src.original
         }) 
         
      }
      setResult(fotos)
    } catch (e){
      alert(e.message);
    }
    setCargando(false);
  }); 

  return (
    <div className="gallery grid-columns-5 p-3">
      {
        cargando ? ('Cargando ...') : 
          result.length > 0 ? 
          result.map((item) => (
                <div key={item.id}>
                  <IconHeart className='corazon' filled={true}/>
                  <img src={item.src} className="card-img-top" alt={item.alt} />
                  {/* <div className="card-body">
                    <a href={item.photographer_url} className="card-title">{item.photographer}</a>
                  </div> */}
                </div>
          )) : 'No hay imagenes disponibles' 
      }
    </div>
    );
};
export default Gallery;
