import React from 'react';
import styles from './video.module.css';
import Image from 'next/image';
import Underlined from './Underlined';

const Video = ({
	title_l1 = 'Unlocking Doors',
	title_l2 = 'To',
	title_l3 = 'Your Dreams',
	video = '/esh_1.mp4',
	pl1 = 'REALTOR',
	pl2 = 'SINCE 2002',
	isLoading = false,
	text = '',
	urlLink = '',
}) => {
	return (
		<div className={styles.page}>
			<video
				className={styles.vid}
				src={video}
				autoPlay
				muted
				loop
			/>
			<div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-transparent m-auto uppercase gap-[2rem] z-10 md:z-0'>
				<h2 className='text-xl md:text-[2.6rem] tracking-[3px] text-center'>
					{title_l1} <br /> <br /> {title_l2} <br /> <br /> {title_l3}
				</h2>
				<p className='text-sm md:text-base text-center font-semibold tracking-[3px] leading-5'>
					{pl1}
					<br /> {pl2}
				</p>
				{isLoading && (
					<Underlined
						text={text}
						urlLink={urlLink}
					/>
				)}
			</div>
			{/* {!isLoading && (
				<Image
					alt='dog'
					className={styles.img}
					src='/dog.gif'
					width={150}
					height={150}
				/>
			)} */}
		</div>
	);
};

export default Video;
