import React, { useEffect, useState } from 'react'

const DateTime = () => {
    //Date and Time
    const [datetime, setDateTime] = useState('')

    // Date and Time
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()
            setDateTime(`${formattedDate} ${formattedTime}`)
        }, 1000)
        return () => clearInterval();
    }, [])

    return (
        <div>
            <div className='center'>{datetime}</div>
        </div>
    )
}

export default DateTime
