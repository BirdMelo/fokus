import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { colors} from '../components/Colors'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: colors.bgColor },
          headerTintColor: colors.text,
          drawerStyle: { backgroundColor: colors.bgColor },
          drawerLabelStyle: { color: colors.text }
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            headerShown: false,
            drawerItemStyle: {display: 'none'}
          }}
        />
        <Drawer.Screen
          name='pomodoro'
          options={{
            drawerLabel: 'Timer',
            title: null
          }}
        />
        <Drawer.Screen
          name='tasks/index'
          options={{
            drawerLabel: 'Lista de tarefas',
            title: null
          }}
        />
        <Drawer.Screen
          name='add_task/index'
          options={{
            drawerItemStyle: {display: 'none'}
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
