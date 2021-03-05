import { useState, useEffect } from 'react'

import { Link} from 'react-router-dom'


function Home(props) {
    const [restaurantName, setRestaurantName] = useState([])

    useEffect(() => {
        if (restaurantName.length === 0) {
            fetch('/api/restaurants')
                .then((res) => res.json())
                .then(titleList => {
                    setRestaurantName(titleList)
                })
        }
    })



    return (
        <div>

            <h1 id="title">Welcome to <span>Yelpington!</span></h1>
            <p id="welcomeMessage">This webpage  serves you a complete searching need of restaurants in Burlington area. 
                Click on a restaurant name on the side bar to get more information</p>
            <ul>
                {restaurantName.map((title, index) => {
                    return <h3 key={index}><Link to={`/restaurants/${title}`}>{title.replaceAll ('-', ' ')}</Link></h3>
                })}
            </ul>
        </div>
    )
}
export default Home