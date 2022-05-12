import React from 'react';
import { useState, useEffect } from "react";

import './style/PetModal.scss'

import PetsListItem from './PetsListItem'

const PetModal = (props) => {
  const pet = {...props.pet}

  const [isEditingPet, setIsEditingPet] = useState(false)
  const [formValues, setFormValues] = useState(() => ({
    name: pet.name,
    status: pet.status.id,
    owner: pet.owner?.id,
    shelter: pet.shelter?.id,
  }))

  const handleSubmit = (event) => {
    //
  }

  const handleInsideModal = (event) => {
    event.stopPropagation();
  }

  const handleEditingState = (event, value) => {
    event.preventDefault();
    setIsEditingPet(value)
  }

  const handleOnChange = (event) => {
    //
  }

  return (
    <div className="pet__modal" onClick={ props.closeModal }>
      <div className="modal__container" onClick={ handleInsideModal }>
        <div className="title">
          { isEditingPet ? 'Edit Pet' : 'Details' }
        </div>


        { isEditingPet ? (
          <div className="form__container">
            <form id="petForm" onSubmit={handleSubmit} action="">
              {/* <div className="form__input">
                <label>Name</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  name="name"
                  className="label"
                  value={formValues.name}
                />
              </div>

              {error
                && (<p className="text-danger">{error.message}</p>)} */}
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
                <label for="submit__form" tabindex="0">Send</label>
              </div>
            )
            : (
              <div className="buttons">
                {/* <button onClick={ (event) => handleEditingState(event, true) } className="edit">
                  Edit Pet
                </button> */}
              </div>
            )
        }
    </div>
      </div>
    </div>
  )
}

export default PetModal
