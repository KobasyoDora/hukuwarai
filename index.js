var canvas = new fabric.Canvas('cnvs', {
    preserveObjectStacking: true
});

const displayOriginal = document.getElementById("hukuwarai").style.display;
document.getElementById("hukuwarai").style.display = "none";

var displayIndex = [];

function startClick() {
    document.getElementById("hukuwarai").style.display = displayOriginal;
    document.getElementById("start").style.display = "none";
    load();
}

function resetClick() {
    canvas.clear();
    load();
}

function endClick() {
    displayIndex.forEach(function(item, index) {
        item.set({ selectable: false });
        if (index == 0) {
            item.moveTo(0);
        } else {
            item.moveTo(1);
        }
    })
    save();
}
// canvasを画像で保存
function save() {
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "face.png";
    link.click();
};

function addImage(url, isTurn) {
    fabric.Image.fromURL(url, function(oImg) {
        let height = 100 + Math.floor(Math.random() * (600 + 1));
        let width = 100 + Math.floor(Math.random() * (150 + 1));
        let angle = Math.floor(Math.random() * (200 + 1));
        let scale = (Math.random() - 0.5) / 5;
        let IWidth = oImg.getScaledWidth();
        displayIndex.push(oImg);
        oImg.set({
            top: height,
            left: width,
            scaleX: 100 / IWidth * isTurn * (1 + scale),
            scaleY: 100 / IWidth * (1 + scale),
            angle: angle,
        });
        canvas.add(oImg);
        oImg.moveTo(0);
    });
}

function addparts(faceNumber, type) {
    parts = ["eye", "eyebrow", "nose", "mouth", "ear"];
    parts_num = [2, 2, 1, 1, 2];
    parts_size = [100, 20, 30, 40, 50];
    addImage('parts/' + parts[type] + '/' + parts[type] + '_' + faceNumber + '.png', 1)
    if (parts_num[type] == 2) {
        addImage('parts/' + parts[type] + '/' + parts[type] + '_' + faceNumber + '.png', -1)
    }
}

function load() {
    var max = 1;
    var faceNumber = Math.floor(Math.random() * (max + 1));
    console.log(faceNumber)
    faceNumber = 1;
    displayIndex = [];

    //輪郭の生成
    fabric.Image.fromURL('parts/face/face_' + faceNumber + '.png', function(oImg) {
        displayIndex.push(oImg);
        oImg.set({
            hasRotationPoint: false,
            hasControls: false,
            selectable: false,
            left: (canvas.width - oImg.width * oImg.scaleX) / 2,
        });
        canvas.add(oImg);
        oImg.moveTo(1);
    });


    for (var i = 0; i < 5; i++) {
        addparts(faceNumber, i);
    }
    //ダミー生成
    for (var i = 0; i < 3; i++) {
        type = Math.floor(Math.random() * 5);
        addParts()
    }
}