import React from "react";

const Card = ({ name, id, email, set }) => {
  return (
    <div className="dib ma2 br4 pa3 tc grow bg-light-green shadow-5 ">
      <img alt="robots" src={`https://robohash.org/${id}.png?set=${set}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
