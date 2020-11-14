/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dice from "./Dice";
import SpanishNum from "./SpanishNum";
import CurrencyApp from "./CurrencyApp";
import cameraApp from "./cameraApp";
import Tictactoe from "./Tictactoe";

AppRegistry.registerComponent(appName, () =>Tictactoe);
