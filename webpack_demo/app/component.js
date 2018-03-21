export default (text='hello world,tianpf,is it?I can refresh by myself!',class1,class2) =>{
    const element = document.createElement('div');
    element.innerText = text;
    element.className = class1;

    const p = document.createElement('p');
    p.innerText = 'p Line';
    p.className = class2;
    element.appendChild(p);

    return element;
}