import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings149256Navigator from '../features/Settings149256/navigator';
import UserProfile149249Navigator from '../features/UserProfile149249/navigator';
import Settings149248Navigator from '../features/Settings149248/navigator';
import Settings149246Navigator from '../features/Settings149246/navigator';
import SignIn2149244Navigator from '../features/SignIn2149244/navigator';
import Settings149234Navigator from '../features/Settings149234/navigator';
import UserProfile149227Navigator from '../features/UserProfile149227/navigator';
import Settings149226Navigator from '../features/Settings149226/navigator';
import Settings149224Navigator from '../features/Settings149224/navigator';
import SignIn2149222Navigator from '../features/SignIn2149222/navigator';
import Settings149220Navigator from '../features/Settings149220/navigator';
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
Settings149256: { screen: Settings149256Navigator },
UserProfile149249: { screen: UserProfile149249Navigator },
Settings149248: { screen: Settings149248Navigator },
Settings149246: { screen: Settings149246Navigator },
SignIn2149244: { screen: SignIn2149244Navigator },
Settings149234: { screen: Settings149234Navigator },
UserProfile149227: { screen: UserProfile149227Navigator },
Settings149226: { screen: Settings149226Navigator },
Settings149224: { screen: Settings149224Navigator },
SignIn2149222: { screen: SignIn2149222Navigator },
Settings149220: { screen: Settings149220Navigator },
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
