import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <User name='akki' age='19' email='akki@akashnai.com' />
      <User name='vivek' age='15' email='vivek@akashnai.com'  />
      <User name='vaibhavi' age='18' email='vaibhavi@akashnai.com'  /> */}

      <Job salary={90000} position='Senior SDE' company='Amazon' />
      <Job salary={12000} position='Junior SDE' company='Google' />
      <Job salary={10000} position='Project Manager' company='Netflix' />
    </div>
  );
}

const Job = ({salary, position, company}) => {
  return (
    <>
      <h1>{salary}</h1>
      <h1>{position}</h1>
      <h1>{company}</h1>
    </>
  )
}

// const User = ({name, age, email}) => {
//   return (
//     <>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{email}</h1>
//     </>
//   );
// };

export default App;
