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
		var _this = this;
		$.getJSON("http://210.129.199.30/syubi/mieru/", getParam(), function(data){
			_this.response = data;
			var team = getParam().t;
			if( team != undefined ){
				_this.team = team;
			}
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
		alert("####");
    	this.dispatchEvent("changedData");
	}
    return MainModel;
})(events.EventDispatcher);

function getParam(){
	var uparam = {};
	var urls = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'); 
	for(var i = 0; i < urls.length; i++) { 
		var url = urls[i].split('=');
		uparam[url[0]] = url[1];
	} 
	return uparam;
}

