import {
  Heading as HeadingBase,
  HeadingProps as HeadingBaseProps,
} from 'zerogravity-ui';
import '@fontsource/dm-serif-display';

interface HeadingProps extends HeadingBaseProps {}

const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <HeadingBase
      {...props}
      css={{
        fontFamily: 'DM Serif Display',
        fontWeight: 'inherit',
        ...props.css,
      }}
    >
      {children}
    </HeadingBase>
  );
};

export default Heading;
