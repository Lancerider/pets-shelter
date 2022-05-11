import React from 'react';

import PetIcon from './PetIcon';

const Pet = ({ pet }) => (
  <div className="pet">
    <PetIcon petType={ pet.type }  alt="Pet Icon" />
    <div className='pet__details'>
      <div className="pet__name">
        { pet.name }
      </div>
      <div className="pet__type">
        { pet.type }
      </div>
      <div className="pet__status">{ pet.status }</div>
      <div className="pet__shelter">
        { pet.shelter }
      </div>
      <div className="pet__some">{ pet.someOther }</div>
    </div>
  </div>
)

export default Pet