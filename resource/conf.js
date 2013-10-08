//線の太さと色を決定
function config () {
    //円の線幅
    this.lineWidth = 0;
    //円の線色
    this.lineColor = 'rgba(255, 255, 255, 1.0)';
    //フォント種類
    this.nameFont = '20pt Arial';
    //フォントカラー
    this.nameColor = 'rgba(50, 50, 50, 1.0)';
    //名前のX座標
    this.nameX = -30;
    //名前のY座標
    this.nameY = -20;
}

// ポジションごとに円の色を変更する
function fillPositionColor(positionNumber, center) {
    //console.log("ポジション" + positionNumber + "の色を描画");
    //ボールの補球位置の不透明度
    var alpha = 0.9;
    //守備位置の不透明度
    if (center == 'center') {
        alpha = 0.5;
    }

    switch (positionNumber){
        //ピッチャー
        case 1:
            return 'rgba(255, 0, 0, ' + alpha + ')';
        //キャッチャー
        case 2:
            return 'rgba(0, 0, 255, ' + alpha + ')';
        //ファースト
        case 3:
            return 'rgba(255, 255, 0, ' + alpha + ')';
        //セカンド
        case 4:
            return 'rgba(220, 255, 30, ' + alpha + ')';
        //サード
        case 5:
            return 'rgba(200, 255, 60, ' + alpha + ')';
        //ショート
        case 6:
            return 'rgba(180, 255, 90, ' + alpha + ')';
        //レフト
        case 7:
            return 'rgba(0, 200, 0, ' + alpha + ')';
        //センター
        case 8:
            return 'rgba(0, 200, 60, ' + alpha + ')';
        //ライト
        case 9:
            return 'rgba(0, 200, 120, ' + alpha + ')';
        default:
            console.log("エラーです" + positionNumber)
            return 'rgba(100, 100, 100, ' + alpha + ')';
    }
}


