
const dateDiff = (dateA, dateB) => {
	const diff = Math.abs(dateA.getTime() - dateB.getTime());
	return Math.floor(diff / (1000 * 3600 * 24));
}
