import link from '../assets/link.svg';
import PropTypes from 'prop-types';
import { CardStyle } from '../styles/cardStyle.css';

const Card = ({ color, data }) => {
	console.log(data);
	return (
		<div>
			{data.map(item => (
				<CardStyle
					key={item.id}
					style={
						color
							? { backgroundColor: '#ffffff' }
							: { backgroundColor: '#f2f2f2' }
					}
				>
					<img src={item.avatar_url} alt='user image' />
					<p>{item.login}</p>
					<a href={item.html_url} target='_blank' rel='noreferrer'>
						<img src={link} alt='link icon' />
					</a>
				</CardStyle>
			))}
		</div>
	);
};

export default Card;

Card.propTypes = {
	color: PropTypes.bool,
	data: PropTypes.array,
};
