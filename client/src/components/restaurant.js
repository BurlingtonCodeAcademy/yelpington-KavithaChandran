import { useState, useEffect } from 'react'

import React from 'react'


function Restaurant(props) {
    const [restaurantInfo, setRestaurantInfo] = useState({
       id: '',
        name: '',
        address: '',
        coords: '',
        category: '',
        phone: '',
        website: '',
        hours: '',
        notes: ''
    })
    useEffect(() => {
        if (restaurantInfo.id === '') {
            fetch(`/articles/${props.match.params.id}`)
                .then((res) => res.json())
                .then(idContent => {
                    setRestaurantInfo(idContent)
 })
        }
    })
    return (
        <div>
            <h1>I am post article page</h1>
            <div>
                <h4>{restaurantInfo.id}</h4>
                {restaurantInfo.name}
                {restaurantInfo.address}
                {restaurantInfo.coords}
                {restaurantInfo.category}
                {restaurantInfo.phone}
                {restaurantInfo.website}
                {restaurantInfo.hours}
                {restaurantInfo.notes}
                  
            </div>

        </div>
    )
}

export default Posts