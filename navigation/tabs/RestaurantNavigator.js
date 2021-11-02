import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurant from '../../screens/Restaurant';
const restaurantsStack = createNativeStackNavigator();

export default function RestaurantsNavigator() {
    return (
        <restaurantsStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <restaurantsStack.Screen name="Restaurant" component={Restaurant} />
        </restaurantsStack.Navigator>
    );
}