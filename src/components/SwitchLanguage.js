import React from 'react'
import i18next from 'i18next'


function SwitchLanguage(){
    return(
        <div>
            <button onClick={()=>i18next.changeLanguage('en')}>English</button>
            <button onClick={()=>i18next.changeLanguage('tr')}>Türkçe</button>
        </div>
    );
}

export default SwitchLanguage;

