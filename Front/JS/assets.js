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

            // Display the first description of the targeted content section
            document.querySelector(`#${targetId} .assets_description:first-child`).style.display = 'flex';
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
                document.querySelector('#assets_content1 .assets_description:nth-child(2)').style.display = 'flex';
            } else if (targetId === 'reaper_img') {
                document.querySelector('#assets_content1 .assets_description:nth-child(3)').style.display = 'flex';
            } else if (targetId === 'scythe_img') {
                document.querySelector('#assets_content2 .assets_description:nth-child(2)').style.display = 'flex';
            } else if (targetId === 'bow_img') {
                document.querySelector('#assets_content2 .assets_description:nth-child(3)').style.display = 'flex';
            } else if (targetId === 'enemy1_img') {
                document.querySelector('#assets_content3 .assets_description:nth-child(2)').style.display = 'flex';
            } else if (targetId === 'enemy2_img') {
                document.querySelector('#assets_content3 .assets_description:nth-child(3)').style.display = 'flex';
            }
        });
    });
});
