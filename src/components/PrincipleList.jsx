import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  principles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string,
    })
  ),
  onRemove: PropTypes.func,
};

const defaultProps = {
  principles: [],
  onRemove: () => {},
};

const PrincipleList = ({ principles, onRemove }) => (
  <div>
    {principles.length ? (
      <ul>
        {principles.map(principle => (
          <li key={principle.id}>
            {principle.message}{' '}
            <button onClick={() => onRemove(principle)}>X</button>
          </li>
        ))}
      </ul>
    ) : (
      <p>
        <strong>Oh No's!</strong> We have no principles :(
      </p>
    )}
  </div>
);

PrincipleList.propTypes = propTypes;
PrincipleList.defaultProps = defaultProps;

export default PrincipleList;
