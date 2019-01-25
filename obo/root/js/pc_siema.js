
	var mySiema = new Siema({
		perPage: 3,
		loop: true
	});
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');

	prev.addEventListener('click', () => mySiema.prev());
	next.addEventListener('click', () => mySiema.next());
