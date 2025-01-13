(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);




function updateAmount() {
    const skills = [];
    if (document.getElementById('python_f').checked) skills.push('Python');
    if (document.getElementById('genAI_f').checked) skills.push('Gen AI');
    if (document.getElementById('flask_f').checked) skills.push('Flask');

    const amount = document.getElementById('amounts');
    amount.textContent = skills.length > 0 ? `$${5000 * skills.length}` : '';
}

function submitForm() {
    updateAmount();
    const firstName = document.getElementById('firstName_f').value;
    const lastName = document.getElementById('lastName_f').value;
    const email = document.getElementById('email_f').value;
    const phone = document.getElementById('phone_f').value;
    const profession = document.getElementById('profession_f').value;

    const skills = [];
    if (document.getElementById('python_f').checked) skills.push('Python');
    if (document.getElementById('genAI_f').checked) skills.push('Gen AI');
    if (document.getElementById('flask_f').checked) skills.push('Flask');

    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        profession: profession,
        skills: skills.length > 0 ? skills.join(', ') : 'None'
    };

    emailjs.send("service_pyilvrt", "template_lopn1yf", templateParams)
        .then(function(response) {


            // Clear form fields after successful submission
            document.getElementById('firstName_f').value = '';
            document.getElementById('lastName_f').value = '';
            document.getElementById('email_f').value = '';
            document.getElementById('phone_f').value = '';
            document.getElementById('profession_f').value = '';
            document.getElementById('python_f').checked = false;
            document.getElementById('genAI_f').checked = false;
            document.getElementById('flask_f').checked = false;
            document.getElementById('amounts').textContent = '';
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
}

function submitcontect() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    // console.log(templateParams)
    emailjs.send("service_pyilvrt", "template_yk3lry7", templateParams)
        .then(function(response) {
            // Clear form fields after successful submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            alert("Email sent successfully!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
        });
}