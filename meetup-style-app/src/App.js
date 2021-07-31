import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetup";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
	return (
		<div>
			<MainNavigation />
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
		</div>
	);
}

export default App;
