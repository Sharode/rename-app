import React from 'react';
import { useSetUserContext } from '../Context';

export const AuthButton = ({ AUTH }) => {
	const setUser = useSetUserContext();

	const handleClick = () => {
		AUTH.open('login');
		AUTH.on('login', (user) => setUser(user));
	};

	return (
		<button className="m-2 p-2 bg-blue-600 rounded-lg text-base text-white font-bold" onClick={handleClick}>
			login
		</button>
	);
};

export const SignoutButton = ({ AUTH }) => {
	const setUser = useSetUserContext();

	const handleClick = () => {
		AUTH.logout();
		setUser(null);
	};

	return (
		<button className="m-2 p-2 bg-blue-600 rounded-lg text-base text-white font-bold" onClick={handleClick}>
			Log out
		</button>
	);
};
