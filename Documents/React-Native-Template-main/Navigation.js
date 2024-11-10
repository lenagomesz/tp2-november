import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home/index.jsx";
import TP2Stack from "./screens/Tabs/TP2Stack.jsx";

const tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={Home} />
      <tab.Screen name="TP2" component={TP2Stack} />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  );
}