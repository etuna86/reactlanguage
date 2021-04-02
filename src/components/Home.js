import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'




function Home(){
    const [ MenuItems, setMenuItem ] = useState([]);

    useEffect(() => {
        axios.
        post('http://sidestar.local:8001/api/getLanguage',{
            lang:i18next.language,
        }).then((res)=>{
            console.warn("res: ",res);
            console.warn("res: ",res);
            setMenuItem(res.data);
        })
      },
[i18next.language]);

const {t} =useTranslation();

    return(
        <div>
            {i18next.language}
            <div>  {t('top_bar_title')}</div>
          <div>{MenuItems.rooms}</div>  
           
        </div>
    )
}

export default Home;