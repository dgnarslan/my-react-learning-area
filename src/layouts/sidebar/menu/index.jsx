import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { mainMenu } from '~/utilts/consts.jsx';
import More from '~/layouts/sidebar/menu/more/index.jsx';
import New from '~/layouts/sidebar/menu/new/index.jsx';
import { useAccount } from '~/store/auth/hooks.js';

export default function Menu() {
  const account = useAccount();
  return (
    <nav className={'mt-0.5 mb-1'} key={account}>
      {mainMenu.map((menu, index) => (
        <NavLink
          to={typeof menu.path === 'function' ? menu.path() : menu.path}
          key={index}
          className={'py-[3px] block group'}
        >
          {({ isActive }) => (
            <div
              className={classNames(
                'p-3 rounded-full inline-flex items-center gap-5 text-xl group-hover:bg-[#eff3f41a] transition-colors',
                { 'font-bold': isActive },
              )}
            >
              <div className={'w-[26.25px] h-[26.25px] relative'}>
                {menu?.notification && (
                  <span
                    className={
                      'w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -right-1 -top-1.5 flex items-center justify-center text-[11px]'
                    }
                  >
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className={'pr-4 text-xl'}>{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      {({ close }) => <More close={close} />}
      <New />
    </nav>
  );
}
