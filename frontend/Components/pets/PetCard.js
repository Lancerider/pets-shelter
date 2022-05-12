import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns'

import PetIcon from './PetIcon';
import './style/PetCard.scss'

const Pet = (props) => {
  const { pet, onClick } = props

  const dayPassed = formatDistanceToNow(parseISO(pet.lastStatusUpdate))

  return (
    <div className="pet" onClick={ onClick }>
      <PetIcon petType={ pet.type.id }  alt="Pet Icon" />
      <div className='pet__details'>
        <div className="pet__name">
          { pet.name }
        </div>
        <div className="pet__data">
          <div className='label'>Status: </div>
          <span className='info'>{ pet.status.title }</span>
        </div>
        <div className="pet__data">
          <div className='label'>Status changed: </div>
          <span className='info'>{ dayPassed }</span>
        </div>
        <div className="pet__data">
          <div className='label'>Shelter: </div>{ pet.shelter.name }
        </div>
        { props.showMoreDetails && (
          <React.Fragment>
            <div className="pet__data">
              <div className='label'>Shelter Address: </div>
              { pet.shelter.address }
            </div>
            <div className="pet__data">
              <div className='label'>Owner: </div>
              { pet.owner.name }
            </div>
            {
              pet.owner.address && (
                <div className="pet__data">
                  <div className='label'>Owner Address: </div>
                  { pet.owner.address }
                </div>
              )
            }
          </React.Fragment>
        )}
        { pet.someOther && (
            <div className="pet__data">
              <div className='label'>Owner Address: </div>
              { pet.someOther }
            </div>
          )
        }
      </div>
    </div>
  )
}


export default Pet
