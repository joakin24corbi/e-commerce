import React from 'react';
import { getIn } from 'formik';
import { styled } from '@mui/material/styles';
import { FormControlLabel as MFormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(MFormControlLabel)(() => ({
  marginLeft: 0
}));

export const Feedback = styled('p')(({ theme }) => ({
  fontSize: '0.75rem',
  color: theme.palette.error.main,
  margin: '0 14px 16px 42px'
}));

const FormControlLabel = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <>
      <StyledFormControlLabel {...props} />
      <Feedback>
        {getIn(touched, field.name) && getIn(errors, field.name) && getIn(errors, field.name)}
      </Feedback>
    </>
  )
}

export default FormControlLabel;
