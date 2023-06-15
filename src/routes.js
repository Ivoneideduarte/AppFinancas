import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/Home'
import Money from './pages/Money'
import Store from './pages/Store'

import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator()

export function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',

                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: '#fff'
                }
            }}

            tabBar={ (props) => <CustomTabBar/> }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Money" component={Money} />
            <Tab.Screen name="Store" component={Store} />
        </Tab.Navigator>
    )
}
