$(() => {
   function proccess() {
        const frag = AppInventor.getWebViewString();
        if (frag) {
            $('#content').html(frag)
        }

        setTimeout(proccess, 100)
   }

   proccess()
})
