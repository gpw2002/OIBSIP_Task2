import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import AmityWebDesign from '../../images/CERTIFICATES/026_Wani Gaurav Prakash(AmityUniversity-Web Design & Development).pdf'
import CourseraArchitectingwithGoogleComputeEngine from '../../images/CERTIFICATES/Coursera/026_Wani Gaurav Prakash(Coursera-Architecting with Google).pdf'

export const Certificates = () => {
  const cer = [{ Type: 'Training Certificate', Cername: 'Web Design and Devolopment', Imname: AmityWebDesign, Company: 'Amity University' },
  { Type: 'Google Cloud Training', Cername: 'Architecting with Google Compute Engine', Imname: CourseraArchitectingwithGoogleComputeEngine, Company: 'Coursera' },
  { Type: 'Training Certificate', Cername: 'Web Design and Devolopment', Imname: AmityWebDesign, Company: 'Amity University' }]

  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <Container>
        <Row>
          {
            cer.map((obj, index) => {
              const { Type, Cername, Imname, Company } = obj;
              return <Col>
                <Card style={{ width: '20rem' }}>
                  <iframe title='Resume' id='noscroll' src={Imname} ></iframe>
                  <Card.Body>
                    <Card.Text>{Type}</Card.Text>
                    <Card.Title><h4>{Cername}</h4></Card.Title>
                    <Button variant="primary" onClick={() => setLgShow(true)}>View Certificate</Button>
                  </Card.Body>
                  <Card.Footer>{Company}</Card.Footer>
                </Card>
                <Modal
                      id={index}
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                      className="text-center"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" style={{ textAlign: 'center' }}>
                          {Cername}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <iframe title='Resume' id='noscroll' src={Imname + "#toolbar=0"} width="100%" height="433px"></iframe>
                        </div>
                      </Modal.Body>
                    </Modal>
              </Col>
            })}
        </Row>
      </Container>
    </div>
  )
}
