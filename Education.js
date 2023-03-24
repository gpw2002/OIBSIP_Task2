import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rcpem from 'E:/MERN/NODEJS/portfolio/src/images/rcpem.jpg';
import Jrcol from '../../images/jrcoltarhadi.jpg';
import Rcpit from '../../images/rcpit.webp';

export const Education = () => {
  const edu = [{ Degree: 'S.S.C', Cname: 'R. C. Patel English Medium School, Shirpur', Branch: 'Maharshtra State Board', Iname: Rcpem, Grades: 'Secured an aggregate of 88.80%' },
  { Degree: 'H.S.C', Cname: 'Junior Science College, Tarhadi', Iname: Jrcol, Branch: 'Science', Grades: 'Secured an aggregate of 86.46%' },
  { Degree: 'B-Tech', Cname: 'R. C. Patel Insitute of Technology, Shirpur', Iname: Rcpit, Branch: 'Computer Engieering', Grades: 'Secured an aggregate of 8.14 CGPA' }]

  return (
    <div>
      <Container>
        <Row>
          {
            edu.map((obj, index) => {
              const { Degree, Cname, Iname, Branch, Grades } = obj;
              return <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Iname} />
                  <Card.Body>
                    <Card.Title>{Degree}</Card.Title>
                    <Card.Text><h5>{Cname}</h5></Card.Text>
                    <Card.Text>{Branch}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">{Grades}</Card.Footer>
                </Card>
              </Col>
            })}
        </Row>
      </Container>
    </div>
  )
}