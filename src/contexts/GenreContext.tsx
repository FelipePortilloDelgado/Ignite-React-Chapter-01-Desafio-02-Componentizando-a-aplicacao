import { ReactNode, createContext, useState } from "react";

interface GenreContextData {
    selectedGenreId: number;
    changeGenre: (id:number) => void;
}

interface GenreProviderProps {
    children: ReactNode;
    genreId: number;
}

export const GenreContext = createContext({} as GenreContextData);


export function GenreProvider(
    {
        children, 
        genreId
    }: GenreProviderProps
) {

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function changeGenre(id: number){
        setSelectedGenreId(id);
    }

    return (
        <GenreContext.Provider 
            value={{selectedGenreId, 
            changeGenre}}>
            {children}
        </GenreContext.Provider>
    );
}