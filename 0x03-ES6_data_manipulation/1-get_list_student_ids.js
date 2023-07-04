export default getListStudentIds(ids) {
	if(!Array.isArray(ids))
		return [];
	return(ids.map(item) => item.id);
}
