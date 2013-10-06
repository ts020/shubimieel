var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        _super.call(this);
        this.model = new MainModel();
        this.view = new MainView(this.model);
        this.init();
    }

    MainController.prototype.init = function () {
        var _this = this;
    	this.model.addEventListener("inited", function(){_this.modelInited()});
    	this.model.addEventListener("complete", function(){_this.modelDataLoaded()});
    	this.model.addEventListener("changedData", function(){_this.modelDataChange()});
    	this.view.addEventListener("inited", function(){_this.viewInited()});
		this.modelDataLoaded();
	};

    MainController.prototype.modelInited = function() {
    }

	MainController.prototype.modelDataLoaded = function() {
		this.modelDataChange();
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

function getJson(){
	var mc = new MainController();
	var mm = new MainModel();
	mm.load();
	console.log("####################");
}

getJson();

