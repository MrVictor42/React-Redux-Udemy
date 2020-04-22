import React from 'react';
import User from './User';
import photo from './user.png';

function Victor() {
  return (
    <div>
        Eu sou um componente chamado Victor
        <User name = { 'Victor' } photo = { photo }/>
    </div>
  );
}

export default Victor;
