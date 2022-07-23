import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import NewsContextProvider from './src/contexts/NewsContext';
import SingleScreen from './src/screens/SingleScreen';
import MoreScreen from './src/screens/MoreScreen';


const App = () => {
    const Stack = createNativeStackNavigator()

    interface Screen {
        name: string;
        component: React.FC;
    }

    type Screens = Screen[]

    const screens: Screens = [
        {
            name: 'Home',
            component: HomeScreen
        },
        {
            name: 'Search',
            component: SearchScreen
        },
        {
            name: 'Single',
            component: SingleScreen
        },
        {
            name: 'More',
            component: MoreScreen
        },
    ]

    return (
        <TailwindProvider>
            <NewsContextProvider>
                <NavigationContainer>
                    <Stack.Navigator defaultScreenOptions={{ animation: "default"  }} initialRouteName="Home" screenOptions={{ headerShown: false }}>
                        {screens.map(({component, name}, index) => <Stack.Screen key={`${name}-${index}`} name={name} component={component} />)}
                    </Stack.Navigator>
                </NavigationContainer>
            </NewsContextProvider>
        </TailwindProvider>
    );
}

export default App;