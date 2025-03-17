import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

interface MainViewProps extends React.PropsWithChildren<{}> { }

export default function MainView(props: MainViewProps) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});