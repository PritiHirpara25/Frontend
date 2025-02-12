import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dark_theme, light_theme } from '../../Redux/Action';

function ThemeButton() {

    const dispatch = useDispatch();

    const theme = useSelector(state => state.themereducer.theme)

    const toggletheme = () => {
        if(theme == 'light'){
            dispatch(dark_theme())
        }
        else{
            dispatch(light_theme())
        }
    }

    return (
        <>

            <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={toggletheme}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {/* {theme === 'dark' ? } */}
                </span>
            </label>

        </>

    )
}

export default ThemeButton