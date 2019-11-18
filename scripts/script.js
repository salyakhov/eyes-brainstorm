/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');

// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');

const Patches = require('Patches');
const numberFormat = '{0}';

const rightCounter = Patches.getScalarValue('rightCounter');
Patches.setStringValue('rightCounterTxt', rightCounter.format(numberFormat));

const leftCounter = Patches.getScalarValue('leftCounter');
Patches.setStringValue('leftCounterTxt', leftCounter.format(numberFormat));

const timer = Patches.getScalarValue('runTimer');
Patches.setStringValue('runTimerTxt', timer.format(numberFormat));