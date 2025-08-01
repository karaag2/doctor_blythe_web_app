// App.tsx
import { Route, Switch } from "wouter";
import LandingPage from "./pages/LandingPage";

function Home() {
	return <div>Page d'accueil</div>;
}

function About() {
	return <div>À propos</div>;
}

export function App() {
	return (
		<Switch>
			<Route path="/" component={() => <LandingPage />} />
		</Switch>
	);
}
