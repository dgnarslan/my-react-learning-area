import Logo from '~/layouts/sidebar/logo/index.jsx';
import Menu from '~/layouts/sidebar/menu/index.jsx';
import Account from '~/layouts/sidebar/account/index.jsx';
import { useAccount } from '~/store/auth/hooks.js';

export default function Sidebar() {
  const account = useAccount();
  return (
    <aside
      className={'w-[275px] max-h-screen min-h-screen px-2 flex flex-col'}
      key={account.id}
    >
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
