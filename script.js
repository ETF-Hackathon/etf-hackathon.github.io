document.addEventListener('DOMContentLoaded', _ => {
    window.onscroll = _ => {
        if (document.documentElement.scrollTop > 0.1 || document.body.scrollTop > 80) {
            document.querySelector('nav').style.height = '10vh'
            document.querySelector('nav').style.backgroundColor = '#cecece'
        }
        else {
            document.querySelector('nav').style.height = '20vh'
            document.querySelector('nav').style.border = 'none'
            document.querySelector('nav').style.backgroundColor = '#e2e2e2'
        }
    }
})

