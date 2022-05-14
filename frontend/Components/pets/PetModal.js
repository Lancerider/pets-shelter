import React from 'react';
import { useState, useEffect } from "react";

import './style/PetModal.scss'

import PetCard from './PetCard'

const PetModal = (props) => {
  const pet = {...props.pet}

  const [formError, setFormError] = useState(null)
  const [isEditingPet, setIsEditingPet] = useState(false)
  const [loading, setLoading] = useState(false);

  const [owners, setOwners] = useState(null);
  const [shelters, setShelters] = useState(null);
  const [petTypes, setPetTypes] = useState(null);
  const [petStatus, setPetStatus] = useState(null);

  const [formValues, setFormValues] = useState({
    id: pet.id,
    name: pet.name,
    type: pet.type.id,
    status: pet.status.id,
    owner: pet.owner?.id,
    shelter: pet.shelter?.id,
  })

  const getData = async (endpoint, setter) => {
    setFormError(null)
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${endpoint}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
          },
        }
      );

      const data = await response.json()

      setter(data.data)

    } catch (error) {
      setFormError(error)
    }

    setLoading(false)
  };

  const updatePetData = async () => {
    setFormError(null)
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/pets/${formValues.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(formValues)
        }
      );

      const data = await response.json()
      setLoading(false)

      if (data.error) {
        setFormError(data)
        return
      }

      props.closeModal(true)

    } catch (error) {
      setFormError(error)
      setLoading(false)
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updatePetData()
  }

  const handleInsideModal = (event) => {
    event.stopPropagation();
  }

  const handleCloseModal = (event) => {
    event.preventDefault();

    props.closeModal(false)
  }

  const handleEditingState = (event, value) => {
    event.preventDefault();
    setIsEditingPet(value)
  }

  const handleChange = (event) => {
    // Todo: handle validations

    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    getData('owners', setOwners);
    getData('shelters', setShelters);
    getData('pets/types', setPetTypes);
    getData('pets/status', setPetStatus);
  }, []);

  return (
    <div className="pet__modal" onClick={ handleCloseModal }>
      <div className="modal__container" onClick={ handleInsideModal }>
        <div className="title">
          { isEditingPet ? 'Edit Pet' : 'Details' }
        </div>
        { isEditingPet ? (
          <div className="form__container">
            <form id="petForm" onSubmit={handleSubmit}>

              <div className="form__input">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="input"
                  value={formValues.name}
                />
              </div>

              <div className="form__input">
                <label>Animal type</label>
                <select
                  onChange={handleChange}
                  name="type"
                  className="input"
                  value={formValues.type}
                >
                  {
                    petTypes.map(type => (
                      <option value={ type.id } key={ type.id } >{ type.title }</option>
                    ))
                  }
                </select>
              </div>

              <div className="form__input">
                <label>Status</label>
                <select
                  onChange={handleChange}
                  name="status"
                  className="input"
                  value={formValues.status}
                >
                  {
                    petStatus.map(status => (
                      <option value={ status.id } key={ status.id } >{ status.title }</option>
                    ))
                  }
                </select>
              </div>

              <div className="form__input">
                <label>Shelter</label>
                <select
                  onChange={handleChange}
                  name="shelter"
                  className="input"
                  value={formValues.shelter}
                >
                  {
                    shelters.map(shelter => (
                      <option value={ shelter.id } key={ shelter.id } >{ shelter.name }</option>
                    ))
                  }
                </select>
              </div>

              <div className="form__input">
                <label>Owner</label>
                <select
                  onChange={handleChange}
                  name="owner"
                  className="input"
                  value={formValues.owner}
                >
                  {
                    owners.map(owner => (
                      <option value={ owner.id } key={ owner.id } >{ owner.name }</option>
                    ))
                  }
                </select>
              </div>

              {formError
                && (<p className="error">{formError.message}</p>)}
              <input
                type='submit'
                id="submit__form"
                className="input__send"
                title='Save'
              />
            </form>
          </div>
        )
        : (
          <PetCard pet={ pet } onClick={() => {}} showMoreDetails></PetCard>
        )
      }

      <div className="buttons">
        { isEditingPet
            ? (
              <div className="buttons">
                <button onClick={ (event) => handleEditingState(event, false) } className="cancel">
                  Cancel
                </button>
                { !loading &&
                  <label htmlFor='submit__form' tabIndex="0">Send</label>
                }
              </div>
            )
            : (
              <div className="buttons">
                <button onClick={ () => props.closeModal(false) } className="close">
                  Close
                </button>
                <button onClick={ (event) => handleEditingState(event, true) } className="edit">
                  Edit Pet
                </button>
              </div>
            )
        }
    </div>
      </div>
    </div>
  )
}

export default PetModal
