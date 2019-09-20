import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Class from './Class';
import Quarter from './Quarter';
import requirementsData from './requirementsData'

const Title = styled.h3`
  padding: 8px;
  padding-bottom: 2px;
  margin: 2px;
  border: 10px solid green;
  max-width: 150px;
`;

const Container = styled.div`
  margin-top: 10px;
  border: 1px solid green;
  border-radius: 2px;
  max-width: 150px;
  word-wrap: break-word;
`;

class Sidebar extends React.Component{
  
  constructor(){
    super();
    this.requirements = requirementsData;
  };

  render() {
    return (
      <Title>
        <input type="text" className="input" placeholder="Search..." />
        <Container>
          const majorID = "CS";
          const major = this.state.Majors[majorID];
        </Container>
      </Title>
    );
  }
}

export default Sidebar;