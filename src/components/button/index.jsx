import { createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Button({
  as,
  size,
  variant,
  children,
  className,
  ...props
}) {
  return createElement(
    as,
    {
      type: 'button',
      className: classNames(
        'rounded-full flex items-center font-bold transition-all justify-center',
        {
          'px-4 h-8 text-sm': size === 'small',
          'px-4 h-9': size === 'normal',
          'px-4 h-[52px] w-full text-[17px]': size === 'large',
          'bg-[color:var(--color-primary)] hover:opacity-90 text-white':
            variant === 'primary',
          'bg-[color:var(--color-base)] text-[color:var(--background-primary)]':
            variant === 'white',
          'border border-[#536471] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]':
            variant === 'white-outline',
          [className]: true,
        },
      ),
      ...props,
    },
    children,
  );
}

Button.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
  props: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  size: 'normal',
  variant: 'primary',
};
