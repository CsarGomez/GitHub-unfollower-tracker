import ContentStyle from '../styles/contentStyle.css';

export default function Content() {
	return (
		<ContentStyle>
			<section>
				<p>Check who is unfollowed you and who you do not follow back</p>
			</section>
			<section>
				<h4>How does it work?</h4>
				<p>
					Pretty simple. just type your GitHub user in the search box and hit
					search
				</p>
			</section>
			<section>
				<p>
					The code for this project is{' '}
					<a
						href='https://github.com/CsarGomez/github-unfollow-tracker'
						target='_blank'
						rel='noreferrer'
					>
						available on GitHub
					</a>
				</p>
			</section>
		</ContentStyle>
	);
}
