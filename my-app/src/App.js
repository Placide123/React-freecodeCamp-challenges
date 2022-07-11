
import './App.css';
import NavBar from './components/NavBar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'
import data from './data'
function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}

      // img={item.coverImg}
      // ratings={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
       />
    )
  })
  return (
    <div className="container">
      <NavBar/>
      <Hero />
      <section className="cards--list">
      {cards}
      </section>

    
    </div>
  );
}

export default App;
