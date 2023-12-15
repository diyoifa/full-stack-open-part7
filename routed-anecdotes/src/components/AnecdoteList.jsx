/* eslint-disable react/prop-types */
import Anecdote from "./Anecdote"
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom"
const AnecdoteList = ({anecdotes}) => {
  const {id} = useParams()
  console.log("🚀 ~ file: AnecdoteList.jsx:6 ~ AnecdoteList ~ id:", id)
  
  if(id){
    const anecdote = anecdotes.find( anecdote => {
      return anecdote.id.toString() === id.toString()
    })
    console.log("🚀 ~ file: AnecdoteList.jsx:11 ~ AnecdoteList ~ anecdote:", anecdote)
    return <Anecdote anecdote={anecdote}/>
  }else{
    return (
      <div>
        <h2>Anecdotes</h2>
        <ul>
          {anecdotes?.map(anecdote => 
            <Link to={`/anecdote/${anecdote.id}`} key={anecdote.id}>          
              <Anecdote  anecdote={anecdote}/>
            </Link>
          )}

        </ul>
      </div>
    )
  } 
  
}

export default AnecdoteList


