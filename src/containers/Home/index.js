import { connect } from 'react-redux';
import { sampleAction } from '../../redux/actions/index.actions';
import Home from '../../components/Home';

const mapStateToProps = ({ sample }) => ({
  sample,
});

const mapDispatchToProps = dispatch => ({
  updateSampleReducer: value => dispatch(sampleAction(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
