
import Library from './library';
import component from './component';
import common from './common.css';
import style2 from  './style2.css';

import 'react';

document.body.appendChild(component('I\'m learning webpack modules.',common.class1,style2.class1));

if(module.hot){
    module.hot.accept('./library',()=>{
        console.log('Accepting the updated library module!')
        Library.log()
    })
}