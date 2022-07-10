
import './App.css';

import Joke from './components/Joke'

function App() {
  return (
    <div>
   <Joke 
   Punchline="I can't wait to see her face light up when she opens it."
   isPun={true}
   upvotes={10}
   />
   <Joke 
   Setup="I got my daughter a fridge for her birthday."
   Punchline="I can't wait to see her face light up when she opens it."
   isPun={false}
   upvotes={10}
   />
   <Joke
   Setup="How did the hacker escape the police?"
   Punchline=" He just ransomware!"
   upvotes={10}
   />
   <Joke 
   Setup="Why don't pirates travel on mountain roads?"
   Punchline="Scurvy."
   isPun={true}
   upvotes={10}
   />
   <Joke
   Setup="Why do bees stay in the hive in the winter?"
   Punchline="Swarm."
   isPun={true}
   upvotes={10}
   />
   <Joke 
   Setup="What's the best thing about Switzerland?"
   Punchline="I don't know, but the flag is a big plus!"
   isPun={true}
   upvotes={10}
   />
    </div>
  );
}

export default App;
