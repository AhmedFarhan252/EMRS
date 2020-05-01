import React, { Component } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

class Records extends Component {
  state = { data: [], start: 0, length: null }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(dummy => {
      this.setState({
        data: dummy.data.slice(this.state.start, this.state.start + 6),
        length: dummy.data.length,
      })
    })
  }
  ClickHandle = e => {
    this.setState({ start: this.state.start + 5 })
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(dummy => {
      this.setState({
        data: dummy.data.slice(this.state.start, this.state.start + 6),
        length: dummy.data.length,
      })
    })
  }
  render() {
    const ContainerStyle = {
      width: "75%",
      marginTop: "7%",
    }
    const BtnStyle = {
      padding: "2% 10%",
      fontSize: "16px",
      marginLeft: "30%",
    }
    const BtnStyle1 = {
      padding: "3px 60px",
      fontSize: "40px",
      marginLeft: "93%",
      marginBottom: "60%",
      border: "solid #eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
    }
    const { data } = this.state
    return (
      <div className="container-fluid" style={ContainerStyle}>
        <table className="table table-hover">
          <caption>
            Showing {this.state.start + 5} of {this.state.length}
          </caption>
          <thead className="bg-primary table-dark">
            <tr>
              <th>Record #</th>
              <th>Date(DD/MM/YYYY)</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          {data.map(tuple => (
            <tbody className="table-light">
              <tr key={tuple.id}>
                <td>{tuple.id}</td>
                <td>{tuple.userId}</td>
                <td>{tuple.id}</td>
                <td>
                  <NavLink to="#">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={BtnStyle}
                    >
                      view
                    </button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button style={BtnStyle1} onClick={this.ClickHandle}>
          next>
        </button>
      </div>
    )
  }
}

export default Records
