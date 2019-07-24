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
    primaryInfo: PropTypes.string.isRequired,
    secundaryInfo: PropTypes.string.isRequired,
  };

  return (
    <div className="flex-row flex-space-between row-infos">
      <p className="primary-info infos">{primaryInfoLabel}: {primaryInfo}</p>
      <p className="secundary-info infos">{secundaryInfoLabel}: {secundaryInfo}</p>
    </div>
  );
}