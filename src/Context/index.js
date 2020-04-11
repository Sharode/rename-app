import React, { createContext, useState, useContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const UserContext = createContext(null);
const SetUserContext = createContext(null);

export const useUserContext = () => {
	const user = useContext(UserContext);
	console.log(!user);
	// if (!user) throw new Error('Used outside of user context');
	return user;
};

export const useSetUserContext = () => {
	const setUser = useContext(SetUserContext);
	// if (!setUser) throw new Error('Used outside of setUser context');
	return setUser;
};

export const AuthController = ({ children }) => {
	const [ user, setUser ] = useState(netlifyIdentity.currentUser());
	return (
		<UserContext.Provider value={user}>
			<SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
		</UserContext.Provider>
	);
};
