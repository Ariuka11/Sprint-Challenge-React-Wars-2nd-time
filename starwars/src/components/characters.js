import React, {} from 'react';
import {Card} from 'react-bootstrap'

const Characters = ({name, mass, skinColor, height, vehicles, homeWorld}) => {
    return (
            <Card bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Mass: {mass}
                        Skin Color: {skinColor}
                        Height: {height}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
export default Characters

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        Mass: {mass}
        Skin Color: {skinColor}
        Height: {height}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{name}/Card.Title>
      <Card.Text>
        Mass: {mass}
        Skin Color: {skinColor}
        Height: {height}
    </Card.Text>
    </Card.Body>
  </Card> */}