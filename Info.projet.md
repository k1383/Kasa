## Figma
    
- https://www.figma.com/design/4VQgyUcTTCv3m76nDz4gj3/Untitled?node-id=0-1&p=f&t=sLjzKaUcjgDakB3h-0
    
## Initialisation du projet avec Vite (React + TS + Sass)
    
npm create vite@latest 
Project name → nom du projet
Select a framework → React
Select a variant → TypeScript
cd (première lettre du nom du projet + tab)
npm install 
npm install sass 
npm install react-router-dom
npm run dev (et ctrl clic)  

## Repository GitHub
    
- https://github.com/k1383/Kasa

# Configuration des routes avec React Router
    
    ├── App.tsx
    ├── main.tsx

## Dossier data
    
Intégration du fichier logements.json avec le code json donner par le formateur 
    
    ├── data/ # logements.json 
    
## Création des composants
    
    ├── components / # Header.tsx, Footer.tsx, Card.tsx, Carousel.tsx, Collapse.tsx
    
## Dossier styles
    
    ├── styles / # _variables.scss, _mixins.scss, Header.scss, Footer.scss, Card.scss, Collapse.scss, NotFound.scss
    
_variables.scss → Récupération des fonts et des couleurs repérer dans le figma 
    
_mixins.scss → Création de mixins pour les bloc répétitive notamment les display grid / grid-template- columns 
    
    @mixin Grid-3C(){ // Grid-3C → columns = 3 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    } //   @include Grid-3C();

    @mixin Grid-2C(){ // Grid-2C → columns = 2
        display: grid;
        grid-template-columns: 1fr 1fr;
    } //   @include Grid-2C();

    @mixin Grid-1C(){ // Grid-1C → columns = 1
        display: grid;
        grid-template-columns: 1fr ;
    } //   @include Grid-1C();


## Icones
    
Utilisation des site suivant pour récupérer les icones et les intégrer a mon projet react 
    
(Location, stars, arrow left and right)
    
    - https://react-icons.github.io/react-icons/
    - https://www.npmjs.com/package/react-icons
    
`npm install react-icons --save`
    
## Ressources utiliser 
    
- https://stackoverflow.com/questions/73801978/find-method-doesnt-work-properly-in-react (/:id)
    
    ```bash
    let result = data.find(item => item.id === id)
    ```
- https://medium.com/@shuklawhyaman/image-carousel-in-react-222bf9b5c80d (Carousel)

- https://www.w3schools.com/react/react_usestate.asp   (Collapse)

-https://medium.com/edonec/build-a-react-collapsible-component-from-scratch-using-react-hooks-typescript-73dfd02c9208 (Collapse)