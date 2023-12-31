import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import Tela from "../screens/Tela2/Tela";


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tela2" component={Tela} />

            </Stack.Navigator>
        </NavigationContainer>



    )
}