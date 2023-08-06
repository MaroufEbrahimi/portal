import React, { useState, useEffect } from 'react'
import ComputerScience from "../Faculties/ComputerScience/ComputerScience"
import Dentistry from "../Faculties/Dentistry/Dentistry"
import Low from "../Faculties/Low/Low"
import { useParams } from 'react-router-dom'


const faculties = [ComputerScience, Dentistry, Low];
function Faculties() {
    const { id } = useParams();
    const [component, setcomponent] = useState({ el: faculties[id] })
    useEffect(() => {
        setcomponent({ el: faculties[id] })
    }, [id])

    return <component.el />
}

export default Faculties