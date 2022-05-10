import React from 'react';
import PetsList from '../Components/pets/PetsList'
import'./style/Home.scss'

function Home() {
	return (
		<div className="home">
      <h2 className='title'>My pets</h2>
			<PetsList />
		</div>
	)
}

export default Home