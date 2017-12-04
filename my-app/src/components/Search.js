var React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit() {
    this.props.search(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Gif"
          onChange={(event) => this.handleChange(event)}
          value={this.state.search}
        />
        <button onClick={() => this.handleSubmit()}>Search</button>
      </div>
    )
  }
}

export default Search;
