const JastevaroMenu = {

    onGameNew() {
        JastevaroScreen.clear();
        this.drawText('Game > New clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onGameSave() {
        JastevaroScreen.clear();
        this.drawText('Game > Save clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onGameQuit() {
        JastevaroScreen.clear();
        this.drawText('Game > Quit clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onSettingsGraphic() {
        JastevaroScreen.clear();
        this.drawText('Settings > Graphics clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onSettingsSound() {
        JastevaroScreen.clear();
        this.drawText('Settings > Sound clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onHelpIndex() {
        JastevaroScreen.clear();
        this.drawText('Help > Index clicked!', 0, 0);
        JastevaroScreen.render();
    },

    onHelpAbout() {
        JastevaroScreen.clear();
        this.drawText('Help > About clicked!', 0, 0);
        JastevaroScreen.render();
    },

    drawText(text, x, y) {
        JastevaroScreen.addRenderState(function (context) {
            context.textBaseline = "top";
            context.font = '30pt serif';
            context.fillStyle = '#a2a2a2';
            context.fillText(text, x, y + 1);
        });
    }
}
