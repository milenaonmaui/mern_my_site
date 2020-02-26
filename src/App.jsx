class NotesFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the notes filter.</div>
    );
  }
}

class NotesTable extends React.Component {
  render() {
    const rowStyle = {border: "1px solid silver", padding: 4};
    return (
      <table>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <NoteRow rowStyle={rowStyle} note_id={1} note_title="Switch to JavaScript within JSX"/> {/* somehow pass Issue 1 data to this */}
          <NoteRow rowStyle={rowStyle} note_id={2} note_title="React's pholosophy with regard to inheritance"/> {/* somehow pass Issue 2 data to this */}
        </tbody>
      </table>
    );
  }
}

class NoteRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return (
      <tr>
        <td style={style}>{this.props.note_id}</td>
        <td style={style}>{this.props.note_title}</td>
      </tr>
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
