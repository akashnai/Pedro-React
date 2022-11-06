import "./App.css";
// import {User} from './User'

function App() {
  // const age = 18;
  // const isGreen = false
  // const names = ["pedro", "jake", "jessica", "mike", "surpiso"];

  // const users = [
  //   {name: 'akki', age: 20},
  //   {name: 'vivek', age: 18},
  //   {name: 'vaibhavi', age: 19},
  // ]

  const planets = [
    {name: 'mars', isGasPlanet: false},
    {name: 'earth', isGasPlanet: false},
    {name: 'jupiter', isGasPlanet: true},
    {name: 'venus', isGasPlanet: false},
    {name: 'neptune', isGasPlanet: true},
    {name: 'uranus', isGasPlanet: true},
  ]

  return (
    <div className="App">
      {/* <h1 className="name" >{age >= 18 ? "OverAge" : "UnderAge"}</h1>
      <h1 style={isGreen ? {color: 'green'} : {color: 'red'}}>This have color</h1>
      
      {isGreen && <button>This is button</button>} */}

      {/* {names.map((name, key) => (
        <h1 key={key}>{name}</h1>
      ))} */}

      {/* {users.map((user,key) => {
        return <User name={user.name} age={user.age} />
      })} */}

      {planets.map((planet) => !planet.isGasPlanet && <h1> {planet.name} </h1>)}
    </div>
  );
}


export default App;
