import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import { Container, Row, Col } from 'reactstrap';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid>
        <Row>
           <Col md="2">
             <div className="d-none d-xl-block">
               <SideMenu />
             </div>
           </Col>

           <Col md="10">
              <main>
                <Artist />
                <AlbumGrid />
              </main>
           </Col>

        </Row>
        </Container>
      </div>
    );
  }
}


export default App;


