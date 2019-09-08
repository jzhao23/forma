import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';
import dummyData from './dummyData';
import Quarter from './Quarter';

const Container = styled.div`
  display: flex;
`;
class App extends React.Component {

  constructor(){
    super();
    this.state = dummyData;
  };

  onDragEnd = result => {
    const {source, destination, draggableId} = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
      return;
    }
    const src_quarter = this.state.quarters[source.droppableId];
    const dst_quarter = this.state.quarters[destination.droppableId];

    if (src_quarter === dst_quarter) {
      const src_quarter_new_classes = Array.from(src_quarter.classes);
      src_quarter_new_classes.splice(source.index, 1);
      src_quarter_new_classes.splice(destination.index, 0, draggableId);

      const new_src_quarter = {
        ...src_quarter,
        classes: src_quarter_new_classes,
      };

      const new_state = {
        ...this.state,
        quarters: {
          ...this.state.quarters,
          [new_src_quarter.id]: new_src_quarter,
        },
      }

      this.setState(new_state);
      return;

    }

    const src_quarter_new_classes = Array.from(src_quarter.classes);
    src_quarter_new_classes.splice(source.index, 1);

    const dst_quarter_new_classes = Array.from(dst_quarter.classes);
    dst_quarter_new_classes.splice(destination.index, 0, draggableId);

    const new_src_quarter = {
      ...src_quarter,
      classes: src_quarter_new_classes,
    };

    const new_dst_quarter = {
      ...dst_quarter,
      classes: dst_quarter_new_classes,
    };

    const new_state = {
      ...this.state,
      quarters: {
        ...this.state.quarters,
        [new_src_quarter.id]: new_src_quarter,
        [new_dst_quarter.id]: new_dst_quarter,
      },
    }

    this.setState(new_state);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <Container>
          {this.state.quarterOrder.map(quarterId => {
            const quarter = this.state.quarters[quarterId];
            const classes = quarter.classes.map(classId => this.state.allClasses[classId]);

            return <Quarter key={quarter.id} quarter={quarter} classes={classes} />;
          })}
      </Container>
      </DragDropContext>
    );
  }
}

export default App;
