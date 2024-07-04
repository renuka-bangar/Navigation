document.addEventListener('DOMContentLoaded', function() {
    // Toggle side drawer visibility
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('nav.side-drawer').classList.toggle('active');
    });

    // Dropdown toggle functionality
    document.querySelectorAll('.dropdown-toggle').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdown = item.parentElement;
            dropdown.classList.toggle('active');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            // Toggle visibility of the dropdown content
            if (dropdown.classList.contains('active')) {
                dropdownContent.style.display = 'block';
            } else {
                dropdownContent.style.display = 'none';
            }
        });
    });

    // Show About Us section
    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault();
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
            aboutSection.classList.remove('hidden');
            aboutSection.style.display = 'block';
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeSideDrawer();
        }
    });

    document.getElementById('about-link-side').addEventListener('click', function(event) {
        event.preventDefault();
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
            aboutSection.classList.remove('hidden');
            aboutSection.style.display = 'block';
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeSideDrawer();
        }
    });

    // Show Contact modal
    document.getElementById('contact-link').addEventListener('click', function(event) {
        event.preventDefault();
        const contactSection = document.getElementById('contact-info');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        closeSideDrawer(); // Close side drawer if open
    });

    document.getElementById('contact-link-side').addEventListener('click', function(event) {
        event.preventDefault();
        const contactSection = document.getElementById('contact-info');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        closeSideDrawer(); // Close side drawer if open
    });

    // Function to close side drawer
    function closeSideDrawer() {
        document.querySelector('nav.side-drawer').classList.remove('active');
    }
});
