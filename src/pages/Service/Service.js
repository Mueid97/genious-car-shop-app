import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Service = ({service}) => {
    const { name, price, description, img } = service;
    return (
        <div>
            <Row >
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <p>Price: {price}</p>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Service;