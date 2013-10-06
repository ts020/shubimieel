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
        var array = new Array();
        var center = new Array();
        for (var i = 0; i < 9; i++) {
            center[i] = new Array();
        }
        var canvas  = document.getElementById("mainCanvas").getContext("2d");

        for (var i = 0; i < 27; i++) {
            position = parseInt(Math.random() * 9) + 1;
            x = Math.random() * 640;
            y = Math.random() * 640;
            name = '堂林 翔太';
            array.push(new ballData(canvas, x, y, position, name));
        }

        //重心計算
        for (var i = 0; i < array.length; i++) {
            console.log(array[i].name);
            center[(array[i].position - 1)].push(new positionData(array[i].x, array[i].y, array[i].name));
        }

        for (var i = 0; i < center.length; i++) {
            var sumX = 0;
            var numX = 0;
            var sumY = 0;
            var numY = 0;
            var name = '';
            console.log('ポジション' + i + 'が処理した打球は' + center[i].length);
            for (var j = 0; j < center[i].length; j++) {
                sumX += center[i][j].x;
                sumY += center[i][j].y;
                name = center[i][j].name;
            }

            console.log("ポジション" + i + 'の' + name + "の重心は(" + sumX/center[i].length + ", " + sumY/center[i].length + ")")
            drawCircle(canvas, sumX/center[i].length, sumY/center[i].length, ( i + 1 ), 'center', name);
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
/*
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
}*/

function drawCircle(canvas, x, y, positionNumber, center, name) {
    if (center == 'center'){
        console.log("Draw Center!")
        canvas.beginPath();
            canvas.lineWidth = 1;
            //canvas.strokeStyle = "#ff0000";

            var sAng = 0;            //円弧の開始角度
            var eAng = 2 * Math.PI;  //円弧の終端角度
            canvas.arc(x, y, 50, sAng, eAng, true);
            canvas.stroke();

            canvas.fillStyle = fillPositionColor(positionNumber, 'center');
            canvas.fill();

            canvas.fillStyle = '#000';
            canvas.font = "20pt Arial";
            canvas.fillText(name, x, y);       
    } else {
        //console.log("Draw Ball")
        canvas.beginPath();
            canvas.lineWidth = 1;
            //canvas.strokeStyle = "#ff0000";

            var sAng = 0;            //円弧の開始角度
            var eAng = 2 * Math.PI;  //円弧の終端角度
            canvas.arc(x, y, 10, sAng, eAng, true);
            canvas.stroke();

            canvas.fillStyle = fillPositionColor(positionNumber, 'ball');
            canvas.fill();
    }
}

function fillPositionColor(positionNumber, center) {
    //console.log("ポジション" + positionNumber + "の色を描画");
    var alpha = 0.9;
    if (center == 'center') {
        alpha = 0.5;
    }

    switch (positionNumber){
        case 1:
            return 'rgba(255, 0, 0, ' + alpha + ')';
        case 2:
            return 'rgba(0, 0, 255, ' + alpha + ')';
        case 3:
            return 'rgba(255, 255, 0, ' + alpha + ')';
        case 4:
            return 'rgba(255, 255, 0, ' + alpha + ')';
        case 5:
            return 'rgba(255, 255, 0, ' + alpha + ')';
        case 6:
            return 'rgba(255, 255, 0, ' + alpha + ')';
        case 7:
            return 'rgba(0, 200, 0, ' + alpha + ')';
        case 8:
            return 'rgba(0, 200, 0, ' + alpha + ')';
        case 9:
            return 'rgba(0, 200, 0, ' + alpha + ')';
        default:
            console.log("エラーです" + positionNumber)
            return 'rgba(0, 0, 0, ' + alpha + ')';
    }
}

function positionData(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
}

function ballData(canvas, x, y, position, name) {
    this.x = x;
    this.y = y;
    this.position = position;
    this.name = name;
    drawCircle(canvas, x, y, position, 'ball');
}

