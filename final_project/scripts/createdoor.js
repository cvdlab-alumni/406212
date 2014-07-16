function createMainDoor (x,y,z) {
    var door = createMesh(new THREE.BoxGeometry(x,y,z), "main-door.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return door;
}

function createDoor (x,y,z) {
	var door = createMesh(new THREE.BoxGeometry(x,y,z), "porta.jpg");
	//var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return door;
}

function createDoor2 (x,y,z) {
    var door = createMesh(new THREE.BoxGeometry(x,y,z), "porta2.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return door;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}