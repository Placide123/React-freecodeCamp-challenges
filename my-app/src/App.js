
import './App.css';
import NavBar from './components/NavBar.js'
import Card from './components/Card.js'
import separate from './separate'


function App() {
  
  const cards = separate.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
 />)
  })
  return (
    <div className="container">
      <NavBar/>
      
      <section className="card--container">
        {cards}
      </section>

    
    </div>
  );
}

export default App;
/* <section className="cards--list">
      {cards}
      </section> */