let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
var highlight

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } 
        else if (styles.contains('increase')) {
            count++
        }
        else {
            count = 0
        }

        if (count < 0) {
            highlight = 'red'
        }
        else if (count > 0) {
            highlight = 'green'
        }
        else {
            highlight = '#222'
        }

        value.style.color = highlight
        value.textContent = count
    })
})
