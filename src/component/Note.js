import React from 'react';
import '../CSS/Note.css';

const Note = (props) => {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>{props.body}</p>
            <button className="btn btn-info">Edit</button>
            <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>          </div>
        </div>
      </div>
    );
  }


export default Note;