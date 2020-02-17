import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './Content.css';

import GTS from '../../devices/GTS';
import Preview from '../device/preview/Preview';

class Content extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={4}><Preview device={GTS} showExample={true} /></Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Content;
