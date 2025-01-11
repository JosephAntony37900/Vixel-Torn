import { Wallet } from '@gear-js/wallet-connect';
import Logo from '../../../icons/logito.png';

function Header() {
  return (
    <header>
     { /*<Logo />*/}

      <Wallet
        theme="vara" // 'vara' (default) or 'gear' theme variation
        displayBalance={true} // true (default) or false
      />
    </header>
  );
}

export { Header };