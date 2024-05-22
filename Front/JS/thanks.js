function toggleDetails(artist) {
    console.log("Function called with artist:", artist);

    // Select all detail divs
    var allDetails = document.querySelectorAll('.iridium, .nagazaki');

    // Loop through all detail divs and hide them
    allDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Select the detail div based on the artist
    var detailDiv = document.querySelector('.' + artist);

    // Toggle the display of the selected detail div
    if (detailDiv.style.display === 'none' || detailDiv.style.display === '') {
        detailDiv.style.display = 'block';
        // Hide the musicDetail div
        var musicDetail = document.querySelector('.music_detail');
        musicDetail.style.display = 'none';
    } else {
        detailDiv.style.display = 'none';
    }
}
