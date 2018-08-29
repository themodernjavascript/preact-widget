import React from 'react'
import Preact, { h } from "preact"

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
    console.log(this.props.children);
    
    Preact.render(
      this.props.children,
      this.divRef.current
    )
  }

  render() {
    let h = React.createElement
    return <div ref={this.divRef} />
  }
}

export default PreactWidget
