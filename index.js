/**
 * Group Members:
 * Brian
 * Dylan
 * Alan
 * Antonio
 * Chavis
 * Charlie
 */

document.getElementById('taskSearchButton').addEventListener('click', getTodos);

async function getTodos() {
	const taskName = document.getElementById('taskSearch').value;

	try {
		const res = await fetch(`/api?todo=${taskName}`);
		const data = await res.json();
		console.log(data);

		document.getElementById('title').innerText = data.title;
		document.getElementById('content').innerText = data.content;
	} catch (err) {
		console.log(`err: ${err}`);
	}
}
