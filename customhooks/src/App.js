import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";

function App() {
  const [nomeUsuarios, setNomeUsuarios] = useState([]);
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}users`)
      .then((response) => {
        setNomeUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <p>Exercício 1</p>
      {nomeUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      })}
      <hr />
      <p>Exercício 2</p>
      {postagens.map((post) => {
        return <p key={post.id}>{post.body}</p>;
      })}
    </div>
  );
}

export default App;

