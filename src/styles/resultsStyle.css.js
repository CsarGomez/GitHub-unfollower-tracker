import styled from 'styled-components';

export const ResultsStyle = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;

	section {
		height: 450px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		div {
			display: grid;
			justify-items: center;
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
		p {
			text-align: center;
		}
	}
	@media (min-width: 768px) {
		flex-direction: row;
	}

	.gray {
		padding: 1rem 2rem;
		border-radius: 10px;
		background-color: var(--whitesmoke);
	}

	.border {
		padding: 1rem 2rem;
		border-radius: 10px;
		border: 2px solid var(--whitesmoke);
	}
`;
