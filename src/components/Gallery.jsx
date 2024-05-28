import { useCallback, useContext, useEffect, useState } from "react";
import IconHeart from "./IconHeart";
import { LikesContext } from "../context/LikesContext";

const Gallery = () => {
  const [cargando, setCargando] = useState(true);
  const { fotos, setFotos, incrementarLikes } = useContext(LikesContext);

  useEffect(() => {
    if(fotos.length == 0){
      obtenerGaleria();
    } else{
      setCargando(false);
    }
  }, [fotos]);

  const obtenerGaleria = useCallback(async () => {
    try {
      const respuesta = await fetch("https://api.pexels.com/v1/search?query=people", {
        headers: {
          Authorization: "UKeoe1DCnMV0wYmSIomFw7GW5dv5bKKQXPA9Epl70QRXmQMWPa19hYMa"
        }
      });
      const datos = await respuesta.json();
      const fotosAPI = datos.photos.map(foto => ({ ...foto, likes: 0}));
      setFotos(fotosAPI);
    } catch (e) {
      alert(e.message);
    }
    setCargando(false);
  });

  return (
    <div className="gallery grid-columns-5 p-3">
      {
        cargando ? ('Cargando ...') : 
          fotos.length > 0 ?
            fotos.map((foto) => (
              <div key={foto.id} style={{padding: '2px', width: '18rem'}}>
                <IconHeart className='corazon' filled={foto.likes > 0 ? true : false}/>
                {/* <div style={{color: 'black'}}>{foto.likes}</div>
                <div style={{color: 'black'}}>{foto.id}</div> */}
                <img  onClick={() => incrementarLikes(foto.id)} src={foto.src.original} className="card-img-top" style={{height: '250px'}} alt={foto.alt} />
              </div>
            )) : 'No hay imagenes disponibles' 
      }
    </div>
  );
};

export default Gallery;