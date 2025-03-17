import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import MainView from '../components/main-view';
import NavLink from '../components/nav-link';
import route from '../constants/route';

export default function CameraPage() {
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()

    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [])

    if (!hasPermission) {
        return (
            <MainView>
                <Text>No Camera Permision Granted!</Text>
                <NavLink href={route.home}>Home</NavLink>
            </MainView>
        )
    }

    if (device == null) {
        return (
            <MainView>
                <Text>No Camera Device!</Text>
                <NavLink href={route.home}>Home</NavLink>
            </MainView>
        )
    }

    return (
        <View style={styles.container}>
            <NavLink href={route.home}>Home</NavLink>
            <Camera
                style={styles.camera}
                device={device}
                isActive={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 16
    },
    camera: {
        flex: 1,
        marginTop: 16
    }
});