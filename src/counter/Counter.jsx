import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction, counterRandom } from '../redux/actions/counterActions';
import { DEC, INC, OSTIRRESET, RAND, RESET } from '../redux/actionTypes/actionTypes';

const Counter = () => {

	const {counter} = useSelector((state)=>state)
	const dispatch = useDispatch()
 	return (
		<div className='mt-10'>
			<div className='card w-1/2 bg-base-100 shadow-xl m-auto'>
				<div className='card-body'>
					<h2 className='text-center text-5xl mb-3'> {counter} </h2>
					
					<div className='card-actions justify-center'>
						<button className='btn btn-active' onClick={()=>dispatch(counterAction(INC))}>Increment</button>
						<button className='btn btn-active btn-primary' onClick={()=>dispatch(counterAction(DEC))}>Decrement</button>
						<button className='btn btn-active btn-secondary' onClick={()=>dispatch(counterAction(RESET))}>Reset</button>
						<button className='btn btn-active btn-accent' onClick={()=>dispatch(counterAction(OSTIRRESET))}>Osthr Reset</button>
						<button className='btn btn-active btn-ghost' onClick={()=>dispatch(counterRandom(RAND,Math.floor(Math.random()*1000)))}>Random</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
