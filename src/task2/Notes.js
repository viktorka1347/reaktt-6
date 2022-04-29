import React from 'react';
import Note from './Note.js';

class Notes extends React.Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.updateNotes();
  }

  async addNote(event) {
    event.preventDefault();

    const note = event.target.note;
    note.value = note.value.trim();
    if(!note.value) {
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        id: 0,
        content: note.value
      })
    }

    event.target.note.value = '';
    
    const response = await fetch(process.env.REACT_APP_NOTES_URL, options);
    if (response.status !== 204) {
      alert('Ошибка связи с сервером');
      return;
    }
    this.updateNotes();
  }

  async updateNotes() {
    const response = await fetch(process.env.REACT_APP_NOTES_URL); 
    if (response.status !== 200) {
      alert('Ошибка связи с сервером');
      return;
    }
    this.setState({ notes: await response.json() }); 
  }

  async deleteNote(id) {
    const options = {
      method: 'DELETE',
    }

    const response = await fetch(process.env.REACT_APP_NOTES_URL + '/' + id, options);
    if (response.status !== 204) {
      alert('Ошибка связи с сервером');
      return;
    }
    this.updateNotes();
  }

  render() {
    return (
      <div className="Notes">  
        <div className="Notes-title">
          <h2 className="Notes-title-text">Notes</h2>
          <button className="Notes-button-update" type="button" onClick={() => this.updateNotes()}>&#x1F503;</button>
        </div>
        <div className="Notes-notes">
          {this.state.notes.map(({ id, content }) => 
            <Note content={content} onButtonClick={() => this.deleteNote(id)} key={id} />
          )}
        </div>
        <form className="Notes-form" onSubmit={(event) => this.addNote(event)}>
          <label className="Notes-form-label">
            New Note
            <textarea className="Notes-form-input" rows="8" name="note" />
          </label>
          <button className="Notes-button-add" type="submit">&#x27A4;</button>
        </form>
      </div>
    );
  }
}

export default Notes;