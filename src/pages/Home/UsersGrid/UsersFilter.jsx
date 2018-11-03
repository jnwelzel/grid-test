import React from 'react';

import InputGroup from '../../../components/InputGroup';

const UsersFilter = () => (
  <form>
    <InputGroup>
      <input type="search" />
      <button type="submit">Filter Users</button>
    </InputGroup>
  </form>
);

export default UsersFilter;
