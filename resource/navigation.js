var NavigationView = (function (_super) {
    __extends(NavigationView, _super);
    function NavigationView() {
        _super.call(this);
        this.init();
    }

    NavigationView.prototype.init = function() {
    	this.dispatchEvent("inited");
    }

    NavigationView.prototype.draw = function () {
        
    };

    return NavigationView;
})(events.EventDispatcher);
