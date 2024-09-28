import React from 'react'
// import "remixicon/fonts/remixicon.css";
import USD from '../assets/asset 0.svg'
import Eur from "../assets/european-union.png";
import styles from "../CSS/Dropdown.module.css";

const Dropdown = () => {
  return (  
    <div>
      <div className="text-black flex items-center gap-2 relative">
        <img src={USD} alt="" className={styles.flag} />
        <p>USD</p>
        <i className="ri-arrow-down-s-line text-black"></i>

        <section className="Dropdown absolute top-[40px] bg-black -right-16 hidden w-52 px-3">
          <div className="text-black flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p> EUR € | France</p>
          </div>
          <div className="text-black flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p> EUR € | Germany</p>
          </div>
          <div className="text-black flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>USD $ | United States</p>
          </div>
          <div className="text-black flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>VND ₫ | Vietnam</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dropdown