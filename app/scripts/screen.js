const JastevaroScreen = {
    onResize() {
        JastevaroScreen.surface = document.getElementById("surface");
        JastevaroScreen.canvas = document.getElementById('playground');
        JastevaroScreen.context = JastevaroScreen.canvas.getContext('2d');
        JastevaroScreen.canvas.width = 1;
        JastevaroScreen.canvas.height = 1;
        JastevaroScreen.canvas.width = JastevaroScreen.surface.clientWidth;
        JastevaroScreen.canvas.height = JastevaroScreen.surface.clientHeight;
        JastevaroScreen.render();
    },

    clear() {
        JastevaroScreen.renderStates.length = 0;
    },

    render() {
        JastevaroScreen.context.clearRect(0, 0, JastevaroScreen.canvas.width, JastevaroScreen.canvas.height);
        for (var i = 0; i < JastevaroScreen.renderStates.length; i++)
            JastevaroScreen.renderStates[i](JastevaroScreen.context);
    },

    addRenderState(state) {
        JastevaroScreen.renderStates.push(state);
    },

    renderStates: []
}

window.onload = JastevaroScreen.onResize;
window.onresize = JastevaroScreen.onResize;
