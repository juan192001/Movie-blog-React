import React, { useState, useEffect } from 'react';
import Funciones, { getData } from '../funciones/Funciones';
import { addToFirebase } from '../funciones/firebaseHelper';

function BlogPost() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  
  const addMustWatch = async (e) => {

    console.log(e);
    addToFirebase(
      { objectToSave: { e } },
      "MustWatch"
    );
    alert("Pelicula añadida con exito a MustWatch");

  };
  
  const addFavorite = async (e) => {

    console.log(e);
    
    addToFirebase(
      { objectToSave: { e } },
      "Favs"
    );
    alert("Pelicula añadida con exito");

  };
  

  useEffect(() => {
    const cachedData = localStorage.getItem('character');
    if (cachedData !== 'undefined') {
      setCharacter(JSON.parse(cachedData));
      setLoading(false);
    } else {
      getData()
        .then((results) => {
          setCharacter(results);
          setLoading(false);
          localStorage.setItem('character', JSON.stringify(results));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const handleSearch = () => {
    const filtered = character.filter(
      (item) => item.imdbid && item.imdbid.toString().toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredCharacters(filtered);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange} placeholder="Buscar por ID" />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {filteredCharacters && filteredCharacters.length > 0 ? (
        filteredCharacters.map((item) => (
          <div key={item.imdbid} className="movie-item">
          <p className="movie-id">{item.imdbid}</p>
          <img src={item.imageurl[0]} className="movie-image" />
          <p className="movie-title">{item.title}</p>
          <p className="movie-id">{item.synopsis}</p>
          <button onClick={() => addFavorite(item)} className="add-fav-btn">
            Add fav
          </button>
          <button onClick={() => addMustWatch(item)} className="add-watch-btn">
            Quiero ver
          </button>
        </div>
        ))
      ) : loading ? (
        <p>Cargando...</p>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </>
  );
}

export default BlogPost;
