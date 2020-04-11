import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { AuthButton } from './helpers/authButton';
export default function PublicApp() {
	// const handleClick = () => {
	// 	netlifyIdentity.open('login');
	// 	netlifyIdentity.on('login', (user) => setUser(user));
	// };
	return (
		<div>
			<h1>Public App</h1>
			<AuthButton AUTH={netlifyIdentity} />
		</div>
	);
}
