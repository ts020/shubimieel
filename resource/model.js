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
		$.getJSON("./resource/sample.json", function(data){
			console.log("success");
			console.log(data.query);
		})
		.done(function(){
			console.log("second success");
		})
		.fail(function(){
			console.log("error");
		})
		.always(function(){
			console.log("complete");
		});
	};

    MainModel.prototype.loadComplete = function () {
        this.dispatchEvent("complete");
    };

    MainModel.prototype.changeData = function() {
    	this.dispatchEvent("changedData");
    }
    return MainModel;
})(events.EventDispatcher);

var mm = new MainModel();
mm.load();
