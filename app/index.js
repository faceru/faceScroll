'use strict'
function FaceScroll(button, target = 'body', speed = 5, offset = 0, event = 'click'){
	//private args
	this._button = document.querySelector(button);
	this._target = document.querySelector(target);

	//scroll private function
	function subfunc(target, e = event){
		e.preventDefault();
		var target = target;
		var scrollContainer = target;
		do{
			scrollContainer = scrollContainer.parentNode;
			if (!scrollContainer) return;
			scrollContainer.scrollTop += 1;
		}while(scrollContainer.scrollTop == 0);

		var targetY = 0;

		do{
			if (target == scrollContainer) break;
            	targetY += target.offsetTop;
		}while(target = target.offsetParent);

		//animate subfunction
		scroll = function(c, a, b, i = 0){
			i++;
			if (i > (speed + 1)) return;
			c.scrollTop = a + (b - a) / (speed + 1) * i;
			setTimeout(function(){ scroll(c, a, b, i); }, speed);
		}
		scroll(scrollContainer, scrollContainer.scrollTop, targetY + offset);

	}
	//add event
	this._button.addEventListener(event, subfunc.bind(null, this._target));
	
}
// WARNING DELETE NEXT STRING IF U DIDNT USE WEBPACK
export default FaceScroll;
// var button1 = new FaceScroll('.scrollTarget', '.second', 15, -90);
// var button2 = new FaceScroll('.scrollTopTarget', '.first', 5);
// var button3 = new FaceScroll('.scrollBottom');
