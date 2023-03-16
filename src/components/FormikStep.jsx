import { cloneElement } from 'react';

const FormikStep = ({ children, ...props }) => {
  return <>{cloneElement(children, props)}</>;
}

export default FormikStep;
