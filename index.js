const displayOriginal = document.getElementById("hukuwarai").style.display;
document.getElementById("hukuwarai").style.display = "none";

function startClick() {
    document.getElementById("hukuwarai").style.display = displayOriginal;
    document.getElementById("start").style.display = "none";
}

$(function() {
    //キャンバス生成
    var canvas = new fabric.Canvas('cnvs');
    //パーツセットの番号をランダムに選択
    var max = 1;
    var faceNumber = Math.floor(Math.random() * (max + 1));
    console.log(faceNumber)
    faceNumber = 1;

    //輪郭の生成
    fabric.Image.fromURL('parts/face/face_1.png', function(oImg) {
        oImg.set({
            hasRotationPoint: false,
            hasControls: false,
            selectable: false,
            left: (canvas.width - oImg.width * oImg.scaleX) / 2,
        });
        canvas.add(oImg);
    });
    parts = ["eye", "eyebrow", "nose", "mouth", "ear"];
    parts_num = [2, 2, 1, 1, 2];

    for (var i = 0; i < 5; i++) {
        fabric.Image.fromURL('parts/' + parts[i] + '/' + parts[i] + '_' + faceNumber + '.png', function(oImg) {
            let height = 100 + Math.floor(Math.random() * (600 + 1));
            let width = 100 + Math.floor(Math.random() * (150 + 1));
            let angle = Math.floor(Math.random() * (200 + 1));
            let scale = Math.floor((Math.random() - 1) * 20);
            oImg.scaleToWidth(100 + scale);
            oImg.set({ top: height, left: width, angle: angle });
            canvas.add(oImg);
        });
        if (parts_num[i] == 2) {
            fabric.Image.fromURL('parts/' + parts[i] + '/' + parts[i] + '_' + faceNumber + '.png', function(oImg) {
                let height = 100 + Math.floor(Math.random() * (600 + 1));
                let width = 100 + Math.floor(Math.random() * (150 + 1));
                let angle = Math.floor(Math.random() * (200 + 1));
                let scale = Math.floor((Math.random() - 1) * 20);
                oImg.scaleToWidth(100 + scale);
                oImg.set({ top: height, left: canvas.width - width, angle: angle });
                canvas.add(oImg);
            });
        }
    }
});