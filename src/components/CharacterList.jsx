

import { useEffect, useState } from 'react'
import Character from './Character'



function NavPage(props) {
  return (
    <header className='d-flex justify-content-between align-items-center'>
        <p>Page: {props.page}</p>
        <button className='btn btn-primary btn-sm'
           onClick={ ()=>
            props.setPage(props.page +1)
          }
        >Page {props.page +1}</button>
    </header>
  )
  
}




    const CharacterList = () => {
    const [characteres, setCharacteres] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)


    useEffect(()=>{
        //useEffect permite ejecutar codigo cuando el componente es creado y tambien cuando cambia un estado

        async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setCharacteres(data.results)
        setLoading(false)
    
        }
    
        fetchData()

    }, [page])//con el [ ] solo se ejecuta una vez


  return (
    <div className='container'>
      
      <NavPage
        page = {page}
        setPage = {setPage}
      />
      
      {
        loading ? <h1>Loading....</h1> :
        <div className="row">
        {
          characteres.map((character)=>{
            return (
                <div className='col-md-4' key={character.id}>
                  <Character 
                    character={character}
                  />
                </div>
              )
            
              })
          }
        </div>
      }
      
      <NavPage
        page = {page}
        setPage = {setPage}
      />
        
    </div>
  )
}

export default CharacterList