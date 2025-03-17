import { Text } from 'react-native';
import MainView from '../components/main-view';
import NavLink from '../components/nav-link';
import route from '../constants/route';

export default function CameraPage() {
    return (
        <MainView>
            <Text>Camera Page</Text>
            <NavLink href={route.home}>Home</NavLink>
        </MainView>
    );
}
