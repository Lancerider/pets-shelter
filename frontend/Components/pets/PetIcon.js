import React from 'react';

import './style/PetIcon.scss'

const PetIcon = ({ petType }) => {
  const petTypeList = {
    dog: {
      title: 'Dog',
      image: './dog-icon.svg',
    },
    cat: {
      title: 'Cat',
      image: './cat-icon.svg',
    },
  }

  const pet = petTypeList[petType]

  const images = require.context('../../assets/icons', true);

  return (
    <img src={ images(pet.image).default } className="pet__icon" alt={ pet.title } />
  )
}

export default PetIcon