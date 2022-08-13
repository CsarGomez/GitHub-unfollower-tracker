import styled from 'styled-components';

export const CardStyle = styled.div`
	width: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px 10px;
	margin: 1rem 0;
	border-radius: 10px;
	.white {
		background-color: var(--white);
	}
	.whitesmoke {
		background-color: whitesmoke;
	}
	p {
		margin: 0.3rem 0;
	}
	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	a img {
		width: 15px;
		height: 15px;
		border-radius: 0;
	}
`;
