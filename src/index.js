/** @jsx h */
import Preact, { h } from "preact"
import React from 'react'

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

    Preact.render(
      children,
      this.divRef.current
    )
  }

  render() {
    let h = React.createElement
    return <div ref={this.divRef} />
  }
}

export default PreactWidget
