import React, { useEffect, useState } from 'react';
import './App.css'
import api from './services/api'
import Header from './components/Header'

export default function App(){
    const [projects, setProjects]= useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, []) 
    
    // useState retorna um array com 2 posições
    // 1. Os dados
    // 2. função de atualização dos dados

    function handleAddProject() {    // dica do Diego: quando há uma função acionada pelo usuario, inicia-se o nome dela com "handle" 

        //para alterar a lista de projetos, devemos usar o setProjects
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return (
        <> 
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}  
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}


