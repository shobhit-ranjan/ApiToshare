import React from "react";
import "./PersonList.css";

export default class PersonList extends React.Component {
  render() {
    return (
      <div>
        {this.props.persons.map((person) => (
          <div>
            <img src={person.avatar} className="person-image" />
            <div className="flex column justify-center">
              <div className="person-name">
                {person.first_name} {person.last_name}
              </div>
              <div className="flex column justify-space-between"></div>
              <div>
                <span className="person-email">{person.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
