
import { ReactComponent as Logo } from '../../logo.svg';

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        {/* Logo is an actual React component */}
        <Logo width="300px" height="300" />
      </div>
    </div>
  );
}

export default Header;
