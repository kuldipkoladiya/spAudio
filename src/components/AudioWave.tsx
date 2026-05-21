"use client";

import { useEffect } from "react";
import * as THREE from "three";

export default function AudioWave(){

    useEffect(()=>{

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize(window.innerWidth,window.innerHeight);

        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(20,20,64,64);
        const material = new THREE.MeshBasicMaterial({wireframe:true});

        const mesh = new THREE.Mesh(geometry,material);

        scene.add(mesh);
        camera.position.z = 10;

        function animate(){

            requestAnimationFrame(animate);

            mesh.rotation.z += 0.002;

            renderer.render(scene,camera);

        }

        animate();

    },[])

    return null;

}