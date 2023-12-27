import React from 'react'
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
    const rooms = ["first room", "secon room", "third room"]
  return (
    <>
        <h2>Available Rooms</h2>
        <ListGroup>
            {rooms.map ((room, idx) => ( 
                <ListGroup.Item key={idx}>{room}</ListGroup.Item>
            ))}
        </ListGroup>
        <h2>Members</h2>
    </>
  )
}

export default Sidebar;