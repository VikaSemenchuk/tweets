import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as UserPlaceholder } from '../images/user-placeholder.svg';

const Avatar = ({ src }) => {

  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div>
      {(imgLoading || imgError) && <UserPlaceholder />}
      {!imgError && (
        <img
          src={src}
          alt="user-avatar"
          onLoad={() => setImgLoading(false)}
          onError={() => {
            setImgLoading(false);
            setImgError(true);
          }}
          style={{ display: imgLoading ? 'none' : 'block' }}
        />
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
