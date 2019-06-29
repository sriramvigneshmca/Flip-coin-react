import React from 'react';
import './Button.css';
const Button=({Value,Change})=>{
	return(
		<div className="tc">
	<button id={Value} onClick={Change}>Flip Coin</button>

	</div>
	);
}
export default Button;