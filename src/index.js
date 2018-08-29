import React from 'react'

import Preact, { h } from "preact"

export default class PreactWidget extends React.Component {
  constructor() {
    super();
    this.divRef = React.createRef()
  }

  componentDidMount() {
    this.renderPreact()
  }

  componentDidUpdate() {
    this.renderPreact()
  }

  renderPreact() {
    Preact.render(
      this.props.child,
      this.divRef.current
    );
  }

  render() {
    let h = React.createElement
    return <div ref={this.divRef} />
  }
}
