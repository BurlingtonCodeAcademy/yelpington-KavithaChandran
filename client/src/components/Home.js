//
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
    //set up a state to store the restaurant names and also a updater function 
    const [restaurantName, setRestaurantName] = useState([])
//this is mostly used to fetch data
    useEffect(() => {
        // if the list is empty
        if (restaurantName.length === 0) {
            //it is fetched from the api endpoint(document which has info stored as json files)
            fetch("/api")
                .then((res) => res.json())
                // stored in an intermediate variable
                .then(restaurantName => {
                    setRestaurantName(restaurantName)
                    //This will update the map and zoom back to the original state when back or the title is clicked
                    props.setZoom({ zoomIn: false, zoom: 15 , center:[44.4761601, -73.212906]})
                })
        }
    })
    //Restaurant id's are capitalized to be displayed in the home page
    function capitalize(str) {
        // name string is split and then the'-'in between are sliced . finally joined again
        let strArray = str.split(" ");
        let i = 0;
        while (i < strArray.length) {
            strArray[i] =
                strArray[i][0].toUpperCase() + strArray[i].slice(1).toLowerCase();
            i++;
        }
        return strArray.join(" ");
    }


    return (
       
<div>
        <h1 id ="subTitle">Burlington Restaurants</h1>
         {/* each individual restaurant from the api list is made as a link to pass on to info page when clicked  */}
            <div id='nav-bar'>  
            <ul>
                {restaurantName.map((rest, index) => {
                    return (<h3 key={index}>
                        <li>
                            <Link className="rest-link" to={`/restaurant/${rest}`}>
                                {capitalize(rest.replaceAll('-', ' '))}
                            </Link>
                        </li>
                    </h3>
                    )
                })
                }
            </ul>
        </div>
        </div>
    )
}

export default Home