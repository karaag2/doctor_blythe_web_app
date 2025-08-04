// App.tsx
import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage";

export function App() {
	return (
		<Switch>
			<Route path="/" component={() => <LandingPage />} />
		</Switch>
	);
}
