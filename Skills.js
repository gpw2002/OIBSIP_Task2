import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import javalogo from '../../images/Languages/java-logo.jpg';
import pythonlogo from '../../images/Languages/python-logo.png';
import htmllogo from '../../images/Languages/html-logo.png';
import clogo from '../../images/Languages/c-logo.png';
import sqllogo from '../../images/Languages/sql-logo.jpg';
import csslogo from '../../images/Languages/css-logo.png';
import jslogo from '../../images/Languages/js-logo.png';
import reactlogo from '../../images/Languages/react-logo.png';

export const Skills = () => {
  const skill = [{ Name: 'JAVA', Image: javalogo },
  { Name: 'Python', Image: pythonlogo },
  { Name: 'C', Image: clogo },
  { Name: 'SQL', Image: sqllogo },
  { Name: 'HTML', Image: htmllogo },
  { Name: 'CSS', Image: csslogo },
  { Name: 'JS', Image: jslogo },
  { Name: 'Reactjs', Image: reactlogo }]
  return (
    <div>
      <Container>
        <Row>
          {
            skill.map((obj, index) => {
              const { Name, Image } = obj;
              return <Col>
                <Card style={{ width: '18rem', marginBottom: '20px' }}>
                  <Card.Img variant="top" src={Image} />
                  <Card.Footer className="text-muted"><h4>{Name}</h4></Card.Footer>
                </Card>
              </Col>
            })
          }
        </Row>
      </Container>
    </div>
  )
}