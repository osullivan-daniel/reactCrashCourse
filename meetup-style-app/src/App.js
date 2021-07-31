import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetup";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path="/" exact>
						<AllMeetupsPage></AllMeetupsPage>
					</Route>
					<Route path="/new-meetup">
						<NewMeetupsPage></NewMeetupsPage>
					</Route>
					<Route path="/favourites">
						<FavouritesPage></FavouritesPage>
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
