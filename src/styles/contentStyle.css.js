import styled from 'styled-components';

const ContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 0 2rem;

	section {
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 5px 0;
		padding: 5px 20px;
		background-color: var(--whitesmoke);
		border-radius: 10px;

		a {
			text-decoration: underline;
			color: var(--black);
		}
		a:hover {
			color: var(--blue);
		}
	}
`;

export default ContentStyle;
