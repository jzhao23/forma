import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Class from './Class';

const Container = styled.div`
  margin: 8px;
  border: 10px solid green;
  border-radius: 2px;
  width: 300px;
  height: 250px;
`;
const Title = styled.h3`
  padding: 8px;
  padding-bottom: 2px;
  margin: 2px;
`;
const ClassList = styled.div`
  padding: 8px;
  padding-top: 0px;
  flex-grow: 1;
  min-height: 150px;
  max-height: 202px;
  overflow: auto;
`;

class Quarter extends React.Component{
  render() {
    const {quarter, classes} = this.props;
    return (
      <Container>
        <Title>{quarter.id}</Title>
        <Droppable droppableId={quarter.id}>
          {provided => (
            <ClassList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {classes.map((classId, index) => <Class key={classId} class={classId} name={classId.name} index={index} />)}
              {provided.placeholder}
            </ClassList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Quarter;
