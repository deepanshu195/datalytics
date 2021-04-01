import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// ACTION
import { demoaction } from "../../actions/demo";
// COMPONENTS

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demo: "",
    };
  }

  componentDidMount() {
    let { demoaction } = this.props;
    demoaction();
  }

  componentWillReceiveProps({ demo }) {
    this.setState({
      demo,
    });
  }

  handleOnChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let { state, handleFormSubmit } = this;
    let { demo } = state;
    console.log(this.props.demo);

    return <div>Demo Page</div>;
  }
}

function mapStateToProps({ demo }) {
  return {
    demo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ demoaction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
