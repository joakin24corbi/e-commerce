import React, { useState, cloneElement, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {
  Box,
  Container,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';

const FormikStepper = ({ children, ...props }) => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const childrenArray = Children.toArray(children);
  const currentChild = childrenArray[step];

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleBack = () => {
    step === 0
      ? navigate(-1)
      : setStep((step) => step - 1);
  };

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <Box>
      <Container maxWidth='md'>
        <Stepper activeStep={step} alternativeLabel>
          {childrenArray.map((child, index) => (
            <Step key={index} completed={step > index || completed}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
      <Formik
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          if (isLastStep()) {
            setCompleted(true);
          } else {
            handleNext();
          }
          currentChild.props.onSubmit(values, { setSubmitting });
        }}
      >
        <Form noValidate>
          {cloneElement(currentChild, { handleBack })}
        </Form>
      </Formik>
    </Box>
  );
};

export default FormikStepper;
