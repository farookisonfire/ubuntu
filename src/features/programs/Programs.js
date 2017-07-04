import React, {Component} from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProgramsList from './ProgramsList';
import {connect} from 'react-redux';
import ProgramFilter from './ProgramFilter';

class Programs extends Component {
  constructor() {
    super();

    this.state = {
      filters: {youthEmpowerment: true, healthInnovation: true, oneWeek: true, twoWeek: true, fourWeek: true}
    };

    this.handleCheckChange = (event, data) => {
      const filters = this.state.filters;
      filters[data.value] = data.checked;
      this.setState({filters: filters});
    };
  }
  
  render() {
    return(
      <div>
        <Message>
          <Message.Header>
            My Program
          </Message.Header>
          <p>
            Please select your program below...
          </p>
        </Message>
        <ProgramFilter handleCheckChange={this.handleCheckChange}/>
        <ProgramsList programs={this.props.programs} filters={this.state.filters} />
      </div>
    );
  }
}

Programs.propTypes = {
  programs: PropTypes.array.isRequired
};

const mapStateToProps = ({programs}) => {
  return {
    programs
  };
};

export default connect(mapStateToProps)(Programs);
