import React from "react";
import "../CSS/Board.css";
import Note from "./Note";
import AddBtn from "./AddBtn";

const GENERIC_NOTE_TITLE = "New Note Title", GENERIC_NOTE_BODY = "New Note Body";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      title: GENERIC_NOTE_TITLE,
      body: GENERIC_NOTE_BODY,
      editMode: false,
      notes: []
    };
  }

  addNote() {
    this.state.notes.push({
      id: Date.now()
    });
    this.setState({
      notes: this.state.notes
    });
  }

  deleteNote(id) {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState({
      notes: newNoteArr
    });
  }
  
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  deleteHandler={this.deleteNote.bind(this)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <button
            className="btn btn-success add-button"
            onClick={this.addNote.bind(this)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
