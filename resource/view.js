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

        for (var i=0; i < 27; i++) {
            position = parseInt(Math.random() * 10);
            x = Math.random() * 640;
            y = Math.random() * 960;
            drawCircle(canvas, x, y, position);
        }

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
function drawCircle(canvas, x, y, positionNumber) {
    console.log("Draw!")
    canvas.beginPath();
        canvas.lineWidth = 1;
        //canvas.strokeStyle = "#ff0000";

        var sAng = 0;            //円弧の開始角度
        var eAng = 2 * Math.PI;  //円弧の終端角度
        canvas.arc(x, y, 10, sAng, eAng, true);
        canvas.stroke();

        canvas.fillStyle = fillPositionColor(positionNumber);
        canvas.fill();
}

function fillPositionColor(positionNumber) {
    switch (positionNumber){
        case 1:
            return "#ff0000";
        case 2:
            return "0000ff";
        case 3:
            return "ffff00";
        case 4:
            return "ffff00";
        case 5:
            return "ffff00";
        case 6:
            return "ffff00";
        case 7:
            return "00bb00";
        case 8:
            return "00bb00";
        case 9:
            return "00bb00";
        default:
            return "ffffff";

    }
}


