import React from 'react'
import LogDetails from "../Components/LogDetails"
import { useState } from "react-router-dom"

export default function Show() {
    return (
        <div>
            <h2>Show</h2>
            <section>
                <LogDetails />
            </section>
        </div>
    )
}
