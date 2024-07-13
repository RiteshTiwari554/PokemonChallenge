import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const PokemonCard = ({ pokemon }) => {
  return (
    <Col>
      <Card style={{ width: 200, marginBottom:20, border: '2px solid #000', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' ,background:'bisque' }}>
        <Card.Img variant="top" src={pokemon.sprites.front_default} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonCard;
