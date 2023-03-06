import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import changeColor from '../redux/actions/colorActions';
import { AUTO, BLUE, GREEN, ORANGE, PINK, RED } from '../redux/actionTypes/actionTypes';

const ChangeColor = () => {
    const {color} = useSelector((state)=>state)
	const dispatch = useDispatch()
 	return (
		<div className='mt-10'>
			<div className={`card w-1/2 bg-${color}-100 shadow-xl m-auto`}>
				<div className='card-body'>
					<h2 className='text-center text-5xl mb-3'> {color} </h2>
					
					<div className='card-actions justify-center'>
						<button className='btn btn-active' onClick={()=>dispatch(changeColor(RED))}>RED</button>
						<button className='btn btn-active btn-primary' onClick={()=>dispatch(changeColor(GREEN))}>GREEN</button>
						<button className='btn btn-active btn-secondary' onClick={()=>dispatch(changeColor(BLUE))}>BLUE</button>
						<button className='btn btn-active btn-accent' onClick={()=>dispatch(changeColor(PINK))}>PINK</button>
						<button className='btn btn-active btn-ghost' onClick={()=>dispatch(changeColor(ORANGE))}>ORANGE</button>
						<button className='btn btn-active btn-ghost' onClick={()=>dispatch(changeColor(AUTO))}>AUTO</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeColor;