'use client';
import styles from './burgermenu.module.css';
import Link from 'next/link';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { FaEye, FaMapMarkerAlt } from 'react-icons/fa';
import { Burger } from '@/interfaces/burger';

const BurgerMenu = () => {
	const burgerLinks = {
		Catalog: '/catalog',
		Team: '/team',
		Buyers: '/buyers',
		Sellers: '/sellers',
	};
	return (
		<MenuList className='flex flex-col bg-[#306f44] shadow-2xl border-none scale-110 p-2 z-20 rounded-lg min-w-[100px] lg:min-w-[200px]'>
			{Object.entries(burgerLinks).map(([key, value]) => (
				<Link
					key={key}
					href={value}
					className='p-2 duration-300 rounded-lg hover:bg-gray-300 hover:text-black'>
					<MenuItem>{key}</MenuItem>
				</Link>
			))}
		</MenuList>
	);
};

export default BurgerMenu;
