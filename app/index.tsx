import MainView from '../components/main-view';
import NavLink from '../components/nav-link';
import route from '../constants/route';

export default function IndexPage() {
    return (
        <MainView>
            <NavLink href={route.camera} title='Camera' />
        </MainView>
    );
}
