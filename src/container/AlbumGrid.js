import React, { Component } from 'react';
import Album from '../component/Album';
import { Container, Row, Col } from 'reactstrap';

export default class AlbumGrid extends Component {
  render() {
    return (
      <div>

      <Row>
        <Col md={{size:10}}>
        <h2>Top Album</h2>
        </Col>
       <Col md={{size:2}}>
        <div>

        
          <a class="station" href="#">Start Station</a>
          
       
        </div>
         </Col>
        </Row>
        <section id="albums">
        <Col sm="1" md="12" xl="10">
          <Album
            image="img/album/album_01.png"
            nom="Native (Deluxe)"
            artist="OneRepublic"
            song={17}
          />
          <Album
            image="img/album/album_02.png"
            nom="Wax Wings"
            artist="Joshua Radin"
            song={11}
          />
          <Album
            image="img/album/album_03.png"
            nom="Wax Modern Vampires of th..."
            artist="Vampire Weekend"
            song={12}
          />
          <Album
            image="img/album/album_04.png"
            nom="Night Visions"
            artist="Imagine Dragons"
            song={11}
          />
          <Album
            image="img/album/album_05.png"
            nom="Trouble Will Find Me"
            artist="The National"
            song={13}
          />
          <Album
            image="img/album/album_06.png"
            nom="Native (Deluxe)"
            artist="OneRepublic"
            song={17}
          />
          <Album
            image="img/album/album_07.png"
            nom="Wax Wings"
            artist="Joshua Radin"
            song={11}
          />
          <Album
            image="img/album/album_08.png"
            nom="Modern Vampires of th..."
            artist="Vampire Weekend"
            song={12}
          />
          <Album
            image="img/album/album_09.png"
            nom="Night Visions"
            artist="Imagine Dragons"
            song={11}
          />
          <Album
            image="img/album/album_10.png"
            nom="Trouble Will Find Me"
            artist="The National"
            song={13}
          />
          </Col>
        </section>
        
      </div>
    );
  }
}
