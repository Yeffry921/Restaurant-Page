import { header } from './header';
import { showCase } from './showcase';
import { contactForm } from './contact';
import { sampleMenu } from './menu';

//when the file first loads

//const container = document.querySelector('.container');
const privateRender = (() => {

	const onLoad = () => {
		renderHeaderComponent();
		renderShowcaseComponent();
	};
	const renderHeaderComponent = () => {
		document.querySelector('.header').innerHTML = header();
	};

	const renderShowcaseComponent = () => {
		document.querySelector('.showcase').innerHTML = showCase();
	};

	const renderContactComponent = () => {
		document.querySelector('.showcase').innerHTML = contactForm();
	};

	const renderMenuComponent = () => {
		document.querySelector('.showcase').innerHTML = sampleMenu();
	};

	const chooseComponent = (e) => {
		if (e.target.classList.contains('btn-home')) {
			renderShowcaseComponent();
		} else if (e.target.classList.contains('btn-menu')) {
			renderMenuComponent();
		} else if (e.target.classList.contains('btn-contact')) {
			renderContactComponent();
		}
	};

	const cacheDOMEvents = () => {
		const listContainer = document.querySelector('.list-container');
		listContainer.addEventListener('click', chooseComponent);
	};

	const init = () => {
		onLoad();
		cacheDOMEvents();
	};

	init();
})();

// if i click on it I want to change it to white,(add a class of active to it)
// 

