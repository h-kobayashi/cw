
	var mySiema = new Siema({
		selector: '.siema',
		perPage: 1,
		loop: true
	});
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');

	prev.addEventListener('click', () => mySiema.prev());
	next.addEventListener('click', () => mySiema.next());

	var mySiema2 = new Siema({
		selector: '.siema-gallery',
		perPage: 1,
		loop: true
	});
	var prev2 = document.querySelector('.prev2');
	var next2 = document.querySelector('.next2');

	prev2.addEventListener('click', () => mySiema2.prev());
	next2.addEventListener('click', () => mySiema2.next());
