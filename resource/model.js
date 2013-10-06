var MainModel = (function (_super) {
    __extends(MainModel, _super);
    function MainModel() {
        _super.call(this);
        this.init();
    }
    MainModel.prototype.init = function () {
        this.dispatchEvent("inited");
    };

	//MainModel.prototype.mieelData = null;
	MainModel.prototype.load = function () {
		var _this = this;
		$.getJSON("http://210.129.199.30/syubi/mieru/", function(data){
			console.log("success");
			//this.mieelData = data;
			_this.response = data;
			_this.loadComplete();
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown){
			console.log("error");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus : " + textStatus);
			console.log("errorThrown : " + errorThrown.message);
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

//var mm = new MainModel();
//mm.load();
