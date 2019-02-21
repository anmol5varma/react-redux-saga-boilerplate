// This mock will make sure that we are able to access mapStateToProps,
// mapDispatchToProps and reactComponent in the test file.

const mockDispatch = jest.fn(action => action);

module.exports = {
  connect: (mapStateToProps, mapDispatchToProps) => reactComponent => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) => mapDispatchToProps(dispatch,
      ownProps),
    reactComponent,
    mockDispatch,
  }),
  Provider: ({ children }) => children,
};
