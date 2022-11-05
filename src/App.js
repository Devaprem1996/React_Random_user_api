
import { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css';
import Cards from './Components/Cards';
import {Grid,CircularProgress  } from '@mui/material';
import Container from '@mui/material/Container';




function App() {

  const [data, setData] = useState([]);
  
  const [loading, setLoading]=useState(false)



  
  // this code  is using to get datas from localstorage to react state..  
  useEffect(() => {
    const getDataFromLocal = localStorage.getItem("data")
    if (!getDataFromLocal) {
      return setLoading(true);
    } else {
      setData(JSON.parse(getDataFromLocal))
    }
  }, []);
  
  // to remove each item from the array of items and set them to localStorge as well as to state..
  const removeItem = (id) => {
    const remove = data.filter((item, index) => index !== id);
    localStorage.setItem("data", JSON.stringify(remove));
    setData(JSON.parse(localStorage.getItem("data")))
  } 
  
  // filling the new datas (all 50 members) to localStorge..
  const resart = () => {
    Axios.get("https://randomuser.me/api/?results=50")
    .then((res) => { localStorage.setItem("data", JSON.stringify(res.data.results)); });
}


  

   return (

    <Container maxWidth="m">
      <button onClick={resart} >Click to refresh</button>
      <div className='App'>
        <h1 >Profiles</h1>
      </div>
      <div className="App"><h1>{data.length}</h1></div>
      
      <Grid container spacing={5} >
         {loading ?
           <div style={{margin:" 50px auto"}}>
             <CircularProgress justifyContent="center" />
             <CircularProgress justifyContent="center" />
             <CircularProgress justifyContent="center" />
           </div>
          
          : data.map((list, index) => {
            return (
              <Cards
                loading
                key={index}
                img={list.picture.large}
                title={list.name.title}
                first={list.name.first}
                last={list.name.last}
                deleteItem={() => removeItem(index)}
              />
            )

          })}
        
      </Grid>
    </Container>

  );
}

export default App;
