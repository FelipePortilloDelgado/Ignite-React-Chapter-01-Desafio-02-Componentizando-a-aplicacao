import {useState, useEffect, useContext} from 'react';

import { Button } from '../components/Button';
import { api } from '../services/api';

import { GenreContext } from '../contexts/GenreContext'


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}



export function SideBar() {
  // Complete aqui

  const { selectedGenreId, changeGenre } = useContext(GenreContext);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  

  function handleClickButton(id: number) {
    changeGenre(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}