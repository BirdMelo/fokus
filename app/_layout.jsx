import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { colors} from '../components/Colors'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TasksProvider } from '../components/context/TaskProvider';

export default function Layout() {
  return (
    <TasksProvider>
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
              title: ''
            }}
          />
          <Drawer.Screen
            name='tasks/index'
            options={{
              drawerLabel: 'Lista de tarefas',
              title: ''
            }}
          />
          <Drawer.Screen
            name='add_task/index'
            options={{
              drawerItemStyle: {display: 'none'},
              title: '',
              headerLeft: () => {
                return <Ionicons
                  name='arrow-back'
                  size={24}
                  color={colors.text}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate('/tasks')}
                />
              }
            }}
          />
          <Drawer.Screen
            name='edit_task/[id]'
            options={{
              drawerItemStyle: {display: 'none'},
              title: '',
              headerLeft: () => {
                return <Ionicons
                  name='arrow-back'
                  size={24}
                  color={colors.text}
                  style={{ marginLeft: 16 }}
                  onPress={() => router.navigate('/tasks')}
                />
              }
            }}
          />

        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
