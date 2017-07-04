import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Divider} from 'semantic-ui-react';

const ProgramFilter = ({handleCheckChange}) => (
  <div>
    <Divider horizontal>Filter</Divider>
    <div style={{textAlign: 'center'}}>
      <Checkbox onChange={handleCheckChange} className='filters' label='Youth Empowerment' value="youthEmpowerment" defaultChecked/>
      <Checkbox onChange={handleCheckChange} className='filters' label='Health Innovation' value="healthInnovation" defaultChecked/>
      <Checkbox onChange={handleCheckChange} className='filters' label='1 week' value="oneWeek" defaultChecked/>
      <Checkbox onChange={handleCheckChange} className='filters' label='2 week' value="twoWeek" defaultChecked/>
      <Checkbox onChange={handleCheckChange} className='filters' label='4 week' value="fourWeek" defaultChecked/>
    </div>
  </div>
);

ProgramFilter.propTypes = {
  handleCheckChange: PropTypes.func.isRequired
};

export default ProgramFilter;
