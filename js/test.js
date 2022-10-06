$(() => {
    const frag = AppInventor.getWebViewString();
	if (frag) {
        $('#content').html(frag)
	}
})