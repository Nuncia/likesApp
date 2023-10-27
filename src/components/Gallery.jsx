import { useCallback, useEffect, useState } from "react";
import photos from '../js/photos.json';

const Gallery = () => {
  let resultados = [];
  const [result, setResult] = useState([]);
  useEffect( () => {
    obtenerGaleria();
  }, [])

  const obtenerGaleria =  ( async() => {
    
    try{
      const respuesta = await fetch("https://api.pexels.com/v1/search?query=people",{
        headers: {
          Authorization: "UKeoe1DCnMV0wYmSIomFw7GW5dv5bKKQXPA9Epl70QRXmQMWPa19hYMa"
        }});
      const datos = await respuesta.json();
      resultados = datos.photos;
      let fotos = []
      for(let item in resultados){
         fotos.push({
          id:resultados[item].id,
          alt: resultados[item].alt,
          height: resultados[item].height,
          liked: resultados[item].liked,
          photographer: resultados[item].photographer,
          photographer_url: resultados[item].photographer_url,
          url: resultados[item].url
         }) 
         
      }
      console.log(fotos.length)
      setResult(fotos)
    } catch (e){
      alert(e.message);
    }
   
  }); 

  return (
    <div className="gallery grid-columns-5 p-3">
      {result.length}
      {
        result.length > 0 ? 
        result.map((item) => (
          <div key={item.id}>
            <img src={item.url} alt={item.alt} />
          </div>
        )) : 'No hay datos disponibles'
      }
    </div>
    );
};
export default Gallery;
