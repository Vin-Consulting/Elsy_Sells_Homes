'use client';
import { useState } from 'react';
import styles from './footer.module.css';
import { Newsreader } from 'next/font/google';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import Form from './Form';
import { isValidEmail } from '@/utils/validation';

const reader = Newsreader({
	subsets: ['latin'],
	weight: ['300'],
	display: 'swap',
});

const Footer = () => {
	const [email, setEmail] = useState<string>('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (isValidEmail(email)) {
			alert('email is valid!');
		} else {
			alert('email is invalid!');
		}
	};

	const inputCss =
		'p-1 w-full max-w-xs text-white bg-transparent border-b-2 border-white text-[16px] placeholder:text-white placeholder:text-[12px] focus:outline-none';

	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className='flex flex-col justify-center items-center text-center w-full max-w-sm'>
					<div className={`${styles.content} `}>
						<h2 className='uppercase text-white'>Elcy & Co. Realty Gazette</h2>
						<p className={`${reader.className} text-white`}>
							Subscribe to the Gazette and be the first to receive the latest
							news on listings
						</p>
					</div>
					<form
						className='flex flex-col w-full justify-center items-center'
						onSubmit={handleSubmit}>
						<input
							type='email'
							placeholder='Email Address'
							className={inputCss}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<button
							type='submit'
							className='text-white m-2 p-2 bg-orange-400 w-[100px]'>
							Submit
						</button>
					</form>
				</div>

				<div className='flex flex-col justify-center items-center gap-[10px]'>
					<div className='flex flex-col justify-center items-center mr-1 md:mr-2'>
						<Image
							src='/esh_logo.png'
							alt='esh_logo'
							width={100}
							height={100}
							className='w-[80px] md:w-[100px]'
						/>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-white font-semibold'>
							Elcy & Co. Realty, LLC.
						</h1>
						<a
							className='text-white'
							href='tel:+15403230675'>
							+1 (540) 323-0675
						</a>
					</div>

					<div className={styles.links}>
						<FaInstagram />
						<FaYoutube />
						<FaTwitter />
						<FaFacebook />
					</div>
				</div>
				<div className='flex flex-row gap-5 justify-end items-end bottom-0 right-0'>
					<div>
						<Image
							src='/mls_logo.png'
							alt='mls_logo'
							width={100}
							height={100}
							className='w-[80px] md:w-[100px]'
						/>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					Copyright © {new Date().getFullYear()} Elcy & Co. Realty. All rights
					reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
