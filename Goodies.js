import React from 'react'
import Card from 'react-bootstrap/Card';

export const Goodies = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header><h3>Google Cloud</h3></Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"><h3>Google Cloud</h3></Card.Footer>
      </Card>
    </div>
  )
}
