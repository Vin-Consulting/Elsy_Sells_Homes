'use client';
import dynamic from 'next/dynamic';

const MyAwesomeMap = dynamic(() => import('@/components/Map'), {
	ssr: false,
});
import React, { useRef } from 'react';

import styles from './catalog.module.css';
import SingleProduct from '@/components/SingleProduct';

export default function Catalog() {
	const data = [
		{
			id: 1,
			image:
				'https://photos.zillowstatic.com/fp/aaff97638bc561342d00d281f56d0421-cc_ft_1536.webp',
			title: 'Spring Hill Valley',
			desc: '102 Nutmeg Ln, Winchester, VA 22602',
			number: '+1 2128130005',
			date: '8/25/23',
			time: '10:00 — 19:00',
			code: [39.13637489010904, -78.19649670330648],
		},
	];
	const mapRef = useRef(null);

	const handleClick = (d) => {
		const { current = {} } = mapRef;
		if (current != {}) {
			mapRef.current.setView(d);
		}
	};
	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.map}>
					<MyAwesomeMap
						data={data}
						mapRef={mapRef}
					/>
				</div>
				<div className={styles.data}>
					<div className={styles.info}>
						<h1 className='uppercase'>Find your future home</h1>
					</div>
					<div className={styles.products}>
						{data.map((d) => {
							return (
								<SingleProduct
									key={d.id}
									title={d.title}
									image={d.image}
									number={d.number}
									desc={d.desc}
									time={d.time}
									date={d.date}
									code={d.code}
									handleClick={handleClick}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
