import React, { useState } from "react";

function Articles() {
  const [id, setId] = useState();
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState();

  const [articles, setArticles] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //ajoute article
    setArticles([
      ...articles,
      { id: id, designation: designation, prix: prix },
    ]);
    //reset input
    setId("");
    setDesignation("");
    setPrix("");
  };
  // const handleSupprimer = (id) => {
  //   setArticles(articles.filter((article)=> article.id !== id))
  // };
  const handleSupprimer = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (isConfirmed) {
      setArticles(articles.filter((article) => article.id !== id));
    }
  };
  return (
    <div>
      <h1>AJOUTE D UN ARTICLE</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>prix</label>
          <input
            type="text"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit">ajouter</button>
        </div>
      </form>
      <div>
        <h2>LISTE ARTICLES</h2>
        <ul>
          {articles.map((a) => (
            <li key={a.id}>
              {a.id}- {a.designation}- {a.prix}
              <button onClick={() => handleSupprimer(a.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Articles;
