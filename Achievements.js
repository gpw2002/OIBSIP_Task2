import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Certificates } from '../About/Achievements/Certificates';
import { Badges } from '../About/Achievements/Badges';
import { Goodies } from '../About/Achievements/Goodies';


export const Achievements = () => {
  const [menuName, setMenuName] = React.useState('home')
  const fnMenuClick = (eve) => {
    setMenuName(eve.target.id)
  }


  return (
    <div>
      <Card className="text-center">
        <CardHeader>
          <h1>Achievements</h1>
        </CardHeader>
        <Card.Header>
          <Container>
            <Row onClick={fnMenuClick}>
              <Col id='cer'><h1 id='cer'>Certificates</h1></Col>
              <Col id='bad'><h1 id='bad'>Badges</h1></Col>
              <Col id='good'><h1 id='good'>Goodies</h1></Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          {menuName === 'cer' && <Certificates />}
          {menuName === 'bad' && <Badges />}
          {menuName === 'good' && <Goodies />}
        </Card.Body>
      </Card>
      <br></br>
    </div >
  )
}
