/** @jsx h */
import Preact, { h } from "preact"
import React from 'react'
import ReactDOM from 'react-dom';

class PreactComponent extends Preact.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

class ReactComponent extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class PreactWidget extends React.Component {
  constructor() {
    super()
    this.divRef = React.createRef()
  }
  
  componentDidMount() {
    this.renderPreact()
  }

  componentDidUpdate() {
    this.renderPreact()
  }

  renderPreact() {
    const children = this.props.children

    console.log(children)

    Preact.render(
      <ReactComponent />,
      this.divRef.current
    )
  }

  render() {
    let h = React.createElement
    return <div ref={this.divRef} />
  }
}

export default PreactWidget
