import React from 'react';

const Counter = () => {
	return (
		<div className='mt-10'>
			<div className='card w-1/2 bg-base-100 shadow-xl m-auto'>
				<div className='card-body'>
					<h2 className='text-center text-5xl mb-3'> 0 </h2>
					
					<div className='card-actions justify-end'>
						<button className='btn btn-active'>Increment</button>
						<button className='btn btn-active btn-primary'>Decrement</button>
						<button className='btn btn-active btn-secondary'>Reset</button>
						<button className='btn btn-active btn-accent'>Osthr Reset</button>
						<button className='btn btn-active btn-ghost'>Random</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
