import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Paragraf from "./components/Paragraf";
import { ways, differences } from './data'
import Button from "./components/Button/Button";
import { useState } from 'react'

function App(){
  const [content, setContent] = useState('натисни')

  function handleClick(type) {
    // console.log('clicked', type)
    setContent(type)
  }

  return (
  <div>
    <Header/>
    <main>
      <section>
        <ul>
          {/* <Paragraf title={ways[0].title} description={ways[0].description}/>
          <Paragraf {...ways[1]}/>
          <Paragraf {...ways[2]}/> */}
        </ul>
      </section>
      <section>
        <h3></h3>
        <Button onClick={() => handleClick('way')}>Hello</Button>
        <Button onClick={() => handleClick('easy')}>World</Button>
        <Button onClick={() => handleClick('program')}>Daniil</Button>
      </section>
      <p>{differences[content]}</p>
    </main>
  </div>);
}

export default App;