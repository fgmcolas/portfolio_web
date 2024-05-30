document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.category-item');
    const contentSections = document.querySelectorAll('.assets_content');
    const pictureItems = document.querySelectorAll('.assets_pictures_box_img');
    const descriptions = document.querySelectorAll('.assets_description');

    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            // Hide all descriptions
            descriptions.forEach(description => {
                description.style.display = 'none';
            });

            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the targeted content section
            document.getElementById(targetId).style.display = 'grid';

            // If the target is the "Characters" category, display the first description
            if (targetId === 'assets_content1') {
                descriptions[0].style.display = 'flex';
            }
        });
    });

    pictureItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.id;

            // Hide all descriptions
            descriptions.forEach(description => {
                description.style.display = 'none';
            });

            // Show the targeted description
            if (targetId === 'ghost_img') {
                document.querySelector('.assets_description:nth-child(2)').style.display = 'flex';
            } else if (targetId === 'reaper_img') {
                document.querySelector('.assets_description:nth-child(3)').style.display = 'flex';
            }
        });
    });
});
