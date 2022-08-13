import github from '../assets/github.svg';
import search from '../assets/search.svg';
import HeaderStyle from '../styles/headerStyle.css';
import { useState, useEffect, useRef, useContext } from 'react';
import { fetchPagination } from '../helpers/fetch';
import { getUnfollowers } from '../helpers/getUnfollowers';
import { FollowersContext } from '../context/followersContext';
import { UnfollowersContext } from '../context/unfollowersContext';

export default function Header() {
	const refUserInput = useRef('');
	const [user, setUser] = useState('');
	const [loader, setLoader] = useState(false);
	const { SetUnfollowing } = useContext(FollowersContext);
	const { SetUnfollowers } = useContext(UnfollowersContext);

	const handleClick = () => {
		setUser(refUserInput.current.value.toLowerCase());
		refUserInput.current.value = '';
	};

	useEffect(() => {
		if (user === '') return;

		const getData = async () => {
			const followersUrl = `https://api.github.com/users/${user}/followers?per_page=100`;
			const followingUrl = `https://api.github.com/users/${user}/following?per_page=100`;

			setLoader(true);

			const [follower, following] = await Promise.all([
				fetchPagination(followersUrl),
				fetchPagination(followingUrl),
			]);

			SetUnfollowers(getUnfollowers(follower, following));
			SetUnfollowing(getUnfollowers(following, follower));

			setLoader(false);
		};

		getData();
	}, [user]);

	console.log(user);

	return (
		<HeaderStyle>
			<h3>GitHub unfollow tracker</h3>

			<div className='wrapper'>
				<div className='input__wrapper'>
					<img src={github} alt='GitHub logo' />
					<input
						ref={refUserInput}
						type='text'
						name='user'
						placeholder='your GitHub user here...'
						required
					/>
				</div>

				<button onClick={handleClick}>
					{loader ? 'Loading' : 'Search'}
					<img src={search} alt='search icon' />
				</button>
			</div>
		</HeaderStyle>
	);
}
