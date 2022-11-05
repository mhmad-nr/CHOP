import React from 'react'
import * as THREE from "three";
import { Camera } from './Camera';
import { Demo } from './demo/Demo';
import { Experience } from './Experience';
import { RenderEngine } from './RenderEngine';
import { RenderLoop } from './RenderLoop';
import { Sizes } from './Sizes';

class Engine {
    public readonly camera!: any
    public readonly scene!: THREE.Scene
    public readonly canvas!: HTMLCanvasElement
    public readonly sizes!: Sizes
    public readonly renderEngine!: RenderEngine
    public readonly time!: RenderLoop
    // public readonly debug!: DebugUI
    // public readonly raycaster!: Raycaster
    // public readonly infoUI!: InfoUI
    // public readonly resources!: Resources
    // public readonly experience!: Experience
    // private readonly loader!: Loader

    constructor(ref: HTMLCanvasElement) {

        this.canvas = ref
        this.sizes = new Sizes(this)
        this.scene = new THREE.Scene()
        this.time = new RenderLoop(this)
        this.camera = new Camera(this)
        this.renderEngine = new RenderEngine(this)
        new Demo(this)
        // this.debug = new DebugUI()
        // this.time = new RenderLoop(this)
        // this.raycaster = new Raycaster(this)
        // this.infoUI = new InfoUI(info)
        // this.experience = new Demo(this)
        // this.resources = new Resources(this.experience.resources)
        // this.loader = new Loader()
        // const geometry = new THREE.BoxGeometry(10, 10, 10)
        // const material = new THREE.MeshBasicMaterial({ color: "red" });
        // const box = new THREE.Mesh(geometry, material);
        // box.position.set(0, 0, 0)
        // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // const scene = new THREE.Scene();
        // const plane = new THREE.Mesh(
        //     new THREE.PlaneGeometry(10, 10),
        //     new THREE.MeshStandardMaterial({ color: "red" })
        // )
        // this.scene.add(plane);
        // this.scene.add(new THREE.AmbientLight(0xffffff, 0.5))
        // this.scene.add(box);
        // // scene.add(camera);
        // const renderer = new THREE.WebGLRenderer();
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);

        // camera.position.z = 5;
        // function animate() {
        //     requestAnimationFrame(animate);
        //     renderer.render(scene, camera);
        // }
        // animate();
        this.update(1)
    }

    update(delta: number) {
        // if (!this.loader.isComplete) return
        this.camera.update()
        this.renderEngine.update()
        // this.experience.update(delta)
        // this.debug.update()
    }

    resize() {
        this.camera.resize()
        this.renderEngine.resize()
        // if (this.experience.resize) {
        //     this.experience.resize()
        // }
    }
}
export default Engine;