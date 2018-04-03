
import { cube } from './math.js'

function component(){

    var el = document.createElement('pre')
    el.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return el
}

document.body.appendChild(component())
