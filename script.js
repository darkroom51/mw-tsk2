(function() {
    let blueHiderLinkThing = document.getElementById('blueHiderLinkThing');
    let list1 = document.getElementById('list1');

    blueHiderLinkThing.addEventListener('click', toggleList);

    function toggleList() {
        if (list1.style.visibility === 'hidden') {
            list1.style.visibility = 'visible';
        } else {
            list1.style.visibility = 'hidden';
        }
    }
})();