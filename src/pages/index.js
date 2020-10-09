import React, { useState, useEffect } from "react"
import styles from './index.module.scss'


export default function Home() {

  const [f, setFirst] = useState();
  const [s, setSecond] = useState();

  useEffect(()=>{

    let first = 0, second = 0;

    const start = setInterval(() => {
      setFirst(first);
      setSecond(second);

      first+= .05;
      second+= .1;
      if ( first > 30 ) clearInterval(start);
    }, 10);
  }, [])


  return (<>
            <div className={styles.box}>
              <p className={styles.text}>И Слово стало плотию, и обитало с нами, полное благодати и истины; и мы видели славу Его, славу, как Единородного от Отца.</p>
              <p className={styles.sourse}>( Евангелие от Иоанна. глава 1 стих 14 )</p>
            </div>
            <div 
              className={styles.light}
              style={{ background: `radial-gradient(circle at 50% 50%, transparent ${f}%, rgba(0,0,0,.95) ${s}%)` }}
            >
            </div>
          </>)
}
