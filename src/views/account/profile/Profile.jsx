import useSettings from 'hooks/useSettings';
import { FormattedMessage } from 'react-intl';
import { Container } from '@mui/material';
import AccountData from './AccountData';
import PasswordData from './PasswordData';
import NewsletterData from './NewsletterData';

const Profile = () => {
  const settings = useSettings();

  return (
    <Container maxWidth={settings.maxWidth}>
      <h3><FormattedMessage id='ACCOUNT.TITLE' /></h3>
      <AccountData />
      <PasswordData />
      <NewsletterData />
    </Container>
  )
}

export default Profile;
