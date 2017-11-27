function renderMovie(movie) {
    document.querySelector(".poster").setAttribute("src", movie.poster);
    document.getElementsByClassName("movietitle")[0].innerText = movie.title;
    document.querySelector(".infosection p").textContent = movie.info;

    for (let i = 0; i < movie.actors.length; i++) {
        let node = document.createElement("li");
        node.innerText = movie.actors[i];
        document.querySelector(".infosection ul").appendChild(node);
    }

}

renderMovie(movieData);