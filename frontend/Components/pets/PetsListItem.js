import React from 'react';

import PetIcon from './PetIcon';

const Pet = ({ pet }) => (
  <div className="pet">
    <PetIcon petType={ pet.type.key }  alt="Pet Icon" />
    <div className='pet__details'>
      <div className="pet__name">
        { pet.name }
      </div>
      <div className="pet__status">
        Status: <span className='info'>{ pet.status.title }</span>
      </div>
      <div className="pet__shelter">
        { `Shelter: ${pet.shelter.name}` }
      </div>
      { pet.someOther && <div className="pet__some">{ `Notes: ${pet.someOther}` }</div> }
    </div>
  </div>
)

export default Pet
