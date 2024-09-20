import React from 'react'
// import "remixicon/fonts/remixicon.css";
import Eur from "../assets/european-union.png";
import styles from "../CSS/Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <div>
<div className="text-white flex items-center gap-2 relative">
        <img src={props.img} alt="" className={styles.flag} />
        <p>{props.name}</p>
        <i className="ri-arrow-down-s-line text-white"></i>

        <section className="Dropdown absolute top-[40px] bg-black -right-16 hidden w-52 px-3">
          <div className="text-white flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>EUR</p>
            <p>|</p>
            <p>Franch</p>
          </div>
          <div className="text-white flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>EUR</p>
            <p>|</p>
            <p>Germany</p>
          </div>
          <div className="text-white flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>EUR</p>
            <p>|</p>
            <p>Unted States</p>
          </div>
          <div className="text-white flex items-center gap-2">
            <img src={Eur} alt="" className={styles.flag} />
            <p>EUR</p>
            <p>|</p>
            <p>Vitnam</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dropdown