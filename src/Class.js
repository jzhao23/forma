import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  padding: 8px;
  border: 3px solid green;
  border-radius: 2px;
  margin: 8px;
  background-color: white;
`;

class Class extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.class.id} index={this.props.index}>
        {provided => (
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.class.id}
            </Container>
        )}
      </Draggable>
    );
  }
}


export default Class;
