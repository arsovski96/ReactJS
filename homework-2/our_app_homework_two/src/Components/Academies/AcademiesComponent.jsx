import React from "react";

const Academies = ({ academies, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {academies.map((academy) => (
          <Academy key={academy.id} academy={academy} />
        ))}
      </div>
    </div>
  );
};

class Academy extends React.Component {
  render() {
    const { academy } = this.props;
    return (
      <div>
        <h3>{academy.name}</h3>
        <p>{academy.description}</p>
      </div>
    );
  }
}

export default Academies;
