import { Text as TextBase, TextProps as TextBaseProps } from "zerogravity-ui";
import '@fontsource/karla'

interface TextProps extends TextBaseProps {}

const Text = ({ children, ...props }: TextProps) => {
    return (
        <TextBase
        css={{ ...props.css }}
        {...props}
        >
            {children}
        </TextBase>
    )
}

export default Text;