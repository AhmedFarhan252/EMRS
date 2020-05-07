import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animated = makeAnimated();

class DisList extends React.Component {
  handleChange = (selections) => {
    this.props.updateDiseases(selections);
  };

  render() {
    // Return empty list till list values are fetched
    if (this.props.loading) {
      return <Select />;
    } else {
      const options = this.props.diseases.map((d) => {
        return { value: d, label: d };
      });
      return (
        <Select
          components={animated}
          options={options}
          isSearchable
          placeholder="Select disease(s)"
          isMulti
          autoFocus
          onChange={this.handleChange}
        />
      );
    }
  }
}

export default DisList;
