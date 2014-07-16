function createColumn () {
    var colGeometry = new THREE.CylinderGeometry(0.25, 0.25, 3, 60, 60, false);
    var colMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, shading: THREE.FlatShading});
    var column = new THREE.Mesh(colGeometry, colMaterial);
    column.rotation.x = Math.PI/2;
    column.position.set(6,5.5,2);

    var colGeometry2 = new THREE.CylinderGeometry(0.35, 0.35, 0.05, 60, 60, false);
    var colMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, shading: THREE.FlatShading});
    var base_column = new THREE.Mesh(colGeometry2, colMaterial2);
    base_column.position.y = -1.5;
    column.add(base_column);

    var bGeometry = new THREE.BoxGeometry(0.7, 0.36, 0.7);
    var bMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    var base = new THREE.Mesh(bGeometry, bMaterial);
    base.position.y = -1.75;
    column.add(base);

    return column;
}

function createMensola () {
    var mensolaGeometry = new THREE.BoxGeometry(0.3, 5.3, 0.1);
    var mensolaMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var mensola = new THREE.Mesh(mensolaGeometry, mensolaMaterial);
    mensola.position.set(8.75,3,1.9);

    return mensola;
}

function createLittleWhiteTable () {
    var wtGeometry = new THREE.BoxGeometry(1.2, 2.5, 0.25);
    var wtMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var littleWhiteTable = new THREE.Mesh(wtGeometry, wtMaterial);
    littleWhiteTable.position.set(0.85,2.8,1.1);

    var wtGeometry2 = new THREE.BoxGeometry(0.4, 0.4, 0.75);
    var wtMaterial2 = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var gamba1 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba1.position.set(-0.4,-1.05,-0.45);
    littleWhiteTable.add(gamba1);

    var gamba2 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba2.position.set(-0.4,1.05,-0.45);
    littleWhiteTable.add(gamba2);

    var gamba3 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba3.position.set(0.4,-1.05,-0.45);
    littleWhiteTable.add(gamba3);

    var gamba4 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba4.position.set(0.4,1.05,-0.45);
    littleWhiteTable.add(gamba4);

    return littleWhiteTable;
}

function createPersianCarpet (x,y,z) {
    var carpet = createMesh(new THREE.BoxGeometry(x,y,z), "tappeto-persiano.jpg");
    //var doorGeometry = new THREE.BoxGeometry(x,y,z);
    //var doorMaterial = new THREE.MeshLambertMaterial({color: 0x8B4513});
    //var door = new THREE.Mesh(doorGeometry, doorMaterial);

    carpet.position.set(4.5,7,0.365);

    return carpet;
}

function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
    var mat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
    mat.map = texture;

    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}