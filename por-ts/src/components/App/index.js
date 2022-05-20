import { connect } from 'react-redux';
import App from './App';
import { startLoading } from '../../store/actions';

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = {
  startLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
