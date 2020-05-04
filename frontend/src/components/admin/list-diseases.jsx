import React from "react";
import axios from "axios";

class ListDiseases extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diseases: [], start: 0 };
    this.number_of_elements = 5;
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((dummy) => {
      this.setState({
        diseases: dummy.data.map(x => ({ id: x.id, name: x.title.slice(0, 20) }))//.slice(0, 16)
      });
    })
  }

  nextHandle = () => {
    if (this.state.start + this.number_of_elements < this.state.diseases.length - this.number_of_elements) {
      this.setState((state) => ({
        start: state.start + this.number_of_elements
      }));
    }
    else {
      this.setState((state) => ({
        start: state.diseases.length - this.number_of_elements
      }));
    }
  }

  prevHandle = () => {
    if (this.state.start - this.number_of_elements >= 0) {
      this.setState((state) => ({
        start: state.start - this.number_of_elements
      }));
    }
    else {
      this.setState(() => ({
        start: 0
      }));
    }
  }

  handleClick = (e) => {
    // new disease name sent to backend
  }

  render() {
    const ContainerStyle = {
      width: "75%",
      marginTop: "7%",
    }
    const BtnStyle1 = {
      padding: "3px 60px",
      fontSize: "40px",
      marginLeft: "30%",
      border: "solid #eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
    }

    return (
      <div className="container-fluid" style={ContainerStyle}>
        <div className="row">
          <form>
            <label>
              Disease Name:
              <input
                type="text"
                name="id"
              // onChange={e => this.handleChange(e)}
              />
              <button onClick={e => this.handleClick(e)}>
                Add
              </button>
            </label>
          </form>
        </div>

        <div className="row">
          <table className="table table-hover">
            <caption>
              Showing {this.state.start + 1} - {this.state.start + this.number_of_elements} of {this.state.diseases.length}
            </caption>
            <thead className="bg-primary table-dark">
              <tr>
                <th>ID</th>
                <th>Disease Name</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {
                this.state.diseases.slice(
                  this.state.start, this.state.start + this.number_of_elements
                ).map(disease => (
                  <tr key={disease.id}>
                    <td>{disease.id}</td>
                    <td>{disease.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="row">
            <div className="col">
              <button style={BtnStyle1} onClick={this.prevHandle}>
                &lt;
                </button>
            </div>
            <div className="col">
              <button style={BtnStyle1} onClick={this.nextHandle}>
                &gt;
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListDiseases;