import { FormattedMessage } from 'react-intl';
import { menus } from './menus.js';
import {
  FooterDiv,
  FooterContainer,
  FooterGrid,
  FooterLink
} from './_Footer.jsx';
import useSettings from 'hooks/useSettings';

const Footer = () => {
  const { settings } = useSettings();

  const content = menus.find((menu) => menu.name === 'footer')?.list;

  return (
    <FooterDiv>
      <FooterContainer maxWidth={settings.maxWidth}>
        <FooterGrid>
          <h3>E-COMMERCE</h3>
          <p><FormattedMessage id='FOOTER.TITLE' /></p>
          <p><FormattedMessage id='FOOTER.COPYRIGHT' /></p>
        </FooterGrid>
        {content && content.map((menu) => 
          <FooterGrid key={menu.title}>
            <h3><FormattedMessage id={menu.title} /></h3>
            {menu.items && menu.items.map((item) => 
              <FooterLink to={item.path} key={item.name}>
                <FormattedMessage id={item.name} />
              </FooterLink>
            )}
          </FooterGrid>
        )}
      </FooterContainer>
    </FooterDiv>
  )
}

export default Footer;
