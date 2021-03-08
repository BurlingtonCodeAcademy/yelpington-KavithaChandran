// import the 
import { useState, useEffect } from 'react'

import React from 'react'


function Restaurants(props) {
    // variables are assigned to store details once the restaurant details are fetched
    const [restaurantInfo, setRestaurantInfo] = useState({
        id: '',
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        category: '',
        phone: '',
        website: '',
        hours: '',
        notes: [],
    })
    //Information Id is assigned to a variable as a ease of use  in various places
    let restInfo = props.match.params.id

    useEffect(() => {
        // when the state is empty or doesn't match new one will be visited
        if (restaurantInfo.id === '' || restaurantInfo.id !== restInfo) {

            //fetch the restaurant id from the api points
            fetch(`/api/${props.match.params.id}`)
                .then((res) => res.json())
                //store the fetch in a intermediate guard clause
                .then(restaurantDetails => {
                    setRestaurantInfo(restaurantDetails)
                    props.setZoom({
                        zoomIn: true,
                        zoom: 20,
                        center: [restaurantDetails.latitude, restaurantDetails.longitude],
                    })
                })
        }
    })

    //Main-content wrapper- restaurant information and comments
    return (
        <div id='info-Container'>
            <h1 id='subTitle'>Restaurant Information</h1>
            <div id='rest-info'>
                {/*restaurant details are generated through local api fetch */}
                <h2 className="info">{restaurantInfo.name}</h2>
                <h4 className="info">{restaurantInfo.address}</h4>
                <h4 className="info">{restaurantInfo.category}</h4>
                <h4 className="info">{restaurantInfo.phone}</h4>
                <h4 className="info">{restaurantInfo.website}</h4>
                <h4 className="info">{restaurantInfo.hours}</h4>
                <br />
                <h2>Notes:</h2>
                <h4 className="notes">{restaurantInfo.notes}</h4>

            </div>

            {/*Comments are added to page */}
            <div id="people-comments">
                <h3>Comments:</h3>
                <div id="review">
                    <form id="post-review" method="POST" action={`/notes/${restInfo}`}>

                        <textarea id="textarea" name="body" placeholder="Add a Comment"></textarea>
                        <input id="submit" type="submit" name="comment" />
                    </form>

                </div>

            </div>

        </div>

    )
}

export default Restaurants