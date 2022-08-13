import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const UnfollowersContext = createContext();

export const UnfollowersProvider = ({ children }) => {
	const [unfollowers, SetUnfollowers] = useState();

	return (
		<UnfollowersContext.Provider value={{ unfollowers, SetUnfollowers }}>
			{children}
		</UnfollowersContext.Provider>
	);
};

UnfollowersProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
