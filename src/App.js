import "./App.css";
import PersonList from "./PersonList";
import ReactPaginate from "react-paginate";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    persons: [],
    pageCount: 0,
    page: 1,
  };

  componentDidMount() {
    this.loadPersonFromServer();
  }

  loadPersonFromServer() {
    axios
      .get(`https://reqres.in/api/users?page=` + this.state.page)
      .then((res) => {
        const persons = res.data.data;
        const totalPages = res.data.total_pages;
        this.setState({ persons: persons, pageCount: totalPages });
      });
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({ page: selected + 1 }, () => {
      this.loadPersonFromServer();
    });
  };

  render() {
    return (
      <div className="App" id="react-paginate">
        <PersonList persons={this.state.persons} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
