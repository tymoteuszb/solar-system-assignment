import React, { PureComponent, createRef } from 'react';
import * as THREE from 'three';

const divStyle = {
  width: '100%',
  height: '100%',
};

class Model extends PureComponent {
  targetDiv = createRef();

  componentDidMount() {
    this.containerWidth = this.targetDiv.current.offsetWidth;
    this.containerHeight = this.targetDiv.current.offsetHeight;

    this.camera = new THREE.PerspectiveCamera(75, this.containerWidth / this.containerHeight, 0.1, 1400);
    
    this.camera.position.set(0, 0, 1400);
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.containerWidth, this.containerHeight);
    
    this.targetDiv.current.appendChild(this.renderer.domElement);

    this.gltfLoader = new window.THREE.GLTFLoader();
    this.gltfLoader.load(
      '/scene.gltf',
      (gltf) => {
        this.scene = gltf.scene;

        this.scene.add(new THREE.PointLight(0xffffff));
        this.renderer.render(this.scene, this.camera);
      },
      function (xhr) {},
      function (error) {}
    );
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div ref={this.targetDiv} style={divStyle} />
    );
  }
}

export default Model;