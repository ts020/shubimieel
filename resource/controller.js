var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        _super.call(this);
        this.model = new MainModel();
        this.view = new MainView(this.model);
        this.init();
    }

    MainController.prototype.init = function () {
    	this.model.addEventListener("inited", function(){this.modelInited()});
    	this.model.addEventListener("complete", function(){this.modelDataComplete()});
    	this.model.addEventListener("changedData", function(){this.modelDataChange()});
    	this.view.addEventListener("inited", function(){this.viewInited()});

    };

    MainController.prototype.modelInited = function() {

    }

	MainController.prototype.modelDataComplete = function() {

    }

    MainController.prototype.modelDataChange = function() {
    	this.view.draw();
    }

    MainController.prototype.viewInited = function() {

    }

    MainController.prototype.loadComplete = function () {
        this.dispatchEvent("complete");
    };

    return MainController;
})(events.EventDispatcher);
