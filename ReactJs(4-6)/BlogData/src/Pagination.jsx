import React from 'react'
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Pagination = ({page , setPage}) => {

    function handleNext() {
        if (page < 5) {
          setPage((prev) => prev + 1);
        } else {
          setPage(1);
        }
      }
    
      function handlePrev() {
        if (page > 1) {
          setPage((prev) => prev - 1);
        }
      }


    return (
        <div className='m-10'>
            <ul className='flex'>
                <li className='arrow'>
                    <span className={`${page == 1 ? 'disabled' : ''} `}  onClick={handlePrev}>
                        <FcPrevious/>
                    </span>
                </li>
                <li className={`${page == 1 ? 'active' : ''}`}>
                    <span className='paginatenum'>1</span>
                </li>
                <li className={`${page == 2 ? 'active' : ''}`}>
                    <span className='paginatenum'>2</span>
                </li>
                <li className={`${page == 3 ? 'active' : ''}`}>
                    <span className='paginatenum'>3</span>
                </li>
                <li className={`${page == 4 ? 'active' : ''}`}>
                    <span className='paginatenum'>4</span>
                </li>
                <li className={`${page == 5 ? 'active' : ''}`}>
                    <span className='paginatenum'>5</span>
                </li>
                <li className='arrow'>
                    <span onClick={handleNext} className=''>
                        <FcNext/>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Pagination