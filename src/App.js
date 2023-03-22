import React, { useState, useEffect} from 'react'


function App(){
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://tense-leg-warmers-bass.cyclic.app/users')
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setItems(result)
        })
}, [])
    
    return(
    <div>
        <h1>Users</h1>
        <ul>
        { items.map((item) => (
            <li key = {item.id}>
                <p>Name: {item.fname}</p>
                <p>Lastname: {item.lname}</p>
                <p>Email: {item.username}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}



export default App