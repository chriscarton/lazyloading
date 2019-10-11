
//Pour que ce fichier fonctionne correctement il faut le mettre dans head

window.addEventListener('DOMContentLoaded', function (e) {

    let original_images = document.querySelectorAll('.original');

    let baseLoader = document.querySelector('.base-loader').innerHTML;

    
    original_images.forEach(function(image,index){

        //D'abord on place un loader
        let area = image.parentElement;
        console.log(area);

        let loader = document.createElement("div")
        loader.innerHTML = baseLoader;

        loader.classList.add('individual-loader');

        area.appendChild(loader);

        //Dès que l'image originale est chargée
        image.addEventListener('load', function(e){

            let original = e.target;
            let placeholder = e.target.nextElementSibling;
            
            
            loader.style.display="none";

            placeholder.style.display="none";
            original.style.display="block";

            original.classList.add('is-loaded');

            
        });

    });

});