function App() {

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
        return response.json() 
    })
    .then((json) =>{
        console.log(json)
    })


  return (
    <div>
      hello
    </div>
  );
}

export default App;
