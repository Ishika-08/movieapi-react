import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "./Home.css"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowsContext from '../../context/ShowsContext';
import _ from "lodash";





function Home() {
  const navigate = useNavigate();

  const data = useContext(ShowsContext);

  //the img loaded when no img link is provided by the api
  const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

  const handleClick = (name) =>{
    navigate(`/${_.camelCase(name)}`);
  }


  return (
    <>

    <h1 className='title'>SHOWS</h1>

    <div className='grid'>

    {data.map(post =>(
      <Card className='grid-item' key={post.show.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={post.show.image== null? defaultImg : post.show.image.original} />
      <Card.Body>
        <Card.Title>{post.show.name}</Card.Title>
        <Button variant="primary" onClick={() => handleClick(post.show.name)}>Show details</Button>
      </Card.Body>
    </Card>
    ))}

    </div>

    </>
  )
}

export default Home
