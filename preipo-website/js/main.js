// Main JavaScript for Preipo Website

$(document).ready(function() {
    // Back to Top Button
    const backToTopButton = $('#backToTop');
    
    // Show/hide back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
    });
    
    // Back to top functionality
    backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    
    // Contact Form Submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: $(this).find('input[type="text"]').val(),
            email: $(this).find('input[type="email"]').val(),
            phone: $(this).find('input[type="tel"]').val(),
            subject: $(this).find('input[type="text"]').eq(1).val(),
            message: $(this).find('textarea').val()
        };
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.html();
        
        submitBtn.prop('disabled', true).html(`
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Sending...
        `);
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(function() {
            console.log('Form submitted:', formData);
            alert('Thank you for your message! We will get back to you soon.');
            $('#contactForm')[0].reset();
            submitBtn.prop('disabled', false).html(originalText);
        }, 2000);
    });
    
    // Add smooth scrolling to all links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        }
    });
    
    // Share card hover effects
    $('.share-card').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );
});

// Additional utility functions
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function validatePhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}