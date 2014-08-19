document.addEventListener('polymer-ready', function(e) {
    var trackList = document.querySelector('#trackList');
    var searchInput = document.querySelector('#searchString');

    searchInput.addEventListener('keydown', function(e) {
        trackList.search = e.currentTarget.value;
    });
});
