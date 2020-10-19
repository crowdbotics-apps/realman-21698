import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile149213Navigator from '../features/UserProfile149213/navigator';
import Settings149212Navigator from '../features/Settings149212/navigator';
import Settings149210Navigator from '../features/Settings149210/navigator';
import SignIn2149208Navigator from '../features/SignIn2149208/navigator';
import Settings149141Navigator from '../features/Settings149141/navigator';
import UserProfile149134Navigator from '../features/UserProfile149134/navigator';
import Settings149133Navigator from '../features/Settings149133/navigator';
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
UserProfile149213: { screen: UserProfile149213Navigator },
Settings149212: { screen: Settings149212Navigator },
Settings149210: { screen: Settings149210Navigator },
SignIn2149208: { screen: SignIn2149208Navigator },
Settings149141: { screen: Settings149141Navigator },
UserProfile149134: { screen: UserProfile149134Navigator },
Settings149133: { screen: Settings149133Navigator },
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
