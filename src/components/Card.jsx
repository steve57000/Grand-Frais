import React from 'react';
import { string } from 'prop-types';
import DefaultImg from '../assets/img/backgroundCover.svg';

export default function Card({ title, cover, code, familly }) {
  // state
    let sansSachet
    if(code.kg) {
        const numberSansSachet = JSON.stringify(code.kg)
        console.log(numberSansSachet)
        const addSansSachet = numberSansSachet.slice(0, 4)
        sansSachet = addSansSachet.concat('4')
    }
    const getfamillyProduct = familly === 17 ? "Fruits" : "Légumes"
    const getKg = code.kg ? (<p>Code au kg : {code.kg}</p>) : null
    const getKgSansSachet = sansSachet ? (<p>Code au kg (sans sachet): {sansSachet}</p>) : null
    const getPiece = code.piece ? (<p>Code à la pièce : {code.piece}</p>) : null
    const getFilet = code.filet ? (<p>Code filet : {code.filet}</p>) : null
    const getColis = code.colis ? (<p>Code filet : {code.colis} </p>) : null
    const getCarton = code.carton ? (<p>Code carton : {code.carton} </p>) : null
    const getBarquette = code.barquette ? (<p>Code filet : {code.barquette}</p>) : null
    const getLot = code.lot ? (<p>Code lot : {code.lot}</p>) : null


  // comportements
  // affichage (render)
  return (
    <figure className="card">
      <h2>{title}</h2>
      <div className="ContainerImg">
          <img src={cover} alt="" />
      </div>
      <figcaption>
          {getKg}
          {getKgSansSachet}
          {getPiece}
          {getFilet}
          {getColis}
          {getCarton}
          {getBarquette}
          {getLot}
        <p>Famille : {getfamillyProduct}</p>
      </figcaption>
    </figure>
  );
}

Card.propTypes = {
  title: string,
  cover: string,
  id: string.isRequired,
  isCover: string,
};

Card.defaultProps = {
  title: 'Titre du fruit/Légume',
  cover: DefaultImg,
};
