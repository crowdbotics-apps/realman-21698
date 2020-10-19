import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings149131Navigator from '../features/Settings149131/navigator';
import SignIn2149129Navigator from '../features/SignIn2149129/navigator';
import UserProfile149118Navigator from '../features/UserProfile149118/navigator';
import Tutorial149117Navigator from '../features/Tutorial149117/navigator';
import NotificationList149089Navigator from '../features/NotificationList149089/navigator';
import Settings149088Navigator from '../features/Settings149088/navigator';
import Settings149080Navigator from '../features/Settings149080/navigator';
import UserProfile149078Navigator from '../features/UserProfile149078/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings149131: { screen: Settings149131Navigator },
SignIn2149129: { screen: SignIn2149129Navigator },
UserProfile149118: { screen: UserProfile149118Navigator },
Tutorial149117: { screen: Tutorial149117Navigator },
NotificationList149089: { screen: NotificationList149089Navigator },
Settings149088: { screen: Settings149088Navigator },
Settings149080: { screen: Settings149080Navigator },
UserProfile149078: { screen: UserProfile149078Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
