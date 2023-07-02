import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
const RubiksCube = () => {
    const fbx = useLoader(FBXLoader, "./cube.fbx");

    const cubeRef = useRef();

    useFrame(({ clock }) => {
        cubeRef.current.rotation.y = clock.getElapsedTime()
    })

    return (
        <group>
            <primitive ref={cubeRef} object={fbx} scale={0.048} position={[0, -6, 0]} />
        </group>
    );
};

export default RubiksCube;
