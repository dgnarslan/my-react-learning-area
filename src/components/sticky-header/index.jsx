import PropTypes from 'prop-types';

export default function StickyHeader({ title, children }) {
  return (
    <header className={'sticky top-0 z-10 bg-black/[.65] backdrop-blur-md'}>
      <h3 className={'px-4 h-[3.313rem] flex items-center text-xl font-bold'}>
        {title}
      </h3>
      {children}
    </header>
  );
}

StickyHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
