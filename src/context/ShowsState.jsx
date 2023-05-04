import ShowsContext from "./ShowsContext";
import {useState, useEffect} from 'react';


const ShowsState = (props)=>{

    //setting state
  const [data, useData] = useState([]);

  //fetching data from api
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => useData(data))
      .catch(error => console.log(error))
  }, []);


    return (
        <ShowsContext.Provider value={data}>
            {props.children}
        </ShowsContext.Provider>
    )
}

export default ShowsState;