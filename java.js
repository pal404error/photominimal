var aud = new Audio("imagestuff/audio.mp3");
aud.volume = 0.3;
function c(){
	return aud.paused ? aud.play() : aud.pause();
}
