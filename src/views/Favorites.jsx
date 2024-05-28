import { useContext, useEffect, useState } from "react";
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
                <img  onClick={() => unLiked(foto.id)} style={{height: '250px'}} src={foto.src.original} className="card-img-top" alt={foto.alt} />
              </div>
            )) : 'No hay imagenes disponibles' 
      }
    </div>
  );
};

export default Favorites;