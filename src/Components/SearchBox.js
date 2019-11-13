import React from 'react';


const s1 = ({searchfield,SearchChnage}) =>{
	return(

		<div className='pa2'>
			<input 
			className='pa3 b--green bgr-lightest-green'
			type = 'search'
			 placeholder = 'search robots'
			 onChange = {SearchChnage}			
		     />
		</div>
	);
}

export default s1;