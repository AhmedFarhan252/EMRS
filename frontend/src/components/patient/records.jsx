import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      limit: 5,
      total: 0,
    };
  }

  //Returns the records and total from the server
  getRecords = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("/patient/recordslist", {
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

  componentDidMount = () => {
    this.getRecords().then((res) => {
      const { records, total } = res.data.response;
      this.setState({
        data: records.slice(),
        total: total["count"],
      });
    });
  };

  setRecords = () => {
    this.getRecords().then((res) => {
      const { records, total } = res.data.response;
      this.setState({
        data: records.slice(),
        total: total["count"],
      });
    });
  };

  ClickHandle = (e) => {
    if (e.target.id === "back" && this.state.offset !== 0) {
      const newOffset = this.state.offset - this.state.limit;
      this.setState({ offset: newOffset }, () => {
        this.setRecords();
      });
    } else if (
      e.target.id === "next" &&
      this.state.offset + this.state.limit < this.state.total
    ) {
      const newOffset = this.state.offset + this.state.limit;
      this.setState({ offset: newOffset }, () => {
        this.setRecords();
      });
    } else {
      //So that data is not fetch again in case of no change
      return;
    }
  };
  render() {
    const ContainerStyle = {
      width: "75%",
      marginTop: "7%",
      height: "10%",
    };
    const BtnStyle = {
      padding: "2% 10%",
      fontSize: "16px",
      marginLeft: "30%",
    };
    const BtnStyle1 = {
      padding: "0.5% 0.5%",
      fontSize: "500%",
      border: "solid #eceeef",
      backgroundColor: "#eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
      marginLeft: "30%",
    };
    const BtnStyle2 = {
      padding: "0.5% 0.5%",
      fontSize: "500%",
      float: "left",
      backgroundColor: "#eceeef",
      border: "solid #eceeef",
      color: "#2d8fd5",
      fontStyle: "italic",
      marginLeft: "28%",
    };
    const { data } = this.state;
    return (
      <div className="container-fluid" style={ContainerStyle}>
        <table className="table table-hover">
          <caption>
            showing {this.state.offset + 1} to{" "}
            {this.state.offset + this.state.data.length} of {this.state.total}
          </caption>
          <thead className="bg-primary table-dark">
            <tr>
              <th>Record #</th>
              <th>Date(DD/MM/YYYY)</th>
              <th>Doctor Name</th>
              <th></th>
            </tr>
          </thead>
          {data.map((tuple) => (
            <tbody key={tuple.id} className="table-light">
              <tr>
                <td>{tuple.id}</td>
                <td>{tuple.date}</td>
                <td>{tuple.doc_fname + " " + tuple.doc_lname}</td>
                <td>
                  <NavLink
                    to={{
                      pathname: "view-record",
                      state: {
                        id: tuple.id,
                      },
                    }}
                  >
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
        <div
          className="flex-container"
          style={{ justifyContent: "space-evenly" }}
        >
          <button style={BtnStyle1} onClick={this.ClickHandle} id="next">
            >
          </button>
          <button style={BtnStyle2} onClick={this.ClickHandle} id="back">
            &lt;
          </button>
        </div>
      </div>
    );
  }
}

export default Records;
