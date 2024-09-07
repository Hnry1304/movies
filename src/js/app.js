async function loadJSON(){
    
    try {
        const response = await fetch('./Json/usuarios.json');
        const result = await response.json();

        var lista = document.getElementById('lista_peliculas');
        


        for (const movie of result){
            var li = document.createElement("p");
            var img = document.createElement("img");

            li.textContent = movie.title;
            lista.appendChild(li);

            img.src = movie.image;
            lista.appendChild(img);
            
            // console.log(movie.title);
        }

        // for (const movie of result){
        //     // {console.log(movie.title);}
        //     console.log(`
        //         Titulo: ${movie.title}, 
        //         Genero: ${movie.genre}
        //     `);            
        // }
        
    } catch (error) {
        console.error(error);
    }
}
loadJSON();
// async function loadJSON(){

//     try{
//         const response = await fetch('./Json/usuarios.json');
//         const data = await response.json();
        
//         for (const user of data.users){
//             console.log(`
//                 Username: ${user.username}, Password: ${user.password}
//             `);
            
//         }
//         // console.log(data);        
//     }catch (error){
//         console.error('Error al cargar el archivo JSON:', error);        
//     }
// }

// loadJSON();


// fetch('./Json/usuarios.json')
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);                
//     })
//     .catch(error =>{
//         console.error('Error al carga el archivo JSON:', error);        
//     });