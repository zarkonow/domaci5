import logo from './logo.svg';
import './App.css';
import axios from "axios";


//http://www.omdbapi.com/?t=Terminator&apikey=a76b1b19
console.log(process.env.REACT_APP_OMDBAPI_KEY, process.env.REACT_APP_OMDBAPI_URL)


axios.get(process.env.REACT_APP_OMDBAPI_URL+'?t=Terminator&apikey='+process.env.REACT_APP_OMDBAPI_KEY)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

function App() {
  return (
<>
</>
  );
}

export default App;
