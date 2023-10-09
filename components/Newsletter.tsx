'use client';
import React, { useState } from 'react';
// import Image from 'next/image';
// import { Newsreader } from 'next/font/google';

import Form from './Form';
import { ContactForm } from '@/interfaces/form';
import styles from './newsletter.module.css';

// const reader = Newsreader({
// 	subsets: ['latin'],
// 	weight: ['300'],
// 	display: 'swap',
// });

export default function Newsletter() {
	const [phoneNumber, setPhoneNumber] = useState<string>('');

	const handlePhoneNumberChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const inputPhoneNumber = event.target.value;
		const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
		setPhoneNumber(formattedPhoneNumber);
	};

	const formatPhoneNumber = (phoneNumber: string): string => {
		const digitsOnly = phoneNumber.replace(/\D/g, '');
		if (digitsOnly.length <= 3) return digitsOnly;
		if (digitsOnly.length <= 7)
			return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
		return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
			3,
			6
		)}-${digitsOnly.slice(6, 10)}`;
	};

	const isValidPhoneNumber = (phoneNumber: string): boolean => {
		const digitsOnly = phoneNumber.replace(/\D/g, '');
		return digitsOnly.length >= 10;
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (isValidPhoneNumber(phoneNumber)) {
			alert(`Submitted phone number: ${phoneNumber}`);
		} else {
			alert('Please enter a valid phone number.');
		}
	};
	return (
		<div className='flex flex-col justify-center items-center py-[5rem]'>
			<div className='uppercase font-light tracking-[3px] text-[#183f26] md:text-3xl mb-5'>
				<h2>Get in touch with us</h2>
			</div>
			<div className='w-full max-w-xs md:max-w-lg'>
				<Form
					handleSubmit={handleSubmit}
					phoneNumber={phoneNumber}
					handlePhoneNumberChange={handlePhoneNumberChange}
				/>
			</div>
		</div>
	);
}
