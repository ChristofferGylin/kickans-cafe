
import './App.css'
import getBeverages from './getBeverages';
import sortCoffee from './sortCoffee';

const coffeeUrl = './coffee.json';
const coffeeList = await getBeverages(coffeeUrl, sortCoffee);

console.log(coffeeList);

function App() {

  return (

    <div><h1>Coffee</h1></div>

  )
}

export default App
