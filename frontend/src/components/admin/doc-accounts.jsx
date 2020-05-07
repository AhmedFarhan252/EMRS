import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      offset: 0,
      limit: 5,
      total: 0,
    };
  }

  //Returns the doctors and total from the server
  getDoctors = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("/admin/accounts-list", {
          offset: this.state.offset,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  componentDidMount() {
    this.getDoctors().then((res) => {
      const { records, total } = res.data.response;
      this.setState({
        accounts: records.slice(),
        total: total["count"],
      });
    });
  }

  setDoctor = () => {
    this.getDoctors().then((res) => {
      const { records, total } = res.data.response;
      this.setState({
        accounts: records.slice(),
        total: total["count"],
      });
    });
  };

  deleteDoctor = (e) => {
    e.preventDefault();

    axios
      .post("/admin/delaccount", {
        email: e.target.id,
      })
      .then((res) => {
        this.setDoctor();
      });
  };

  nextHandle = () => {
    if (this.state.offset + this.state.limit < this.state.total) {
      this.setState(
        {
          offset: this.state.offset + this.state.limit,
        },
        () => {
          this.setDoctor();
        }
      );
    } else {
      return;
    }
  };

  prevHandle = () => {
    if (this.state.offset !== 0) {
      this.setState(
        {
          offset: this.state.offset - this.state.limit,
        },
        () => {
          this.setDoctor();
        }
      );
    } else {
      return;
    }
  };

  render() {
    const ContainerStyle = {
      width: "75%",
      marginTop: "7%",
    };
    const BtnStyle = {
      padding: "2% 10%",
      fontSize: "16px",
      marginLeft: "30%",
    };
    const AddBtnStyle = {
      padding: "2% 10%",
      width: "100%",
      height: "10%",
      fontSize: "16px",
      marginLeft: "20%",
    };
    const BtnStyle1 = {
      padding: "3px 60px",
      fontSize: "40px",
      marginLeft: "30%",
      border: "solid #eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
    };

    return (
      <div className="container-fluid" style={ContainerStyle}>
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <caption>
                Showing {this.state.offset + 1} -{" "}
                {this.state.offset + this.state.accounts.length} of{" "}
                {this.state.total}
              </caption>
              <thead className="bg-primary table-dark">
                <tr>
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-light">
                {this.state.accounts.map((user) => (
                  <tr key={user.id}>
                    <td>{user.doc_fname + " " + user.doc_lname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        type="button"
                        id={user.email}
                        className="btn btn-outline-danger"
                        style={BtnStyle}
                        onClick={this.deleteDoctor}
                      >
                        Drop
                      </button>
                    </td>
                  </tr>
                ))}
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
          <div className="col-2">
            <Link to="/a/add-doc-account" style={{ width: "100%" }}>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={AddBtnStyle}
              >
                Add
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
