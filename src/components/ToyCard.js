import React from 'react';

function ToyCard({
  toy: { id, name, image, likes },
  onDeleteToy,
  onUpdateToy,
}) {
  function handleDeleteClick() {
    fetch(`http://localhost:3007/toys/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then((toy) => {
        onDeleteToy(toy);
      });
  }

  function handleLikeClick() {
    const updateObj = {
      likes: likes + 1,
    };

    fetch(`http://localhost:3007/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {'<3'}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
