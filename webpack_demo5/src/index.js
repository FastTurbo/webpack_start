import _ from 'lodash'
import Print from './print.js'

function component(){
    var div = document.createElement('div')
    div.innerHTML = _.join(['Hello','world!'],' ')
    div.onclick = Print.bind(null,'Hello webpack!')

    return div
}
document.body.appendChild(component())