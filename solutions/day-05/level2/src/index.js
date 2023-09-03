import React from "react";
import ReactDOM from "react-dom/client";
import { imagesUrl } from "./images.js";
import "./style.css";

const rootElement = document.getElementById("root");

/* --------------------------------------------------------------------*/
const Techs = ({ listImages }) => {
	const images = listImages.map((el) => (
		<img src={el} key={el} alt='images techs' />
	));
	return images;
};

const Main = ({ title }) => (
	<main>
		<div className="title">
			<h1>{title}</h1>
		</div>
		<div className="wrapp">
			<Techs listImages={imagesUrl} />
		</div>
	</main>
);
/* ------------------------------------------------------------------------- */

const Inputs = ({ inputs }) => {
	const listInputs = inputs.map((el) => (
		<input className="soft" type="text" key={el} placeholder={el} />
	));
	return listInputs;
};

const Subscriber = ({ title, subtitle, inputs }) => (
	<form>
		<div className="submit-form soft">
			<div className="title main">
				<p>{title}</p>
			</div>
			<div className="title discr">
				<p>{subtitle}</p>
			</div>
			<div className="wrapp">
				<Inputs inputs={inputs} />
			</div>
			<div className="wrapp">
				<button className="soft">Subscribe</button>
			</div>
		</div>
	</form>
);
/* -----------------------------------------------------------------------------------*/

const App = () => {
	const data = {
		titleTech: "Front End Technologies",
		titleForm: "SUBSCRIBE",
		subtitle: "Sign up with four email address to receive and updates",
		arrayInput: ["First name", "Last name", "Email"],
	};

	return (
		<div>
			<Main title={data.titleTech} />
			<Subscriber
				title={data.titleForm}
				subtitle={data.subtitle}
				inputs={data.arrayInput}
			/>
		</div>
	);
};

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
