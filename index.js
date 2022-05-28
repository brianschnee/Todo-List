/**
 * Group Members:
 * Brian
 * Dylan
 * Alan
 * Antonio
 * Chavis
 * Charlie
 */

document.querySelector('#taskSearchButton').addEventListener('click', getTodos);

async function getTodos() {
	const taskName = document.querySelector('#taskSearch').value;

	try {
		const res = await fetch(`/api?todo=${taskName}`);
		console.log(res);
		const data = await res.json();
		console.log(data);

		document.querySelector('#title').textContent = data.title;
		document.querySelector('#content').textContent = data.content;
	} catch (err) {
		console.error('err', err);
	}
}
