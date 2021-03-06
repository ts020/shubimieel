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
	};

    MainController.prototype.load = function(type) {
        this.model.load(type);
    }

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

    MainController.prototype.showMenu = function() {
        var opend = document.getElementById("floatingMenu").style.visibility == "visible";
        document.getElementById("floatingMenu").style.visibility = opend ? "hidden" :"visible";
    }

    MainController.prototype.changeTeam = function(type) {
        document.getElementById("floatingMenu").style.visibility = "hidden";
        document.getElementById("head").src = "resource/img/head/" + type + ".png"
        this.load(type);
    }

    MainController.prototype.toggleBall = function() {
        setBallVisible(!ballVisible);
        this.view.draw();
    }

    MainController.prototype.toggleChart = function() {
        setChartVisible(!chartVisible);
        this.view.draw();
    }

    MainController.prototype.start = function() {
        $("#startView").animate({top:-960}, 500);
    }


    return MainController;
})(events.EventDispatcher);
var controller = new MainController();
controller.load();