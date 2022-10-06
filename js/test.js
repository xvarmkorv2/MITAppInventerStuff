$(() => {
    const frag = location.hash.replace(/^#+/u, '');
	if (frag) {
        $('#content').html(decodeURI(frag))
	}
})