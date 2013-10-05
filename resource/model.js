var MainModel = (function (_super) {
    __extends(MainModel, _super);
    function MainModel() {
        _super.call(this);
        this.init();
    }
    MainModel.prototype.init = function () {
        this.dispatchEvent("inited");
    };

    MainModel.prototype.load = function () {
    };

    MainModel.prototype.loadComplete = function () {
        this.dispatchEvent("complete");
    };
    return MainModel;
})(events.EventDispatcher);
