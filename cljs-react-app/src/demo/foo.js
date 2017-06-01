import React, { Component } from "react";

export class Foo extends Component {
  render() {
    return (
      <div>This is from JS! {this.props.hello}</div>
    );
  }
}
