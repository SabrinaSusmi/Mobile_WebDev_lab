import React, { useState } from 'react';
import './App.css';
import avatar1 from './images/av1.jpg';
import avatar2 from './images/av2.png';
import avatar3 from './images/av3.jpg';
import avatar4 from './images/av4.jpg';
import img1 from './images/image1.png';
import img2 from './images/image2.png';
import img3 from './images/image3.png';
import img4 from './images/image4.png';
import Product from './Products';

function App() {
  let products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      upvote: 63,
      submittedby: avatar1,
      image: img1,
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description:
        'Earn points when your favorite politicians pass legislation.',
      upvote: 54,
      submittedby: avatar2,
      image: img2,
    },
    {
      id: 3,
      title: 'Tinfolid: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      upvote: 30,
      submittedby: avatar3,
      image: img3,
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      upvote: 61,
      submittedby: avatar4,
      image: img4,
    },
  ];

  const [sortedProducts, setSortedProducts] = useState(
    products.sort((a, b) => {
      return b.upvote - a.upvote;
    })
  );

  const [renderProductsList, setRenderList] = useState(null);

  const getRenderList = () => {
    let renderProducts = sortedProducts.map((prod) => (
      <Product
        key={prod.id}
        id={prod.id}
        title={prod.title}
        description={prod.description}
        upvote={prod.upvote}
        submittedby={prod.submittedby}
        image={prod.image}
        sortAfterClick={sortAfterClick}
      />
    ));
    setRenderList(renderProducts);
  };

  const sortAfterClick = (pid) => {
    sortedProducts.map((prod) => {
      if (prod.id === pid) {
        prod.upvote = prod.upvote + 1;
      }
    });
    setSortedProducts(
      sortedProducts.sort((a, b) => {
        return b.upvote - a.upvote;
      })
    );
    getRenderList();
  };

  return (
    <div className='App'>
      <div className='app'><b>Popular Products</b></div>
      <hr></hr>
      {renderProductsList
        ? renderProductsList
        : sortedProducts.map((prod) => (
            <Product
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              upvote={prod.upvote}
              submittedby={prod.submittedby}
              image={prod.image}
              sortAfterClick={sortAfterClick}
            />
          ))}
    </div>
  );
}

export default App;
