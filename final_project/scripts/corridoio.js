function createExtraWall1 () {
    var exGeometry = new THREE.BoxGeometry(0.3, 0.3, 3);
    var exMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0});
    var extraWall1 = new THREE.Mesh(exGeometry, exMaterial);
    extraWall1.position.set(11.05,16.65,1.8);

    return extraWall1;
}

function createExtraWall2 () {
    var exGeometry = new THREE.BoxGeometry(0.3, 0.3, 3);
    var exMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0});
    var extraWall2 = new THREE.Mesh(exGeometry, exMaterial);
    extraWall2.position.set(9.35,16.65,1.8);

    return extraWall2;
}

function createExtraWall3 () {
    var exGeometry = new THREE.BoxGeometry(1.5, 0.3, 0.9);
    var exMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0});
    var extraWall3 = new THREE.Mesh(exGeometry, exMaterial);
    extraWall3.position.set(10.25,16.65,2.9);

    return extraWall3;
}

function createFinestraCorridoio () {
    var tex = THREE.ImageUtils.loadTexture("textures/finestra-singola.jpg");
    var bump = THREE.ImageUtils.loadTexture("textures/finestra-singola bn");
    var finGeometry = new THREE.BoxGeometry(0.1, 1, 1.2);
    var finMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex});
    finMaterial.bumpMap = bump;
    finMaterial.bumpScale = 0.6;
    var finestra = new THREE.Mesh(finGeometry, finMaterial);
    finestra.position.set(11.2,14.5,2);

    return finestra;
}