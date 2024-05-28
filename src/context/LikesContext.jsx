import { createContext, useState } from "react";

export const LikesContext = createContext();

const LikesProvider = ({ children }) => {
    const [fotos, setFotos] = useState([]);
    const unLiked = (id) => {
      setFotos(prevFotos =>
        prevFotos.map(foto => foto.id === id ? { ...foto, likes: 0 } : foto)
    );
    }

    const incrementarLikes = (id) => {
      console.log(id);
        setFotos(prevFotos =>
            prevFotos.map(foto =>
                foto.id === id ? { ...foto, likes: foto.likes + 1 } : foto
            )
        );
    };

    return (
        <LikesContext.Provider value={{ fotos, setFotos, incrementarLikes, unLiked }}>
            {children}
        </LikesContext.Provider>
    );
};

export default LikesProvider;