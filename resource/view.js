var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView(model) {
        _super.call(this);
        this.model = model;
        this.init();
    }
    MainView.prototype.init = function () {
        this.dispatchEvent("inited");
    };

    MainView.prototype.draw = function () {
        /*
        document.body.addEventListener("click", function(){
            alert("click");
        });
        */
        //console.log("Hello World!");
        var canvas  = document.getElementById("mainCanvas").getContext("2d");
        drawCircle(canvas, x, y);
    };

    MainView.prototype.viewComplete = function () {
        this.dispatchEvent("complete");
    };
    return MainView;
})(events.EventDispatcher);

/*

    以下は描画のための関数

*/

//円を描画
function drawCircle(canvas, x, y) {
    console.log("Draw!")
    canvas.beginPath();
        canvas.lineWidth = 1;
        canvas.strokeStyle = "#ff0000";

        var sAng = 0;            //円弧の開始角度
        var eAng = 2 * Math.PI;  //円弧の終端角度
        canvas.arc(x, y, 30, sAng, eAng, true);
        canvas.stroke();

        canvas.fillStyle = "#ff0000";
        canvas.fill();
}
