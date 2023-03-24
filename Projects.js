import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import inventorylogo from '../../images/Projects/inventory.png';
import candidatelogo from '../../images/Projects/candidate.jpg';
import studentlogo from '../../images/Projects/student.png';

export const Projects = () => {
  const skill = [{ Name: 'Inventory Management Tool', Image: inventorylogo },
  { Name: 'Candidate Assesment Tool For HR', Image: candidatelogo },
  { Name: 'Student Information Management System', Image: studentlogo }]
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
            })}
        </Row>
      </Container>
    </div>
  )
}
