import React from 'react';
import './style/PetsListItem.scss'

const Pet = ({ petData: pet }) => (
  <li className="PetsListItem">
    <PetIcon className="PetsListItem__icon" alt="Pet Icon" />
    <div>
      <div>
        <strong>
          { pet.name }
        </strong>
      </div>
      <div className="Shelter__name">
        {pet.shelter}
      </div>
      <div>{pet.age}</div>
    </div>
  </li>
)

export default Pet