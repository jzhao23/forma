import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Class from './Class';

const Title = styled.h3`
  padding: 8px;
  padding-bottom: 2px;
  margin: 2px;
  border: 10px solid green;
`;

class Sidebar extends React.Component{
  render() {
    return (
      <Title>
      <input type="text" className="input" placeholder="Search..." />
      </Title>
    );
  }
}

export default Sidebar;