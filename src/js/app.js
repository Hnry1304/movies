async function loadJSON(){
    
    try {
        const response = await fetch('./Json/usuarios.json');
        const result = await response.json();

        var lista = document.getElementById('lista_peliculas');

        for (const movie of result){
            // Crear elementos
            var li = document.createElement("li");
            

            var rank = document.createElement("p");
            var title = document.createElement("p");
            var description = document.createElement("p");
            var image = document.createElement("img");
            
            var genre = document.createElement("p");
            var raiting = document.createElement("p");
            var id = document.createElement("p");
            var year = document.createElement("p");
            var imdbid = document.createElement("p");
            var imdbid_link = document.createElement("a");
            
            var div = document.createElement("div");

            // Clases
            // li.classList.add("bg-red-800","rounded-3xl");

            //TextContent
            rank.textContent = movie.rank;
            title.textContent = movie.title;
            description.textContent = movie.description;
            image.src = movie.image;
            image.alt = movie.title;
            
            genre.textContent = movie.genre;
            raiting.textContent = movie.rating;
            id.textContent = movie.id;
            year.textContent = movie.year;
            imdbid.textContent = movie.imdbid;
            imdbid_link.href = movie.imdb_link;
            imdbid_link.textContent = movie.imdb_link;

            // Appendchild
            lista.appendChild(li);
            li.appendChild(rank);
            li.appendChild(title);
            // li.appendChild(description);
            li.appendChild(image);
            
            li.appendChild(genre);
            li.appendChild(raiting);
            li.appendChild(id);
            li.appendChild(year);
            li.appendChild(imdbid);
            li.appendChild(imdbid_link);
            
            // lista.appendChild(rank);

            // li.textContent = movie.title;
            // lista.appendChild(li);
        }
        
    } catch (error) {
        console.error(error);
    }
}
loadJSON();