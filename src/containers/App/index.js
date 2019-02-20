import { connect } from 'react-redux';
import { sampleAction } from '../../redux/actions/index.actions';
import App from '../../components/App'

const mapStateToProps = ({ sample }) => ({
    sample,
});

const mapDispatchToProps = dispatch => ({
    updateSampleReducer: (value) => dispatch(sampleAction(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
