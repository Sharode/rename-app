import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { SignoutButton } from './helpers/authButton';

export default function AuthApp() {
	return (
		<div>
			<h1>Auth App</h1>
			<SignoutButton AUTH={netlifyIdentity} />
		</div>
	);
}
