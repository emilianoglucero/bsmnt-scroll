import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
interface GLTFResult extends GLTF {
  nodes: {
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
  }
  materials: {
    m_Trophy3: THREE.Material
    m_Outline: THREE.Material
  }
}

interface TrophyModelProps {
  scale: THREE.Vector3 | [number, number, number]
  model: string
}

const AwwwardsTrophyModel = ({ scale, model }: TrophyModelProps) => {
  const meshRef = useRef<any>(null!)
  const { nodes, materials } = useGLTF(model) as unknown as GLTFResult

  const minScale = Array.isArray(scale)
    ? Math.min(scale[0], scale[1])
    : Math.min(scale.x, scale.y)

  return (
    <group ref={meshRef} dispose={null} scale={minScale * 0.8}>
      <group rotation={[0, -Math.PI * 0.12, 0]}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.m_Trophy3}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.m_Outline}
        />
      </group>
    </group>
  )
}

export default AwwwardsTrophyModel
