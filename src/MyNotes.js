import React, { Component }  from 'react';
import './MyNotes.css';

class MyNotes extends Component {
  state={
    notes: []
  };

  addNote = () =>  {
    const {notes} = this.state;
    const ids = notes.map(({id})=> id);
    const notesCopy= [...this.state.notes];
    const max_id =ids.length > 0 ? Math.max(...ids): 0;
    notesCopy.push({id: max_id + 1});
    this.setState({notes: notesCopy});
  };

  removeNote = ({id: noteId}) => {
    const {notes} = this.state
    const Note = notes.filter(({id}) => id!== noteId);
    this.setState({notes: Note});
  };

  render () {
    const {notes} = this.state;
    return (
      <div className="notes-app">
      <header className="header">
        <div className="title-box">
          <h1 className="title">My Notes App</h1>
        </div>
      </header>
      <div className="btn-container">
        <button type="button" onClick={() => this.addNote()} className="note-btn add-btn">
          Click here to create a note :)
        </button>

      </div>
      <section className="notes-text-area">
        {
          notes.map (({id}) => {
              return (
                  <div className="note-box" key={id}>
                    <div className="form-box">
                    <label className="label">Note</label>
                    <textarea className="text-area" id="textarea1" placeholder="Add a new note!" class="text-area"/>
                      <div className="delete-btn-container">
                    <button onClick={()=>this.removeNote({id})} className="delete-btn">Delete</button>
                    </div>
                    </div>
                  </div>
              )
          })
      }
    </section>
    </div>
    );
  };

};
export default MyNotes;
