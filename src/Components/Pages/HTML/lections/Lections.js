import React from 'react'
import Dropdown from '../../../Shared/UI/Dropdown/Dropdown'
import './lections.css'

const LectionsHTML = () => {
	const items = [
		{
		  id: 1,
		  value: 'Урок №1',
		  link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hc' 
		},
		{
		  id: 2,
		  value: 'Урок №2',
		  link: 'https://www.youtube.com/watch?v=oBKaXB9CMMo'
		},
		{
		  id: 3,
		  value: 'Урок №3',
		  link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
		},
		{
			id: 4,
			value: 'Урок №4',
			link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
		},
		{
			id: 5,
			value: 'Урок №5',
			link: 'https://www.youtube.com/watch?v=nF0X9PRVOsA'
		  },
		  {
			id: 6,
			value: 'Урок №6',
			link: 'https://www.youtube.com/watch?v=nxtV-PwYkjU'
		  },
		  {
			id: 7,
			value: 'Урок №7',
			link: 'https://www.youtube.com/watch?v=jZR8m9djWXs'
		  },
		  {
			id: 8,
			value: 'Урок №8',
			link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hchttps://www.youtube.com/watch?v=abWbB4RYFYM'
		  },
		  {
			id: 9,
			value: 'Урок №9',
			link: 'https://www.youtube.com/watch?v=x55mwoVJ_IE'
		  },
		  {
			id: 10,
			value: 'Урок №10',
			link: 'https://www.youtube.com/watch?v=LOphfrzuxtc'
		  },
	  ];
  return (
	<div className='container'>
		<Dropdown title="Выберите урок" items={items} />
	</div>
  )
}

export default LectionsHTML