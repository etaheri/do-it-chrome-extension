var videoEl = document.querySelector('.shia-do-it .container video')
if(videoEl == null){
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'shia-do-it';
	div.innerHTML = '<div class="container"><video width="960" height="540" autoplay="" name="media"><source type="video/webm"></video></div>'
	var video = document.querySelector('.shia-do-it .container video');
	video.style.visibility = "hidden";
	video.src = "http://etaheri.github.io/output.webm";
	video.load();
	video.addEventListener('loadeddata', function() {
	   video.style.visibility = "visible"
	   video.play();
	}, false);
	video.onerror = function() {
    	alert("Couldnt load Shia :( Try another page.");
	};
}
else{
	videoEl.play();
}