const App2 = (props) => {
    const { notes } = props;
    const result = notes.map(note => note.id);
    console.log(result)
    
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li>
        </ul>
      </div>
      
    )
  }
  
  export default App2