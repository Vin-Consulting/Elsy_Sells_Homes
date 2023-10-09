import { ContactForm } from '@/interfaces/form';
import React from 'react';
import './footer.module.css';

export default function Form({
	handleSubmit,
	phoneNumber,
	handlePhoneNumberChange,
}: ContactForm) {
	const inputCss =
		'p-1 w-full text-black bg-transparent border-b-[1px] border-black text-[16px] placeholder:text-black placeholder:text-[12px] focus:outline-none mb-7';

	const areaCss =
		'p-1 w-full h-[200px] text-black bg-transparent border-[1px] border-black text-[16px] placeholder:text-black placeholder:text-[12px] focus:outline-none mb-7';
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Name'
				className={inputCss}
			/>
			<input
				type='tel'
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
				placeholder='Phone number'
				className={inputCss}
			/>

			<input
				type='email'
				placeholder='Email Address'
				className={inputCss}
			/>
			<textarea
				className={areaCss}
				placeholder='Enter Message'
			/>
			<div className='flex flex-col justify-center items-center'>
				<button
					type='submit'
					className='text-[#355741] px-[5px] py-[10px] border-b-[1px] border-orange-400 uppercase w-[100px]'>
					Submit
				</button>
			</div>
		</form>
	);
}
