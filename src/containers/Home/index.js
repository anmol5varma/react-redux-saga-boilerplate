import { connect } from 'react-redux';
import { setSampleAction } from '../../redux/actions/index.actions';
import Home from '../../components/Home';

const mapStateToProps = ({ sample }) => ({
  sample,
});

const mapDispatchToProps = dispatch => ({
  updateSampleReducer: value => dispatch(setSampleAction(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
