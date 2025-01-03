import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CarrerDetails = () => {

    const { id } = useParams()

    const career = useLoaderData()

    return (
        <div>
            <h1>CarrerDetails {id}</h1>
            <div>
                <span>{career.id}</span>
                <span> . {career.title}</span>
                <span> : {career.body}</span>
            </div>
        </div>
    )
}

export const CarrerDetailsData = async ({ params }) => {
    const { id } = params
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)

    if (!res.ok) {
        throw Error("Data Not Available...")
    }

    return res.json()
}

export default CarrerDetails