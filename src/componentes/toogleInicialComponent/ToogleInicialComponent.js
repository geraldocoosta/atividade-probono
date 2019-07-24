import React from 'react';
import PropTypes from 'prop-types';

function ToogleInicialComponent(props) {
  const { onChange } = props;

  ToogleInicialComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  return (
    <div className="ajuste-middle">
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button b2" id="button-10">
            <input type="checkbox" className="checkbox" onChange={onChange} defaultChecked="false" />
            <div className="knobs">
              <span>novo</span>
            </div>
            <div className="layer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToogleInicialComponent;
