import Logo from '~/layouts/main/sidebar/logo/index.jsx';
import Menu from '~/layouts/main/sidebar/menu/index.jsx';
import Account from '~/layouts/main/sidebar/account/index.jsx';
import { useAccount } from '~/store/auth/hooks.js';

export default function Sidebar() {
  const account = useAccount();
  return (
    <aside
      className={
        'w-[275px] max-h-screen min-h-screen px-2 flex flex-col sticky top-0 z-[2]'
      }
      key={account.id}
    >
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
