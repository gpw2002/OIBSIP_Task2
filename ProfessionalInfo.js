import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Education } from '../About/ProfessionalInfo/Education';
import { Skills } from '../About/ProfessionalInfo/Skills';
import { Projects } from './ProfessionalInfo/Projects';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export const ProfessionalInfo = () => {
  const [menuName, setMenuName] = React.useState('home')
  const fnMenuClick = (eve) => {
    setMenuName(eve.target.id)
  }


  return (
    <div>
      <Card className="text-center">
        <CardHeader>
          <h1>Professional Information</h1>
        </CardHeader>
        <Card.Header>
          <Container>
            <Row onClick={fnMenuClick}>
              <Col id='edu'><h1 id='edu'>Education</h1></Col>
              <Col id='skill'><h1 id='skill'>Skills</h1></Col>
              <Col id='project'><h1 id='project'>Projects</h1></Col>
            </Row>

          </Container>
        </Card.Header>
        <Card.Body>
          {menuName === 'edu' && <Education />}
          {menuName === 'skill' && <Skills />}
          {menuName === 'project' && <Projects />}
        </Card.Body>
      </Card>
      <br></br>
    </div >
  )
}
