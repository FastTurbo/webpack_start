import _ from 'lodash'
import printMe from './print.js'
import './style.css'
import { cube } from './math.js'

function component(){
    /*var el = document.createElement('div')
    var pre =
    var btn = document.createElement('button')
    el.innerHTML = _.join(['Hello','webpack is good'],'  ')

    el.className = 'hello'
    btn.innerHTML = 'click me'
    btn.onclick = printMe
    el.appendChild(btn)*/
    var el = document.createElement('pre')
    el.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    return el
}

document.body.appendChild(component())

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Accepting the updated printMe module!')
        printMe()
    })
}