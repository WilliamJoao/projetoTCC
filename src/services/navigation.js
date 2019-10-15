import { NavigationActions } from 'react-navigation';

const config = {};

function setNavigator(ref) {
    config.navigator = ref;
}

function navigate(routeName, params) {
    if (config.navigator && routeName) {
        const action = NavigationActions.navigate({ routeName, params });
        config.navigator.dispatch(action);
    }
}

function goBack() {
    if (config.navigator) {
        const action = NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}

export default {
    navigate,
    setNavigator,
    goBack,
};
