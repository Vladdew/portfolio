import { connect } from 'react-redux';

import Content from './Content';
import { startLoading } from '../../store/actions';

const mapStateToProps = (state) => ({
  projects: state.projects,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  startLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
