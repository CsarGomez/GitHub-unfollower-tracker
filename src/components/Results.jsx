import Card from './Card';
import Content from './Content';
import { useContext } from 'react';
import { ResultsStyle } from '../styles/resultsStyle.css';
import { FollowersContext } from '../context/followersContext';
import { UnfollowersContext } from '../context/unfollowersContext';

const Results = () => {
	const { unfollowing } = useContext(FollowersContext);
	const { unfollowers } = useContext(UnfollowersContext);

	if (!unfollowing || !unfollowers) return <Content />;

	console.log(unfollowing);

	return (
		<ResultsStyle>
			<section className='gray'>
				<h4>Are not following you back</h4>
				{!unfollowers.length ? (
					<p>
						cool! &#127881; <br /> You don&apos;t have unfollowers yet
					</p>
				) : (
					<Card color={true} data={unfollowers} />
				)}
			</section>

			<section className='border'>
				<h4>You are not following back</h4>
				{!unfollowing.length ? (
					<p>
						Great! &#127881; <br /> You are following all your followers
					</p>
				) : (
					<Card color={false} data={unfollowing} />
				)}
			</section>
		</ResultsStyle>
	);
};

export default Results;
