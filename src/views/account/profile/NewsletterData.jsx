import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import {
  Card
} from './_Profile';

const PasswordData = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <Card>
      <Typography variant='h6'>
        <FormattedMessage id='ACCOUNT.NEWSLETTER.TITLE' />
      </Typography>
      <FormControlLabel
        checked={user.newsletter}
        control={<Checkbox color='primary' />}
        onChange={() => {
          let modified = JSON.parse(JSON.stringify(user));

          // Modify newsletter option
          modified.newsletter = !modified.newsletter;

          // Make the petition
          /* modifyUser(modified).then((response) => {
            if (response.status !== 200) {
              dispatch(
                snackActions.errorNotification(
                  intl.formatMessage({
                    id: 'ACCOUNT.GENERAL_INFO.ERROR',
                  })
                )
              );
            } else {
              // Saving user data in store
              updateUser(response.data);
              dispatch(
                snackActions.successNotification(
                  intl.formatMessage({
                    id: 'ACCOUNT.GENERAL_INFO.CHANGED',
                  })
                )
              );
            }
          }); */
        }}
        labelPlacement='end'
        label={
          <Typography variant='caption' className='v1-contrast'>
            <FormattedMessage id='ACCOUNT.NEWSLETTER.CHECKBOX' />
          </Typography>
        }
        sx={{ my: 2 }}
      />
    </Card>
  );
};

export default PasswordData;
