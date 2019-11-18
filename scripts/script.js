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

const FaceTracking = require("FaceTracking");
const IrisTracking = require("IrisTracking");

var leftIris = Scene.root.find("left iris");
var rightIris = Scene.root.find("right iris");

var leftEyeballInfo = IrisTracking.leftEyeball(FaceTracking.face(0));
var rightEyeballInfo = IrisTracking.rightEyeball(FaceTracking.face(0));

//leftIris.transform.position = leftEyeballInfo.iris;
//rightIris.transform.position = rightEyeballInfo.iris;

// Diagnostics.watch("left posx: ",  leftEyeballInfo.iris.x);
// Diagnostics.watch("left posy: ",  leftEyeballInfo.iris.y);
// Diagnostics.watch("left posz: ",  leftEyeballInfo.iris.z);
//Diagnostics.log("left posy: " +  leftEyeballInfo.iris.y.pinLastValue());

const roty = leftEyeballInfo.rotation.eulerAngles.y
// Diagnostics.watch("left rotx: ",  leftEyeballInfo.rotation.eulerAngles.x);
// Diagnostics.watch("left roty: ",  roty);
// Diagnostics.watch("left rotz: ",  leftEyeballInfo.rotation.eulerAngles.z);
// Diagnostics.log("left rotx: " +  leftEyeballInfo.rotation.eulerAngles.x.pinLastValue());

// var rotx = leftEyeballInfo.rotation.eulerAngles.x.sub(leftEyeballInfo.iris.x);
// var roty = leftEyeballInfo.rotation.eulerAngles.y.sub(leftEyeballInfo.iris.y);
// var rotz = leftEyeballInfo.rotation.eulerAngles.z.sub(leftEyeballInfo.iris.z);
// Diagnostics.watch("x: ",  rotx);
// Diagnostics.watch("y: ",  roty);
// Diagnostics.watch("z: ",  rotz);

//leftIris.transform.rotation = leftEyeballInfo.rotation;
//rightIris.transform.rotation = rightEyeballInfo.rotation;

//var text3D = Scene.root.find("3dText0");
//text3D.transform.position = leftEyeballInfo.iris;
//text3D.transform.rotation = leftEyeballInfo.rotation;

const TouchGestures = require('TouchGestures');

// Register a tap event on the plane
TouchGestures.onTap().subscribe(function() {
    Diagnostics.log("roty=" + roty.pinLastValue());
});

const Reactive = require('Reactive')
const rotLeft = roty.le(Reactive.val(0.0))
Diagnostics.watch('>>>', rotLeft)

//ReadableStreamReader Reactive.val(1)
var ideaPlace = Scene.root.find("idea place");
ideaPlace.hidden = rotLeft;

var counter = Reactive.val(0);
counter = rotLeft.ifThenElse(Reactive.val(1).add(counter), Reactive.val(1).add(counter));
Diagnostics.watch('counter: ', counter);

var movesText = Scene.root.find("moves");
movesText.text = 'asd';//roty.le(Reactive.val(0.0));

// const timerParameters = {
//     durationMilliseconds: 10000,
//     loopCount: 1,
//     mirror: false
// };

// const Animation = require('Animation');
// const baseDriver = Animation.timeDriver(timerParameters);
// baseDriver.start();

