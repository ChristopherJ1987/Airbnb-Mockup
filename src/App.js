// This sends the App component and all the components that make it to the index.js file

import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cardsContainer'>
        {cards}
      </section>
    </div>
  );
}

export default App;
