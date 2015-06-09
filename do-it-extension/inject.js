var videoEl = document.querySelector('.shia-do-it .container video')
if(videoEl == null){
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'shia-do-it';
	div.innerHTML = '<div class="container"><video height="540px" autoplay="" name="media"><source type="video/webm"></video></div>'
	var video = document.querySelector('.shia-do-it .container video');
	video.style.visibility = "hidden";
	video.src = "http://taheri.io/output.webm";
	video.load();
	video.addEventListener('loadeddata', function() {
	   video.style.visibility = "visible"
	   video.play();
	}, false);
}
else{
	videoEl.play();
}