import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const FollowersContext = createContext();

export const FollowersProvider = ({ children }) => {
	const [unfollowing, SetUnfollowing] = useState();

	return (
		<FollowersContext.Provider value={{ unfollowing, SetUnfollowing }}>
			{children}
		</FollowersContext.Provider>
	);
};

FollowersProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
