import Button from '~/components/button/index.jsx';
import { useState } from 'react';

export default function UserCard({ user }) {
  const [following, setFollowing] = useState(false);
  return (
    <div
      className={'py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]'}
    >
      <img
        src={user.avatar}
        className={'w-10 h-10 rounded-full object-cover'}
        alt={'Avatar'}
      />
      <div className={'flex-1 max-w-full flex flex-col text-start'}>
        <div className={'text-[15px] font-bold leading-5 flex items-center'}>
          {user.fullName}
        </div>
        <div className={'text-[15px] text-[color:var(--color-baseSecondary)]'}>
          @{user.username}
        </div>
      </div>
      <div>
        {following ? (
          <Button
            size="small"
            variant="white-outline"
            className={'whitespace-nowrap group'}
            onClick={() => setFollowing(false)}
          >
            <div className={'flex group-hover:hidden'}>Takip ediliyor</div>
            <div className={'hidden group-hover:flex'}>Takibi bırak</div>
          </Button>
        ) : (
          <Button
            size="small"
            variant="white"
            onClick={() => setFollowing(true)}
          >
            Takip et
          </Button>
        )}
      </div>
    </div>
  );
}
