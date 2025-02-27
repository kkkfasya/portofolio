function changeColor() {
    const paragraph = document.querySelector('p');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    paragraph.style.color = randomColor;
}
