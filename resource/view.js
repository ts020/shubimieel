var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView(model) {
        _super.call(this);
        this.model = model;
        this.init();
    }
    MainView.prototype.init = function () {
        this.dispatchEvent("inited");
    };

    MainView.prototype.draw = function () {
    };

    MainView.prototype.viewComplete = function () {
        this.dispatchEvent("complete");
    };
    return MainView;
})(events.EventDispatcher);
