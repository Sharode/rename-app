import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { AuthController, useUserContext } from './Context';
import PublicApp from './PublicApp';
import AuthApp from './AuthApp';
// import netlifyIdentity from 'netlify-identity-widget';

function App() {
	// const user = netlifyIdentity.currentUser();
	// console.log(user);
	return (
		<Router>
			<AuthController>
				<AuthOrLogin />
			</AuthController>
		</Router>
	);
}

const AuthOrLogin = () => {
	const user = useUserContext();
	console.log(user);
	return user !== null ? <AuthApp /> : <PublicApp />;
};

export default App;
