const section = document.querySelector('#section-buttons');
const bts = section.querySelectorAll('div');
const audioMetal = document.querySelector('#metal');
const audio = document.querySelector('#drum');


window.addEventListener('keypress', function(event){
    const chave = event.key;
    const playSongs = {
        q: () => {
            tocarTeclas(0, audio, 'kick');
        },
        w: () => {
            tocarTeclas(1, audioMetal, 'snare');
        },
        e: () => {
            tocarTeclas(2, audio, 'clash');
        },
        r: () => {
            tocarTeclas(3, audio, 'hit');
        }

    };

    playSongs[chave]();
    
});

function tocarTeclas(index, saida, name) {
    song01(name, saida);
    bts[index].classList = 'ativo';

    setTimeout(function () {
        bts[index].classList = '';
    
    }, 100);
}


bts[0].addEventListener('click', function () {
    song01('kick', audio)
});

bts[1].addEventListener('click', function() {
    song01('snare', audioMetal);
});

bts[2].addEventListener('click', function() {
    song01('clash', audio)
});

bts[3].addEventListener('click', function () {
    song01('hit', audio)
});

function song01 (name, saida) {
    saida.src = `./assets/audios/${name}.wav`;
    saida.play();
};


for (bt of bts) {
    bt.click();
}