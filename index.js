
const displayOriginal = document.getElementById("hukuwarai").style.display;
document.getElementById("hukuwarai").style.display="none";

function startClick(){
	document.getElementById("hukuwarai").style.display=displayOriginal;
	document.getElementById("start").style.display="none";
}

$(function(){
	var canvas = new fabric.Canvas('cnvs');

	fabric.Image.fromURL('face1.png',function(oImg){
		oImg.set({
			hasRotationPoint: false,
			hasControls: false,
			selectable: false,
		});
		canvas.add(oImg);
	});
	fabric.Image.fromURL('face1.png',function(oImg){
		oImg.scaleToWidth(100);
		canvas.add(oImg);
	});
});