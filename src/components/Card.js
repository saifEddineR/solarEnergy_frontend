import React from 'react';

const Card = ({ title, desc, imgUpload, CreatedAt }) => {
  // get the date that the project get created :/
  let d = new Date(CreatedAt);
  let date = `${d.getDay() + 1} - ${d.getMonth() + 1} - ${d.getFullYear()}`;
  return (
    <div className='card-project'>
      <img src={imgUpload} alt='project' />
      <span>
        <h4>{title}</h4>
        <p>{desc} </p>
        <p>realised at : {date} </p>
      </span>
    </div>
  );
};

export default Card;
