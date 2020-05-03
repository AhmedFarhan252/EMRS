import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: [], start: 0 };
    this.number_of_elements = 5;
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((dummy) => {
      this.setState({
        accounts: dummy.data.map(x => ({ name: x.id, email: x.userId }))//.slice(0, 16)
      });
    })
  }

  nextHandle = () => {
    if (this.state.start + this.number_of_elements < this.state.accounts.length - this.number_of_elements) {
      this.setState((state) => ({
        start: state.start + this.number_of_elements
      }));
    }
    else {
      this.setState((state) => ({
        start: state.accounts.length - this.number_of_elements
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
    // const BtnStyleAdd = {
    //   padding: "2% 10%",
    //   fontSize: "16px",
    //   // marginLeft: "70%",
    //   marginBottom: "2%",
    // }
    const BtnStyle1 = {
      padding: "3px 60px",
      fontSize: "40px",
      marginLeft: "30%",
      // marginBottom: "60%",
      border: "solid #eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
    }
    // const BtnStyle2 = {
    //   padding: "3px 60px",
    //   fontSize: "40px",
    //   marginRight: "93%",
    //   marginBottom: "60%",
    //   border: "solid #eceeef",
    //   color: "#2d8fd5",
    //   fontStyle: "italic",
    // }

    return (
      <div className="container-fluid" style={ContainerStyle}>
        {/* <Link to='#'>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={BtnStyleAdd}
          >
            Add
          </button>
        </Link> */}
        <div className="row">
          <div className="col-10">
            <table className="table table-hover">
              <caption>
                Showing {this.state.start + 1} - {this.state.start + this.number_of_elements} of {this.state.accounts.length}
              </caption>
              <thead className="bg-primary table-dark">
                <tr>
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-light">
                {
                  this.state.accounts.slice(
                    this.state.start, this.state.start + this.number_of_elements
                  ).map(user => (
                    <tr key={user.name}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to="#">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            style={BtnStyle}
                          >
                            Drop
                          </button>
                        </Link>
                      </td>
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
          <div className="col">
            <Link to='#'>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={BtnStyle}
              >
                Add
              </button>
            </Link>
          </div>
        </div>
        {/* <table style={{ width: "100%" }}><tbody>
          <tr>
            <td><button style={BtnStyle2} onClick={this.prevHandle}>
              &lt;
            </button></td>
            <td><button style={BtnStyle1} onClick={this.nextHandle}>
              &gt;
            </button></td>
          </tr>
        </tbody></table> */}

      </div>
    )
  }
}

export default Accounts;