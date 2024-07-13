import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Form className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search Pokemon"
        onChange={handleSearchChange}
      />
    </Form>
  );
};

export default SearchBar;
