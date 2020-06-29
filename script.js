document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = _ => {
        if (document.documentElement.scrollTop > 0.1 || document.body.scrollTop > 80) {
            document.querySelector('nav').style.height = '10vh'
        }
        else {
            document.querySelector('nav').style.height = '20vh'
        }
    }
})

