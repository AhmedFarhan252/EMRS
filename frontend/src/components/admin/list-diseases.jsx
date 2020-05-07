import React from "react";
import axios from "axios";

class ListDiseases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diseases: [],
      offset: 0,
      limit: 5,
      total: 0,
      name: "",
    };
  }

  //Returns the list of diseases and the total
  getDiseases = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("/admin/disease-list", {
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
    this.getDiseases().then((res) => {
      const { total, records } = res.data.response;
      const data = records.map((d, idx) => {
        return { name: d.disease, id: idx + this.state.offset + 1 };
      });

      this.setState({
        diseases: data.slice(),
        total: total["count"],
      });
    });
  }

  setDisease = () => {
    this.getDiseases().then((res) => {
      const { total, records } = res.data.response;
      const data = records.map((d, idx) => {
        return { name: d.disease, id: idx + this.state.offset + 1 };
      });

      this.setState({
        diseases: data.slice(),
        total: total["count"],
        name: "",
      });
    });
  };

  addDisease = (e) => {
    e.preventDefault();

    axios
      .post("/admin/disease", {
        disease: this.state.name,
      })
      .then((res) => {
        this.setDisease();
      });
  };

  nextHandle = () => {
    if (this.state.offset + this.state.limit < this.state.total) {
      this.setState(
        {
          offset: this.state.offset + this.state.limit,
        },
        () => {
          this.setDisease();
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
          this.setDisease();
        }
      );
    } else {
      return;
    }
  };

  InputHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const ContainerStyle = {
      width: "75%",
      marginTop: "7%",
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
          <form>
            <label>
              Disease Name:
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.InputHandle}
              />
              <button onClick={this.addDisease}>Add</button>
            </label>
          </form>
        </div>

        <div className="row">
          <table className="table table-hover">
            <caption>
              Showing {this.state.offset + 1} -{" "}
              {this.state.offset + this.state.diseases.length} of{" "}
              {this.state.total}
            </caption>
            <thead className="bg-primary table-dark">
              <tr>
                <th>ID</th>
                <th>Disease Name</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {this.state.diseases.map((disease) => (
                <tr key={disease.id}>
                  <td>{disease.id}</td>
                  <td>{disease.name}</td>
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
      </div>
    );
  }
}

export default ListDiseases;
