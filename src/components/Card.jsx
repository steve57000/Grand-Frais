import React from 'react';
import { string } from 'prop-types';
import DefaultImg from '../assets/img/backgroundCover.svg';

export default function Card({ title, cover, code, familly }) {
  // state
    let sansSachet
  // comportements
    if(code.kg) {
        const numberSansSachet = JSON.stringify(code.kg)
        console.log(numberSansSachet)
        const addSansSachet = numberSansSachet.slice(0, 4)
        sansSachet = addSansSachet.concat('4')
    }
    const getfamillyProduct = familly === 17 ? "Fruits" : "Légumes"
    const getKg = code.kg ? (<p>Code au kg : <strong>{code.kg}</strong></p>) : null
    const getKgSansSachet = sansSachet ? (<p>Code au kg (sans sachet): <strong>{sansSachet}</strong></p>) : null
    const getPiece = code.piece ? (<p>Code à la pièce : <strong>{code.piece}</strong></p>) : null
    const getFilet = code.filet ? (<p>Code filet : <strong>{code.filet}</strong></p>) : null
    const getColis = code.colis ? (<p>Code filet : <strong>{code.colis}</strong> </p>) : null
    const getCarton = code.carton ? (<p>Code carton : <strong>{code.carton}</strong></p>) : null
    const getBarquette = code.barquette ? (<p>Code filet : <strong>{code.barquette}</strong></p>) : null
    const getLot = code.lot ? (<p>Code lot : <strong>{code.lot}</strong></p>) : null

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
