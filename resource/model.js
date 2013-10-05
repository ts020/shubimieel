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
		// alert("test");
	};

    MainModel.prototype.loadComplete = function () {
        this.dispatchEvent("complete");
    };

    MainModel.prototype.changeData = function() {
    	this.dispatchEvent("changedData");
    }
    return MainModel;
})(events.EventDispatcher);
