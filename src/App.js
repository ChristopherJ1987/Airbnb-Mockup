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
        {...item}
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
