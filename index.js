/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';


import App from './App'
import { name as appName } from './app.json';
import { store } from './app/store/store';


const MainApp = () => {
    return <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
            <App />
        </ApplicationProvider>
    </Provider>
}

AppRegistry.registerComponent(appName, () => MainApp);
