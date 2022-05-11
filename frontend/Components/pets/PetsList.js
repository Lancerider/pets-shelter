import React from 'react';
import { useState, useEffect } from "react";

import PetsListItem from './PetsListItem'
import Loader from '../common/Loader'
import NoPetsFound from './NoPetsFound'
import GeneralError from '../common/errors/GeneralError'

import './style/PetsList.scss'

const PetsList = () => {

  const [pets, setPets] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setErrorLoading(false)
    setLoading(true)

    try {
      const response = await fetch(
        "http://localhost:3000/pets",
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


  return (
    <div>
      { errorLoading && <GeneralError />}

      { loading && <Loader />}

      {
        !errorLoading && !loading && (
          pets && pets.length > 0
            ? <div className="pets__container">
                { pets.map((pet) => (<PetsListItem pet={ pet } key={ pet.id }/>)) }
              </div>
            : <NoPetsFound />
          )
      }
    </div>

  )
};

export default PetsList;
