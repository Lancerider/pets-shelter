import React from 'react';
import { useState, useEffect } from "react";

import './style/PetModal.scss'

import PetsListItem from './PetsListItem'

const PetModal = (props) => {
  const pet = {...props.pet}

  const [formError, setFormError] = useState(null)
  const [isEditingPet, setIsEditingPet] = useState(false)
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    id: pet.id,
    name: pet.name,
    status: pet.status.id,
    owner: pet.owner?.id,
    shelter: pet.shelter?.id,
  })

  const updatePetData = async () => {
    setFormError(null)
    setLoading(true)

    try {
      const response = await fetch(
        `http://localhost:3000/pets/${formValues.id}`,
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

    props.closeModal()
  }

  const handleEditingState = (event, value) => {
    event.preventDefault();
    setIsEditingPet(value)
  }

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

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
              {/* <div className="form__input">
                <label>Animal type</label>
                <input
                  onChange={handleChange}
                  type="select"
                  name="type"
                  className="input"
                  value={formValues.type}
                />
              </div> */}

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
          <PetsListItem pet={ pet } onClick={() => {}}></PetsListItem>
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
