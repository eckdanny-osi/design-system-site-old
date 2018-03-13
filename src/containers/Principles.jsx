import { connect } from 'react-redux';
import {
  addPrinciple,
  removePrinciple,
} from '../actions/principles-action-creator';
import Principles from '../components/Principles';

const mapStateToProps = ({ principles }) => ({
  principles,
});

const mapDispatchToProps = dispatch => ({
  removePrinciple: id => dispatch(removePrinciple(id)),
  addPrinciple: principle => dispatch(addPrinciple(principle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Principles);
