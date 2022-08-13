import styled from 'styled-components';

const HeaderStyle = styled.div`
	text-align: center;
	padding-top: 1rem;

	.wrapper {
		width: 320px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		padding: 2rem 1rem;
		margin: 0 auto;

		.input__wrapper {
			display: flex;
			padding-bottom: 5px;
			border-bottom: 1px solid var(--black);

			input {
				width: 100%;
				padding: 5px 10px;
				border: 0;

				::placeholder {
					color: var(--gray);
				}

				:focus {
					outline: none;
				}
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 90px;
			height: 30px;
			margin: 0 auto;
			padding: 2px 10px;
			border-radius: 5px;
			border: 0;
			background-color: var(--blue);
			color: var(--white);

			@media (min-width: 768px) {
				gap: 0.3rem;
			}
		}

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: center;
		}
	}
`;

export default HeaderStyle;
