window.addEventListener('DOMContentLoaded', function () {

   // SmoothScroll

   const myscroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
   });

   // Mobile Menu

   const body = document.querySelector('body');
   const menuIcon = document.querySelector('.menu-icon');
   const menu = document.querySelector('.menu__list');
   const menuLinks = document.querySelectorAll('.menu__list-link');

   menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('lock');
   });

   menuLinks.forEach((item) => {
      item.addEventListener('click', () => {
         menu.classList.remove('active');
         menuIcon.classList.remove('active');
      });
   });

   // Wow.js

   const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 100,
      mobile: false,
   });
   wow.init();


   // InputMask

   let inputs = document.querySelectorAll('input[type="tel"]');
   let im = new Inputmask('+7 (999) 999-99-99');
   im.mask(inputs);


   // Validate

   function validateForms(selector, rules) {
      new window.JustValidate(selector, {
         rules: rules,
      });
   }

   validateForms('.request__form-form', {
      name: {
         required: true,
         minLength: 3,
         maxLength: 15,
      },
      email: {
         required: true,
         email: true,
      },
      tel: {
         required: true,
      }
   });


   	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});