/* eslint-disable react/prop-types */
import React from 'react';
import { Drawer, Router, Scene } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Colors from '../src/constants/colors';
import RestaurantInfoScreen from './screens/RestaurantInfoScreen';
import CuisineRestaurantsScreen from './screens/CuisineRestaurantsScreen';
import CartScreen from './screens/CartScreen';
import SideDrawer from './screens/SideDrawer';
import DrawerImage from './components/DrawerImage';
import OrdersList from './screens/OrderListScreen';


const AppRouter = () => (
  <Router>

    <Scene key="root" title="">
      <Scene
        key="loginScreen"
        component={LoginScreen}
        initial
        hideNavBar
      />
      <Drawer
        key="drawer"
        hideNavBar
        contentComponent={SideDrawer}
        drawerIcon={<DrawerImage />}
        panHandlers={null}
        drawerWidth={300}
      >
        <Scene>
          <Scene
            key="homeScreen"
            component={HomeScreen}
            title="Restaurant App"
            titleStyle={{
              fontFamily: 'Roboto Slab',
              color: Colors.primaryColor,
            }}
          />

          <Scene
            key="cuisineRestaurants"
            component={CuisineRestaurantsScreen}
            titleStyle={{
              fontFamily: 'Roboto Slab',
              color: Colors.primaryColor,
            }}
          />

          <Scene
            key="restaurantScreen"
            component={RestaurantInfoScreen}
          />

          <Scene
            key="cartScreen"
            component={CartScreen}
            navigationBarStyle={{
              backgroundColor: '#fff',
              elevation: 2,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
            }}
            titleStyle={{
              fontFamily: 'Roboto Slab',
              color: Colors.primaryColor,
            }}
            title="Cart"
          />

          <Scene
            key="showAllOrders"
            component={OrdersList}
            title="My Orders"
          />
        </Scene>
      </Drawer>
    </Scene>
  </Router>
);

export default AppRouter;
