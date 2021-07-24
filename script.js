// MAKS
const letters = [
    ['ጠ', 'ᛖ', 'ℳ', 'ꁒ', '𝕸', 'ᗰ', 'ᙢ', '爪'],
    ['Ꭿ', '₳', 'ᗩ', '@', '𝕬', 'Ⱥ', '⟑', 'ꋫ'],
    ['ᛕ', '₭', 'Ꮶ', 'Ҡ', 'k', 'Ҝ', '𝕶', 'ꀗ'],
    ['ꌚ', 'S', '𝕾', '∫', '$', '§', 'ֆ', 'Ꮥ']
];

function randomLetters(arr) {
    let randomI = (Math.round(Math.random() * 10) - 3 );
    if (randomI >= 0){
        if(arr.indexOf(randomI)){
            return arr[randomI];
        }
    } else {
        randomI += 3;
        if(arr.indexOf(randomI)){
            return arr[randomI];
        }
    }
};



let container = document.createElement('div'),
    body = document.querySelector('body');

function createContainer() {
    container.classList.add('bigBlock');
    document.body.append(container);
    container.style.left = `${body.clientWidth/2 - container.offsetWidth/2}px`;
    container.style.top = `50px`;

    return container;
}
createContainer();


function write(elem){
    let arrLet = [];
    for (let i = 0; i < 1; i++){
        arrLet.push(randomLetters(letters[i]));
        setInterval(() => {elem.innerHTML = `
        <div class='smalBlock'>${randomLetters(letters[0])}</div>
        <div class='smalBlock'>${randomLetters(letters[1])}</div>
        <div class='smalBlock'>${randomLetters(letters[2])}</div>
        <div class='smalBlock'>${randomLetters(letters[3])}</div>`}, 400);
    }

}
write(container);

