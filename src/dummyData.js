const dummyData = {
  allClasses: {
    'CS106A': {
      id: 'CS106A',
      name: 'Introduction to Computer Science',
    },
    'CS107': {
      id: 'CS107',
      name: 'Computer Systems',
    },
    'CS231N': {
      id: 'CS231N',
      name: 'Computer Vision',
    },
    'PHIL1': {
      id: 'PHIL1',
      name: 'Introduction to Philosophy',
    },
    'ECON1': {
      id: 'ECON1',
      name: 'Introduction to Economics',
    },
  },
  quarters: {
    'Autumn': {
      id: 'Autumn',
      classes: ['CS106A', 'ECON1'],
    },
    'Winter': {
      id: 'Winter',
      classes: ['CS107', 'PHIL1'],
    },
    'Spring': {
      id: 'Spring',
      classes: ['CS231N'],
    },
  },
  quarterOrder: ['Autumn', 'Winter', 'Spring'],
}

export default dummyData;
