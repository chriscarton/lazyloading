# Imagick

## Créer des images de très basse qualité à partir d'un dossier. 

D'abord, créer le dossier Resized. 

	mkdir Resized

	mogrify -path Resized -adaptive-resize 100% -quality 1% *.jpeg

## Améliorer le code JavaScript.

	//Pour n'afficher une image qu'une fois qu'elle est vraiment ready. 
	const img = new Image();
	img.src = "nebula.jpg";
	img.decode().then(() => {
	    document.body.appendChild(img);
	}).catch(() => {
	    document.body.appendChild(new Text("Could not load the nebula :("));
	});