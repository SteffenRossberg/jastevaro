const JastevaroScreen = {
    onResize() {
        JastevaroScreen.surface = document.getElementById("surface");
        JastevaroScreen.canvas = document.getElementById('playground');
        JastevaroScreen.canvas.width = 1;
        JastevaroScreen.canvas.height = 1;
        JastevaroScreen.canvas.width = JastevaroScreen.surface.clientWidth;
        JastevaroScreen.canvas.height = JastevaroScreen.surface.clientHeight;
        JastevaroScreen.gl = JastevaroScreen.canvas.getContext('webgl');
        JastevaroScreen.render();
    },

    clear() {
        JastevaroScreen.renderStates.length = 0;
    },

    render() {
        const gl = JastevaroScreen.gl;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
        for (var i = 0; i < JastevaroScreen.renderStates.length; i++)
            JastevaroScreen.renderStates[i](gl);
        gl.finish();
    },

    addRenderState(state) {
        JastevaroScreen.renderStates.push(state);
    },

    renderStates: []
}

window.onload = JastevaroScreen.onResize;
window.onresize = JastevaroScreen.onResize;
