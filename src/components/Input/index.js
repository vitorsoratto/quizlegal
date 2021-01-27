import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
width: 100%;
max-width: 350px;
padding: 15px;
background-color: ${({ theme }) => theme.colors.mainBg};
border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: 5px;
color: ${({ theme }) => theme.colors.contrastText};
font-weight: bold;
font-size: 14px;
outline: 0;
margin-bottom: 25px;
&:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.secondary};
}
`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
