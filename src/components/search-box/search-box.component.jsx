import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
