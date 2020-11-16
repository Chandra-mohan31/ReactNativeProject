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
import NetfilxStore from "./NetflixStore";

AppRegistry.registerComponent(appName, () =>Tictactoe);
