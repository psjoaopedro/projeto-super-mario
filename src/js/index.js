/* 
OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.

    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela


OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal.
    - passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal

*/

const botaoTrailer = document.querySelector('.trailer-btn')
const botaoFecharModal = document.querySelector('.modal-close')
const video = document.getElementById('video')
const modal = document.querySelector('.modal')
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle('open')
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkDoVideo)
})

botaoFecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
})






