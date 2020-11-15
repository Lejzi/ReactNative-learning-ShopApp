import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
	{
		ProductsOverview: ProductsOverviewScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
			},
			headerTintColor: Platform.OS === 'android' ? 'White' : Colors.primary
		}
	}
);

export default createAppContainer(ProductsNavigator);
