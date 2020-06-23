document.addEventListener('DOMContentLoaded', function() {
			// When the user scrolls the page, execute coolNavbar
			window.addEventListener('scroll', coolNavbar);

			// Get the navbar
			var navbar = document.getElementById("navbar");

			// Get the offset position of the navbar
			var sticky = navbar.offsetTop;

			// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
			function coolNavbar() {
			  if (window.pageYOffset >= sticky) {
			    navbar.setAttribute('id', 'bogus');
			    navbar.classList.add("sticky");
			  } else {
			    navbar.classList.remove("sticky");
			    navbar.setAttribute('id', 'navbar');
			  }
			}
		});