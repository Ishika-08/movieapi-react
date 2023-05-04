import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "./Home.css"




function Home() {
  const [data, useData] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => useData(data))
      .catch(error => console.log(error))
  }, []);

  console.log(data);

  const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"


  return (
    <>
    <h1 className='title'>SHOWS</h1>
    <div className='grid'>
    {data.map(user =>(
      <Card className='grid-item' key={user.show.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.show.image== null? defaultImg : user.show.image.original} />
      <Card.Body>
        <Card.Title>{user.show.name}</Card.Title>
        <Button variant="primary">Show details</Button>
      </Card.Body>
    </Card>
    ))}

    </div>
    </>
  )
}

export default Home
