import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import DataService from '../../utils/hooks/index';
import Loader from "../../components/Loader";
import '../../styles/App.css'
function Home() {
  // State (état, données)
  const [data, setData] = useState([]);
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

  if (error) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>;
  }

  // affichage (render)
  return (
    <div className="Home">
      <div className="SectionCard">
        <p>Totale référence : {data.length} </p>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="container-card">
            {data.map((card, index) => (
              <Card
                title={card.name}
                cover={card.pictures}
                key={`${card.title}-${index}`}
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
