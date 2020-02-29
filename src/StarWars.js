import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import "./index.css";
import axios from "axios";

class StarWars extends Component {
  constructor() {
    super();
    this.state = {
      tableRow1: [],
      homeWorldRow1: "",
      speciesRow1: "",
      tableRow2: [],
      homeWorldRow2: "",
      speciesRow2: "",
      tableRow3: [],
      homeWorldRow3: "",
      speciesRow3: "",
      tableRow4: [],
      homeWorldRow4: "",
      speciesRow4: "",
      tableRow5: [],
      homeWorldRow5: "",
      speciesRow5: "",
      tableRow6: [],
      homeWorldRow6: "",
      speciesRow6: "",
      tableRow7: [],
      homeWorldRow7: "",
      speciesRow7: "",
      tableRow8: [],
      homeWorldRow8: "",
      speciesRow8: "",
      tableRow9: [],
      homeWorldRow9: "",
      speciesRow9: "",
      tableRow10: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/1/").then(response => {
      this.setState({ tableRow1: response.data });
      Object.keys(this.state.tableRow1);
    });

    axios.get("https://swapi.co/api/planets/1/").then(response => {
      this.setState({ homeWorldRow1: response.data.name });
    });

    axios.get("https://swapi.co/api/species/1/").then(response => {
      this.setState({ speciesRow1: response.data.name });
    });

    axios.get("https://swapi.co/api/people/2/").then(response => {
      this.setState({ tableRow2: response.data });
      Object.keys(this.state.tableRow2);
    });

    axios.get("https://swapi.co/api/planets/1/").then(response => {
      this.setState({ homeWorldRow2: response.data.name });
    });

    axios.get("https://swapi.co/api/species/2/").then(response => {
      this.setState({ speciesRow2: response.data.name });
    });

    axios.get("https://swapi.co/api/people/3/").then(response => {
      this.setState({ tableRow3: response.data });
      Object.keys(this.state.tableRow3);
    });

    axios.get("https://swapi.co/api/planets/8/").then(response => {
      this.setState({ homeWorldRow3: response.data.name });
    });

    axios.get("https://swapi.co/api/species/2/").then(response => {
      this.setState({ speciesRow3: response.data.name });
    });

    axios.get("https://swapi.co/api/people/4/").then(response => {
      this.setState({ tableRow4: response.data });
      Object.keys(this.state.tableRow4);
    });

    axios.get("https://swapi.co/api/planets/1/").then(response => {
      this.setState({ homeWorldRow4: response.data.name });
    });

    axios.get("https://swapi.co/api/species/1/").then(response => {
      this.setState({ speciesRow4: response.data.name });
    });

    axios.get("https://swapi.co/api/people/5/").then(response => {
      this.setState({ tableRow5: response.data });
      Object.keys(this.state.tableRow5);
   
    });

    axios.get("https://swapi.co/api/planets/2/").then(response => {
      this.setState({ homeWorldRow5: response.data.name });
    });

    axios.get("https://swapi.co/api/species/1/").then(response => {
      this.setState({ speciesRow5: response.data.name });
    });

    axios.get("https://swapi.co/api/people/6/").then(response => {
      this.setState({ tableRow6: response.data });
      Object.keys(this.state.tableRow6);
      console.log(this.state.tableRow6);
    });

    axios.get("https://swapi.co/api/planets/1/").then(response => {
      this.setState({ homeWorldRow6: response.data.name });
    });

    axios
      .get("https://swapi.co/api/species/1/")
      .then(response => {
        this.setState({ speciesRow6: response.data.name });
      })

      .catch(error => {
        console.log(error);
      });
  }

  renderTableRow1() {
    return (
      <tr>
        <td>{this.state.tableRow1["name"]}</td>
        <td>{this.state.tableRow1["birth_year"]}</td>
        <td>{this.state.tableRow1["height"]}</td>
        <td>{this.state.tableRow1["mass"]}</td>
        <td>{this.state.homeWorldRow1}</td>
        <td>{this.state.speciesRow1}</td>
      </tr>
    );
  }

  renderTableRow2() {
    return (
      <tr>
        <td>{this.state.tableRow2["name"]}</td>
        <td>{this.state.tableRow2["birth_year"]}</td>
        <td>{this.state.tableRow2["height"]}</td>
        <td>{this.state.tableRow2["mass"]}</td>
        <td>{this.state.homeWorldRow2}</td>
        <td>{this.state.speciesRow2}</td>
      </tr>
    );
  }

  renderTableRow3() {
    return (
      <tr>
        <td>{this.state.tableRow3["name"]}</td>
        <td>{this.state.tableRow3["birth_year"]}</td>
        <td>{this.state.tableRow3["height"]}</td>
        <td>{this.state.tableRow3["mass"]}</td>
        <td>{this.state.homeWorldRow3}</td>
        <td>{this.state.speciesRow3}</td>
      </tr>
    );
  }

  renderTableRow4() {
    return (
      <tr>
        <td>{this.state.tableRow4["name"]}</td>
        <td>{this.state.tableRow4["birth_year"]}</td>
        <td>{this.state.tableRow4["height"]}</td>
        <td>{this.state.tableRow4["mass"]}</td>
        <td>{this.state.homeWorldRow4}</td>
        <td>{this.state.speciesRow4}</td>
      </tr>
    );
  }

  renderTableRow5() {
    return (
      <tr>
        <td>{this.state.tableRow5["name"]}</td>
        <td>{this.state.tableRow5["birth_year"]}</td>
        <td>{this.state.tableRow5["height"]}</td>
        <td>{this.state.tableRow5["mass"]}</td>
        <td>{this.state.homeWorldRow5}</td>
        <td>{this.state.speciesRow5}</td>
      </tr>
    );
  }


  renderTableRow6() {
    return (
      <tr>
        <td>{this.state.tableRow6["name"]}</td>
        <td>{this.state.tableRow6["birth_year"]}</td>
        <td>{this.state.tableRow6["height"]}</td>
        <td>{this.state.tableRow6["mass"]}</td>
        <td>{this.state.homeWorldRow6}</td>
        <td>{this.state.speciesRow6}</td>
      </tr>
    );
  }
  render() {
    return (
      <Container>
        <Table responsive className="mt-4 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Home World</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow1()}
            {this.renderTableRow2()}
            {this.renderTableRow3()}
            {this.renderTableRow4()}
            {this.renderTableRow5()}
            {this.renderTableRow6()}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default StarWars;
