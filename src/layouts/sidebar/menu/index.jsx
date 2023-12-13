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
          className={'py-[0.188rem] block group'}
        >
          {({ isActive }) => (
            <div
              className={classNames(
                'p-3 rounded-full inline-flex items-center gap-5 text-xl group-hover:bg-[color:var(--background-third)] transition-colors',
                { 'font-bold': isActive },
              )}
            >
              <div className={'w-[1.641rem] h-[1.641rem] relative'}>
                {menu?.notification && (
                  <span
                    className={
                      'w-[1.125rem] h-[1.125rem] rounded-full bg-[color:var(--color-primary)] text-white border border-[color:var(--background-primary] absolute -right-1 -top-1.5 flex items-center justify-center text-[0.688rem]'
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
      <More close={close} />
      <New />
    </nav>
  );
}
