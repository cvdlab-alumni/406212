function createBalcony () {
	var balconyGeom = new THREE.BoxGeometry(3.8,2,0.2);
    var balconyMat = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var balcony1 = new THREE.Mesh(balconyGeom, balconyMat);

    var balconyGeom2 = new THREE.BoxGeometry(3.8,0.2,1.2);
    var balconyMat2 = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var balcony2 = new THREE.Mesh(balconyGeom2, balconyMat2);

    balcony2.position.set(0,0.9,0.6);

    var balconyGeom3 = new THREE.BoxGeometry(0.2,2,1.2);
    var balconyMat3 = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var balcony3 = new THREE.Mesh(balconyGeom3, balconyMat3);

    balcony3.position.set(1.8,0,0.6);

    var balconyGeom4 = new THREE.BoxGeometry(0.2,2,1.2);
    var balconyMat4 = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var balcony4 = new THREE.Mesh(balconyGeom4, balconyMat4);

    balcony4.position.set(-1.8,0,0.6);

    var balcony = new THREE.Object3D();
    balcony.position.set(1.30,22,0);

    balcony.add(balcony1);
    balcony.add(balcony2);
    balcony.add(balcony3);
    balcony.add(balcony4);

    balcony.rotation.z = Math.PI/2;

    return balcony;
}