/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { getFromFirebase,deleteFromFirebase, updateFromFirebase, getFromFirebaseID } from "../funciones/firebaseHelper";
import "./Favs.css";

function MustWatch() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = async (id) => {
    // Obtenemos el objeto completo de Firebase
    console.log(nombre);
    const doc = await getFromFirebaseID("MustWatch", id);
    console.log('objetoo',doc)
    // Actualizamos el título del objeto local
    const updatedDoc = { ...doc, e: { ...doc.e, title: nombre } };
    setData(data.map(item => item.id === id ? updatedDoc : item));
    console.log('nuevo',updatedDoc);
    await updateFromFirebase(id, updatedDoc , "MustWatch");

    // Limpiamos los estados de edición
    setEditing(false);
    setEditingId(null);
    setNombre("");
  };
  const handelNombreOnChange=(e)=>{
    setNombre(e.target.value);
  }
  const handleEdit = (id, title) => {
    console.log(title)
    setEditingId(id);
    setNombre(title);
    setEditing(true);
  };



  const handleDelete = async (e) => {
    try {
      await deleteFromFirebase(e, "MustWatch"); 
      console.log("Document deleted with ID: " + e);
      setData(data.filter(item => item.id !== e));    
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  const fetchData = async () => {
    const result = await getFromFirebase("MustWatch");
    if (result) {
      console.log(result);
      setData(result); 
      
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <li className="favorite-movies">
  Peliculas Que Quieres Ver
  {data.map((item) => (
    <div key={item.id} className="favorite-movie-item">
      <img src={item.e.imageurl[0]} className="movie-image" />
      {editing && editingId === item.id ? (
        <div className="movie-edit-form">
          <input type="text" value={nombre} onChange={(e) => handelNombreOnChange(e)} />
          <button onClick={() => handleUpdate(item.id)} className="update-btn">Actualizar</button>
        </div>
      ) : (
        <div className="movie-details">
          <p className="movie-title">{item.e.title}</p>
          <button onClick={() => handleEdit(item.id, item.e.title)} className="edit-btn">Editar</button>
          <button onClick={() => handleDelete(item.id)} className="delete-btn">Borrar fav</button>
        </div>
      )}
    </div>
  ))}
</li>
  );
}

export default MustWatch;