window.onload = () => {
    document.querySelector('.change').addEventListener('change', function () {
        var style = this.value == 'series' ? 'flex' : 'none';
        document.querySelector('.hidden').style.display = style;
    });

    document.querySelector('.btn').addEventListener('submit', showMovies);

    function showMovies() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.omdbapi.com/?apikey=b070371b', true);

        xhr.onload = function () {
            if (xhr.readyState == 4 && this.status == 200) {
                obj = JSON.parse(xhr.responseText);

                let div = document.querySelector('.results');
                str = '';

                for (key in obj.data) {
                    str += `<h3>${obj.data[key].t}<h3>`
                }

                div.innerHTML = str;
            } else {
                alert('Movie not found!');
            }
        }

        xhr.send();
    };
}
