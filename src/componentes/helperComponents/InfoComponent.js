import React from 'react';
import PropTypes from 'prop-types';

export default function InfoComponent(props) {
  const {
    primaryInfoLabel,
    primaryInfo,
    secundaryInfoLabel,
    secundaryInfo,
  } = props;

  InfoComponent.propTypes = {
    primaryInfoLabel: PropTypes.string.isRequired,
    secundaryInfoLabel: PropTypes.string.isRequired,
    primaryInfo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.any,
    ]).isRequired,
    secundaryInfo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.any,
    ]).isRequired,
  };

  return (
    <div className="flex-row flex-space-between row-infos margin-top-row-info">
      <p className="primary-info infos">
        {`${primaryInfoLabel}: ${primaryInfo}`}
      </p>
      <p className="secundary-info infos">
        {`${secundaryInfoLabel}: ${secundaryInfo}`}
      </p>
    </div>
  );
}
