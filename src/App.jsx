class NotesFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the notes filter.</div>
    );
  }
}

class NotesTable extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the notes table.</div>
    );
  }
}

class NotesAdd extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the notes add.</div>
    );
  }
}
class NotesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Study Notes</h1>
        <NotesFilter />
        <hr />
        <NotesTable />
        <hr />
        <NotesAdd />
      </React.Fragment>
    );
  }
}
const element = <NotesList />
ReactDOM.render(element, document.getElementById('contents'));
