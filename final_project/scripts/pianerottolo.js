function createFloor (x,y,z) {
	var floor = createMesh3(new THREE.BoxGeometry(x,y,z), "pavimento.jpg");
	//var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return floor;
}

function createCarpet (x,y,z) {
    var carpet = createMesh4(new THREE.BoxGeometry(x,y,z), "tappetino.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    return carpet;
}

function createMesh3(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide});
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function createMesh4(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}