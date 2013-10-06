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
        this.model.load(type || 0);
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



    return MainController;
})(events.EventDispatcher);

var controller = new MainController();
controller.load();

$("#logo0").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=0";
});
$("#logo1").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=1";
});
$("#logo2").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=2";
});
$("#logo3").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=3";
});
$("#logo4").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=4";
});
$("#logo5").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=5";
});
$("#logo6").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=6";
});
$("#logo7").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=7";
});
$("#logo8").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=8";
});
$("#logo9").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=9";
});
$("#logo10").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=10";
});
$("#logo11").click(function(){
      location.href = "http://localhost/shubimieel/index.html?t=11";
});
