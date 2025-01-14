import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import { Provider as FavoriteProvider } from "./src/context/FavoriteContext";
import { TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"

 


 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <FavoriteProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Search" component={SearchScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Favorite")}
              style={{ marginRight: 15 }}
            >
              <Feather name="heart" size={25} color="black" />
            </TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
  );
}