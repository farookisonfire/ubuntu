import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';

const ProgramsList = ({programs, filters}) => {
  
  
  function createRows(program) {

    if(!filters.youthEmpowerment && program.type === 'Youth Empowerment'){return;}
    if(!filters.healthInnovation && program.type === 'Health Innovation'){return;}
    if(!filters.oneWeek && program.length === '1 week'){return;}
    if(!filters.twoWeek && program.length === '2 week'){return;}
    if(!filters.fourWeek && program.length === '4 week'){return;}

    return (
      <Table.Row key={program.id}>
        <Table.Cell>{program.type}</Table.Cell>
        <Table.Cell>{program.length}</Table.Cell>
        <Table.Cell>{program.date}</Table.Cell>
        <Table.Cell>{`${program.enrolled}/25`}</Table.Cell>
        <Table.Cell><Button content='Enroll' /></Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table compact="very" striped>
      <Table.Header>
        <Table.Row textAlign='center'>
          <Table.HeaderCell colSpan='5'>2018 Cape Town</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Length</Table.HeaderCell>
          <Table.HeaderCell>Dates</Table.HeaderCell>
          <Table.HeaderCell>Capacity</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {programs.map(createRows)}
      </Table.Body>
    </Table>
  );
};

ProgramsList.propTypes = {
  programs: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
};

export default ProgramsList;

