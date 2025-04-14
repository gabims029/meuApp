import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CadastroEventoScreen from "./screens/CadastroEventoScreen";
import CadastroOrganizadorScreen from "./screens/CadastroOrganizadorScreen";
import CadastroIngressoScreen from "./screens/CadastroIngressoScreen";
import Layout from "./components/Layout";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="TaskList" component={TaskList}/>
        <Stack.Screen name="TaskDetail" component={TaskDetail}/>
        <Stack.Screen
          name="Login" component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro" component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        />
        <Stack.Screen name="EventosScreen">
          {() => (
            <Layout>
              <EventosScreen/>
            </Layout>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CadastroEvento" component={CadastroEventoScreen} />
        <Stack.Screen
          name="CadastroOrganizador"
          component={CadastroOrganizadorScreen}
        />
        <Stack.Screen
          name="CadastroIngresso"
          component={CadastroIngressoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
