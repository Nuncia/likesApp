import { useCallback, useContext, useEffect, useState } from "react";
import IconHeart from "../components/IconHeart";
import { LikesContext } from "../context/LikesContext";

const Favorites = () => {
  const [cargando, setCargando] = useState(true);
  const { fotos, unLiked } = useContext(LikesContext);

  useEffect(() => {
    if(fotos.length > 0){
      setCargando(false);
    } else{
      setCargando(true);
    }
  }, [fotos]);

  return (
    <div className="gallery grid-columns-5 p-3">
      {
        fotos.filter((foto) => foto.likes > 0).length  == 0 ? ('Sin favoritos ...') : 
          fotos.length > 0 ? 
            fotos.filter((foto) => foto.likes > 0).map((foto) => (
              <div key={foto.id} style={{padding: '2px', backgroundColor: foto.liked ? 'green' : 'grey'}}>
                <IconHeart className='corazon' filled={foto.likes > 0 ? true : false}/>
                {/* <div style={{color: 'black'}}>{foto.likes}</div>
                <div style={{color: 'black'}}>{foto.id}</div> */}
                <img  onClick={() => unLiked(foto.id)} src={foto.src.original} className="card-img-top" alt={foto.alt} />
              </div>
            )) : 'No hay imagenes disponibles' 
      }
    </div>
  );
};

export default Favorites;