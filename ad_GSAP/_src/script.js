/* globals console, TweenLite*/

// var clickScreen = document.getElementById('clickScreen');
var cta = document.getElementById('cta');

var tweenDelay = 0;
var ts = TweenLite.set,
	tt = TweenLite.to,
	td = tweenDelay;

var slow = 2,
	medium = 1,
	fast = 0.25,
	transition = 1.5;

var bg_1 = document.getElementById('bg_1'),
	bg_2 = document.getElementById('bg_2');

var copy1 = document.getElementById('copy1'),
	copy2 = document.getElementById('copy2'),
	copy3 = document.getElementById('copy3'),
	copy4 = document.getElementById('copy4'),
	copy5 = document.getElementById('copy5');

function runSlide(){
	console.log('run slide');
// ---- FRAME 1
	td += fast;
	tt(bg_1, medium, {x: 0, autoAlpha: 1, delay: td});
	td += medium;
	tt(copy1, medium, {autoAlpha: 1, delay: td});
	td += medium;
	tt(copy2, medium, {autoAlpha: 1, delay: td});	

// ---- FRAME 2
	td += slow;
	tt([copy1, copy2], medium, {autoAlpha: 0, delay: td});

	td += medium;
	tt(bg_2, medium, {x: 0, autoAlpha: 1, delay: td});

	td += medium;
	tt([copy3], fast, {autoAlpha: 1, delay: td});
	td += medium;
	tt([copy4], fast, {autoAlpha: 1, delay: td});
	td += medium;
	tt([copy5], fast, {autoAlpha: 1, delay: td});

// ---- END FRAME
	td += slow;
	tt([copy3, copy4, copy5], medium, {autoAlpha: 0, delay: td});

	td += medium;
	tt(cta, fast, {autoAlpha: 1, delay: td});

}


function init(){
	console.log('init');
	ts([copy1, copy2, copy3, copy4, copy5, cta], {autoAlpha: 0});


	ts(bg_1, {x: -380});
	ts(bg_2, {x: 380});
	runSlide();
}

window.onload = function(){
	init();
};