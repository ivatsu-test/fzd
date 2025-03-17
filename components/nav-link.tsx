import { Link } from "expo-router";
import { StyleSheet } from "react-native";

interface NavLinkProps extends React.PropsWithChildren<{
    href: string;
    title?: string;
}> { }

export default function NavLink(props: NavLinkProps) {
    return (
        <Link href={props.href} style={styles.button}>{props.title ?? props.children}</Link>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
    },
});