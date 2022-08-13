// import Content from './components/Content';
import Header from './components/Header';
import Results from './components/Results';
import { FollowersProvider } from './context/followersContext';
import { UnfollowersProvider } from './context/unfollowersContext';

function App() {
	return (
		<FollowersProvider>
			<UnfollowersProvider>
				<Header />
				<Results />
			</UnfollowersProvider>
		</FollowersProvider>
	);
}

export default App;
