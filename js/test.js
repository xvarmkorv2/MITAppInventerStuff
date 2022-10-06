$(() => {
    const frag = AppInventor.getWebViewString();
	if (frag) {
        $('#content').html(frag)
	}

    let str = ""
    for (const [
        i, 
        v,
    ] of Object.entries(filenames)) {
        str += i + ", " + toString(v)
    }
    $('#content').html(str)
})