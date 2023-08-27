import { ReactComponent as Logo } from '../../logoWhite.svg';

function Footer() {
  return (
    <div
      className="Footer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="FooterContent">
        {/* Logo is an actual React component */}
        <Logo className="FooterLogo" />
        <p>© 2023 Grand frais app Steve Bell. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
