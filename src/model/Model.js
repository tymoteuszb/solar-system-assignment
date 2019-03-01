import React, { PureComponent, createRef } from 'react';
import * as THREE from 'three';

import solarSystemData from '../solarSystem.data';

const divStyle = {
  width: '100%',
  height: '100%',
};

class Model extends PureComponent {
  targetDiv = createRef();

  get cameraTargetPosition() {
    return this.props.details ?
      new THREE.Vector3(...solarSystemData[this.props.details].cameraPos) :
      new THREE.Vector3(0, 0, 1400);
  }

  modelRender = () => {
    requestAnimationFrame(this.modelRender);
    this.camera.position.copy(this.camera.position.clone().lerp(this.cameraTargetPosition, 0.1));
    this.renderer.render(this.scene, this.camera);
  }

  componentDidMount() {
    this.containerWidth = this.targetDiv.current.offsetWidth;
    this.containerHeight = this.targetDiv.current.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(75, this.containerWidth / this.containerHeight, 0.1, 1400);
    
    this.camera.position.copy(this.cameraTargetPosition);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.containerWidth, this.containerHeight);
    
    this.targetDiv.current.appendChild(this.renderer.domElement);

    this.gltfLoader = new window.THREE.GLTFLoader();
    this.gltfLoader.load(
      '/scene.gltf',
      (gltf) => {
        this.scene = gltf.scene;

        this.scene.add(new THREE.PointLight(0xffffff));
        requestAnimationFrame(this.modelRender);
      },
      function (xhr) {},
      function (error) {}
    );
  }

  render() {
    return (
      <div ref={this.targetDiv} style={divStyle} />
    );
  }
}

export default Model;