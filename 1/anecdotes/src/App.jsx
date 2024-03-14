import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotedIndex, setMostVotedIndex] = useState(null);

  useEffect(() => {
    const maxVotes = Math.max(...vote);
    const index = vote.indexOf(maxVotes);
    setMostVotedIndex(index);
  }, [vote]);

  const handlenextanacdoteClick = () => {
    setSelected(Math.floor(Math.random()* anecdotes.length));
  };

  const handleVote = () => {
    const newvote = [...vote]
    newvote[selected] += 1
    setVote(newvote)
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      { vote[selected] === 0 ? <p> no votes</p> : <p> has {vote[selected]} votes</p> }
      <p>
        <button onClick={handleVote}> vote </button>
        <button onClick={handlenextanacdoteClick}>next anecdote</button>;</p>
      <h2>anecdote with most votes</h2>
        {mostVotedIndex !== null && (<p> {anecdotes[mostVotedIndex]}</p>)}
        <p>has {vote[mostVotedIndex]} votes</p>
    </div>

  )
}

export default App