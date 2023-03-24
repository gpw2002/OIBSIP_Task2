import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import r3sys from '../images/Work Experience/r3sys.png';
import salesforce from '../images/Work Experience/salesforce.png';

export const WorkExperience = () => {
  const we = [{ Position: 'Java Developer', Company: 'R3 Systems India Private Limited', Iname: r3sys },
  { Position: 'Trailhead Developer', Company: 'Salesforce :Smart Internz & Persistent', Iname: salesforce },
  { Position: 'Web Developer', Company: 'R3 Systems India Private Limited', Iname: r3sys },]

  return (
    <div>
      <Card className="text-center">
        <CardHeader>
          <h1>Work Experience</h1>
        </CardHeader>
        <Card.Body>
          <Container>
            <Row>
              {
                we.map((obj, index) => {
                  const { Position, Company, Iname } = obj;
                  return <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={Iname} />
                      <Card.Body>
                        <Card.Text><h5>{Company}</h5></Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted">{Position}</Card.Footer>
                    </Card>
                  </Col>
                })}
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <br></br>
    </div >
  )
}
