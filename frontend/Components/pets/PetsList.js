import React from 'react';
import { useState, useEffect } from "react";

import PetCard from './PetCard'
import PetModal from './PetModal'
import Loader from '../common/Loader'
import NoPetsFound from './NoPetsFound'
import GeneralError from '../common/errors/GeneralError'

import './style/PetsList.scss'

const PetsList = () => {

  const [pets, setPets] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(false);

  const getData = async () => {
    setErrorLoading(false)
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/pets`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
          }
        }
      );

      const petsData = (await response.json()).data;

      setPets(petsData);
    } catch (error) {
      setErrorLoading(true)
    }

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  const handleModalClick = (pet) => {
    setModalData(pet)
  }

  const handleClose = (value) => {
    setModalData(null)

    if (value) {
      getData()
    }
  }


  return (
    <div className='pets__container'>
      { errorLoading && <GeneralError />}

      { loading && <Loader />}

      {
        !errorLoading && !loading && (
          pets && pets.length > 0
            ? <div className="pets__list">
                { pets.map((pet) => (<PetCard pet={ pet } key={ pet.id } onClick={ () => handleModalClick(pet) } />)) }
              </div>
            : <NoPetsFound />
          )
      }

      {
        modalData && (
            <PetModal pet={ modalData } closeModal={ handleClose } />
          )
      }
    </div>

  )
};

export default PetsList;
