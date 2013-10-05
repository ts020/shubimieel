var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        _super.call(this);
        this.model = new MainModel();
        this.view = new MainView(this.model);
        this.init();
    }

    MainController.prototype.init = function () {
    };

    MainController.prototype.loadComplete = function () {
        this.dispatchEvent("complete");
    };

    return MainController;
})(events.EventDispatcher);
