import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddPrincipleForm from './AddPrincipleForm';
import PrincipleList from './PrincipleList';

class Principles extends PureComponent {
  state = {
    newPrinciple: '',
    isValid: false,
  };

  static propTypes = {
    principles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    removePrinciple: PropTypes.func.isRequired,
    addPrinciple: PropTypes.func.isRequired,
  };

  static defaultTypes = {
    principles: [],
  };

  handleOnSubmit = () => {
    this.props.addPrinciple(this.state.newPrinciple);
    this.setState({ newPrinciple: '', isValid: false });
  };

  handleOnChange = newPrinciple =>
    this.setState({
      newPrinciple,
      isValid: !!newPrinciple.length,
    });

  handleOnRemove = ({ id }) => this.props.removePrinciple(id);

  render() {
    return (
      <div>
        <h2>Principles</h2>
        <p>What are our design principles?</p>
        <PrincipleList
          principles={this.props.principles}
          onRemove={this.handleOnRemove}
        />
        <AddPrincipleForm
          value={this.state.newPrinciple}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          isValid={this.state.isValid}
        />
      </div>
    );
  }
}

export default Principles;
