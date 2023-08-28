import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import DataService from '../../utils/hooks/index';
import Loader from "../../components/Loader";
import '../../styles/App.css'
function Home() {
  // State (état, données)
  const [data, setData] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // Comportement
  useEffect(() => {
    DataService.getAll()
      .then((housing) => {
        setData(housing);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const useSearchProduct = (e) => {
      let value = e.target.value;
      value.length > 2 && setSearchProduct(value)
      value.length < 3 && setSearchProduct("")
  }
  if (error) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>;
  }
console.log(searchProduct)
  // affichage (render)
  return (
    <div className="Home">
        <h1>Hôtesse de caisse, nos produits</h1>
        <div className="Citation">
            <q>Vos clients les plus mécontents sont votre plus grande source d'apprentissage.</q>
            <q>Être sur un pied d'égalité en termes de prix et de qualité ne fait que vous amener dans le jeu. C'est le service qui vous fera remporter la partie.</q>
        </div>
        <div className="SectionCard">
            <form className="Search">
                <label htmlFor="search-product">Recherchez un Nom de produit : </label>
                <input
                    onChange={useSearchProduct}
                    type="search"
                    name="search-product"
                    id="search-product"
                    placeholder="Enter search..."
                />
            </form>
        <p>Totale référence : {data.length} </p>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="container-card">
            {
            data.filter((dataName) => {
               return dataName.name.toLowerCase().includes(searchProduct.toLowerCase())
            }
            ).map((card, index) => (
              <Card
                title={card.name}
                cover={card.pictures}
                key={`${card.name}-${index}`}
                id={card.id}
                code={card.code}
                familly={card.famille}
              ></Card>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default Home;
