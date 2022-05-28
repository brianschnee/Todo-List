document.addEventListener('DOMContentLoaded', () => {
	document
		.querySelector('#taskSearchButton')
		.addEventListener('click', getTodos);
});

async function getTodos() {
	const taskName = document.querySelector('#taskSearch').value;
	console.log('Task Name: ', taskName);

	try {
		const res = await fetch(`/api?todo=${taskName}`);
		console.log('in index.js - response:', res);
		const data = await res.json();
		console.log('in index.js - data:', data);

		document.querySelector('#title').textContent = data.title;
		document.querySelector('#content').textContent = data.content;
	} catch (err) {
		console.error('err', err);
	}
}
