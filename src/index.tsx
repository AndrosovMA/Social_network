/** React*/
import React from 'react';

/** CSS*/
import './scss/index.scss';

/** Data information*/
import {state} from "./redux/state";

/** Other*/
import {RerenderEntireTree} from "./render";

RerenderEntireTree(state);
