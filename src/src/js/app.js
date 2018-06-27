// react router * Wordpress Rest API 
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

import Application from './components/Application.js'
import Entries from './components/Entries.js'
import Single from './components/Single.js'
import About from './components/About.js'
import Work from './components/Work.js'
import WorkEdibleEnvelope from './components/Work-EdibleEnvelope.js'
import WorkMethodsAndProcesses from './components/Work-MethodsAndProcesses.js'
import WorkCascade from './components/Work-Cascade.js'


//import PIXI from 'pixi.js'

var Promise = require('es6-promise').Promise

var routes = (
  <Router history={browserHistory}>
    <Route name="Application" path="/" component={Application}>
      <IndexRoute name="Root" component={Work}/>
      <Route name="Post" path="post/:postId" component={Single}/>
      <Route name="About" path="about" component={About}/>
      <Route name="Blog" path="blog" component={Entries}/>
      <Route name="Work" path="work" component={Work}/>
      
      <Route name="Work-EdibleEnvelope" path="work-edibleEnvelope" component={WorkEdibleEnvelope}/>
      <Route name="Work-MethodsAndProcesses" path="work-methodsAndProcesses" component={WorkMethodsAndProcesses}/>
      <Route name="Work-Cascade" path="work-cascade" component={WorkCascade}/>
    </Route>
  </Router>
);

  // <Router history={browserHistory}>
  //   <Route path="/" component={EntriesList}/>
  //   <Route path="/post/:post/" component={Single}/>
  // </Router>

render(routes, document.getElementById('app'));





// Background Animation
// function sketch(p) {
//   var particle_texture
//   var particleCount = 250
//   var particleSystem

//   p.preload = function() {
//     particle_texture = p.loadImage("/dist/img/smoke.png")
//   }

//   p.setup = function() {
//     var cnv = p.createCanvas(p.windowWidth, p.windowHeight)
//     cnv.class('backgroundCanvas')
//     particleSystem = new ParticleSystem(particle_texture)
//     particleSystem.setup()
//     p.background(0)
//   }

//   p.draw = function() {
//     p.fill(0, 100)
//     p.rect(0, 0, p.width, p.height)

//     particleSystem.run()
//   }

//   class Particle {
//     constructor(img_) {
//       this.x = p.random(0, p.width)
//       this.y = p.random(0, p.height)
//       this.velocity_x = p.random(-0.5, 0.5)
//       this.velocity_y = p.random(-0.5, 0.5)
//       this.img = img_
//     }

//     run() {
//       this.update()
//       this.display()
//     }

//     update() {
//       this.x += this.velocity_x;
//       this.y += this.velocity_y;
      
//       if( this.x < 0-128 ) {
//         this.x = p.width+128;
//       } else if ( p.width+128 < this.x ) {
//         this.x = 0-128;
//       }
      
//       if( this.y < 0-128 ) {
//         this.y = p.height+128;
//       } else if ( p.height+128 < this.y ) {
//         this.y = 0-128;
//       }
//     }

//     display() {
//       p.image(this.img, this.x, this.y)
//     }
//   }

//   class ParticleSystem {
//     constructor(img_) {
//       this.img = img_
//       this.particles = []
//     }

//     setup() {
//       for (var i = particleCount-1; i >= 0; i--) {
//         this.particles.push(new Particle(this.img));
//       }
//     }

//     run() {
//       for (var i = particleCount-1; i >= 0; i--) {
//         var particle = this.particles[i]
//         console.log(particle)
//         particle.run()
//       }
//     }
//   }

// }

// var app = new p5(sketch, document.body);




// var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
// document.body.appendChild(renderer.view);

// // create the root of the scene graph
// var stage = new PIXI.Container();

// var container = new PIXI.Container();

// stage.addChild(container);

// for (var j = 0; j < 5; j++) {

//     for (var i = 0; i < 5; i++) {
//         var bunny = PIXI.Sprite.fromImage('//pixijs.github.io/examples/required/assets/basics/bunny.png');
//         bunny.x = 40 * i;
//         bunny.y = 40 * j;
//         container.addChild(bunny);
//     };
// };

// // move container to the (200, 150) 
// container.position.x = 200;
// container.position.y = 150;
// // (93, 98.5) is center of center bunny sprite in local container coordinates
// // we want it to be in (200, 150) of global coords
// container.pivot.x = 80 + 26 * 0.5;
// container.pivot.y = 80 + 37 * 0.5;

// // start animating
// animate();

// function animate() {

//     requestAnimationFrame(animate);
  
//     //rotate the container!
//     container.rotation -= 0.01;

//     // render the root container
//     renderer.render(stage);
// }
