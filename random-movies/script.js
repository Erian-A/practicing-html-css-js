const imgs = ['Chung.jpg', 'Licorice_Pizza.jpg', 'Nope.jpg', 'Pulp.jpg'];
const directors = ['Wong Kar-wai', 'Paul Thomas Anderson', 'Jordan Peele', 'Quentin Tarantino'];
const movieTitles = ['Chungking Express', 'Licorice Pizza', 'Nope', 'Pulp Fiction'];
const colorsChung = ['#0D0806' , '#2D0F05', '#58220B', '#5F3514'];
const colorsLico = ['#48070F' , '#542921', '#3F1722', '#74253B'];
const colorsNope = ['#0B140E' , '#0D1709', '#272515', '#3F460D'];
const colorsPulp = ['#241E30' , '#493534', '#816E61', '#84818E'];





const navBar = document.getElementsByClassName('teste');
const divs = document.getElementsByClassName('grid-item');
const directorsP = document.getElementsByClassName('director-name');
const movieTitlesP = document.getElementsByClassName('movie-name');
const body = document.querySelector('body');
const imgPoster = document.getElementsByClassName('grid-img');

for (let i = 0; i < imgs.length; i++){
    divs[i].style.backgroundImage = `url(imgs/${imgs[i]})`;
    divs[i].style.backgroundPosition = "center";
    divs[i].style.backgroundSize = "cover";
    
    directorsP[i].textContent = directors[i];
    movieTitlesP[i].textContent = movieTitles[i];
    
}

divs[0].addEventListener('mouseover', () => {
    body.style.background = `linear-gradient(to bottom, ${colorsChung[0]}, ${colorsChung[1]}, ${colorsChung[2]}, ${colorsChung[3]})`;
    imgPoster[0].src = 'imgs/posterChung.jpg';
});

divs[1].addEventListener('mouseover', () => {
    body.style.background = `linear-gradient(to bottom, ${colorsLico[0]}, ${colorsLico[1]}, ${colorsLico[2]}, ${colorsLico[3]})`;
    imgPoster[0].src = 'imgs/posterLico.jpg';

});

divs[2].addEventListener('mouseover', () => {
    body.style.background = `linear-gradient(to bottom, ${colorsNope[0]}, ${colorsNope[1]}, ${colorsNope[2]}, ${colorsNope[3]})`;
    imgPoster[0].src = 'imgs/posterNope.jpg';
});

divs[3].addEventListener('mouseover', () => {
    body.style.background = `linear-gradient(to bottom, ${colorsPulp[0]}, ${colorsPulp[1]}, ${colorsPulp[2]}, ${colorsPulp[3]})`;
    imgPoster[0].src = 'imgs/posterPulp.jpg';
});

navBar[0].addEventListener('mouseover', () => {
    body.style.background = '#f0f2f5';
});