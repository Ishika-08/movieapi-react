import { useContext } from "react"
import {useParams} from "react-router-dom"
import ShowsContext from "../../context/ShowsContext"
import _ from "lodash"
import ReactHtmlParser from 'react-html-parser';
import "./show.css"

export default function show(){
    const data = useContext(ShowsContext);
    const {show} = useParams();

    let showData;

    data.map(post => {
        if(_.camelCase(post.show.name) == show){
               showData = post.show
        }
        })
    


    return(
        <>
        <div key={showData.id} className="grid">
            <img src={showData.image.original} alt="showImg" className="grid-item"/>
            <div className="grid-item">
                
                {ReactHtmlParser(showData.summary)}
                <br/>
                <h6>GENERES:</h6>
                <ul>
                    {showData.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <h6>Ratings:</h6>
                <p>{showData.rating.average}</p>
                <br/>
               
            </div>
        
        </div>
        </>
    )
}