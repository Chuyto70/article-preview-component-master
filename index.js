let action = document.querySelector(".action");
let share = document.querySelector("#accionador");
let share_button = document.querySelector(".share-button-container")
let hidden_social = document.querySelector(".hidden-social")
let counter = 0;

let hidde = () => {
    share.animate([

        { transform: 'scaleX(1)' },
        { transform: 'scaleX(0)' }

    ], {

        duration: 450
    })
    setTimeout(() => {
        hidden_social.style.opacity = 0
    }, 400)

}
let show = () => {
    share.animate([

        { transform: 'scaleY(0)' },
        { transform: 'scaleY(1)' }

    ], {
        duration: 400
    })
    hidden_social.style.opacity = 1
}
share_button.addEventListener('click', () => {
    if (hidden_social.style.opacity == 1) {
        hidde();

    } else {
        show()
    }


})