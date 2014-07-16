function createParquet (x,y,z) {
    var floor = createMesh(new THREE.BoxGeometry(x,y,z), "parquet.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return floor;
}

function createFloorBathroom1 (x,y,z) {
    var floor = createMesh(new THREE.BoxGeometry(x,y,z), "mattonelle-verdi.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return floor;
}

function createFloorBathroom2 (x,y,z) {
    var floor = createMesh(new THREE.BoxGeometry(x,y,z), "mattonelle-rosa.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return floor;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}