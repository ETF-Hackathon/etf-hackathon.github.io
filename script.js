document.addEventListener('DOMContentLoaded', _ => {
    window.onscroll = _ => {
        if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1) {
            document.querySelector('nav').style.height = '10vh'
            document.querySelector('nav').style.backgroundColor = '#cecece'
            document.querySelector('#logoPic').style.height = '60px'
            document.querySelector('#logoPic').style.width = '60px'
            document.querySelector('#logoText').style.fontSize = '17px'

        }
        else {
            document.querySelector('nav').style.height = '20vh'
            document.querySelector('nav').style.border = 'none'
            document.querySelector('nav').style.backgroundColor = '#e2e2e2'
            document.querySelector('#logoPic').style.height = '75px'
            document.querySelector('#logoPic').style.width = '75px'
            document.querySelector('#logoText').style.fontSize = '20px'
        }
    }
})

// #logoPic {
//     height: 60px;
//     width: 60px;
// }