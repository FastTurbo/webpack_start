
import bar from './bar'

let component = () =>{
    const el = document.createElement('div')
    el.style = 'color:red;height:50px;line-height:50px;'
    el.innerHTML = _.join(['Hello','world!'],' ')


    return el;
}

document.body.appendChild(component())