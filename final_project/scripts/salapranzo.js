function createFinestraSalaPranzo () {
    var tex = THREE.ImageUtils.loadTexture("textures/finestra-singola2.jpg");
    var finGeometry = new THREE.BoxGeometry(0.1, 1, 1.2);
    var finMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex});
    var finestra = new THREE.Mesh(finGeometry, finMaterial);
    finestra.rotation.z = Math.PI/2;
    finestra.position.set(1.2,12.2,2.4);

    return finestra;
}

function createWhiteTable() {
    var wtGeometry = new THREE.BoxGeometry(1.3, 2, 0.25);
    var wtMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var whiteTable = new THREE.Mesh(wtGeometry, wtMaterial);
    whiteTable.position.set(4,11,1.7);
          
    var wtGeometry2 = new THREE.BoxGeometry(0.3, 0.3, 1.3);
    var wtMaterial2 = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var gamba1 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba1.position.set(0.3,-0.5,-0.65);
    whiteTable.add(gamba1);

    var gamba2 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba2.position.set(-0.3,-0.5,-0.65);
    whiteTable.add(gamba2);

    var gamba3 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba3.position.set(0.3,0.5,-0.65);
    whiteTable.add(gamba3);

    var gamba4 = new THREE.Mesh(wtGeometry2, wtMaterial2);
    gamba4.position.set(-0.3,0.5,-0.65);
    whiteTable.add(gamba4);

    return whiteTable;
}

function createMobile () {
    var mobGeometry = new THREE.BoxGeometry(1, 2.5, 1.2);
    var mobMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFE0});
    var mobile = new THREE.Mesh(mobGeometry, mobMaterial);
    mobile.position.set(0.8,10.7,0.9);

    return mobile;
}

function createPS3 () {
    var psTex = THREE.ImageUtils.loadTexture("textures/ps3.jpg");
    var psGeometry = new THREE.BoxGeometry(0.33, 0.5, 0.06);
    var psMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: psTex});
    var ps3 = new THREE.Mesh(psGeometry, psMaterial);
    ps3.position.set(0.9,10.3,1.6);

    var psGeometry2 = new THREE.BoxGeometry(0.29, 0.42, 0.06);
    var psMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: psTex});
    var ps3_base = new THREE.Mesh(psGeometry2, psMaterial2);
    ps3_base.position.set(-0.02,-0.035,-0.06);
    ps3.add(ps3_base);

    var cavoGeometry = new THREE.BoxGeometry(0.55, 0.02, 0.02);
    var cavoMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var cavo1 = new THREE.Mesh(cavoGeometry, cavoMaterial);
    cavo1.position.set(-0.4,-0.2,-0.05);
    ps3.add(cavo1);

    var cavo21 = new THREE.Mesh(cavoGeometry, cavoMaterial);
    cavo21.position.set(-0.15,-0.08,-0.05);
    ps3.add(cavo21);

    var cavoGeometry2 = new THREE.BoxGeometry(0.02, 0.42, 0.02);
    var cavoMaterial2 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var cavo22 = new THREE.Mesh(cavoGeometry2, cavoMaterial2);
    cavo22.position.set(-0.425,0.12,-0.05);
    ps3.add(cavo22);

    var cavoGeometry3 = new THREE.BoxGeometry(0.02, 0.02, 0.35);
    var cavoMaterial3 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var cavo23 = new THREE.Mesh(cavoGeometry3, cavoMaterial3);
    cavo23.position.set(-0.425,0.32,0.135);
    ps3.add(cavo23);

    var cavoGeometry4 = new THREE.BoxGeometry(0.15, 0.15, 0.08);
    var cavoMaterial4 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var cavo24 = new THREE.Mesh(cavoGeometry4, cavoMaterial4);
    cavo24.position.set(-0.425,0.32,0.270);
    ps3.add(cavo24);

    return ps3;
}

function createPainting () {
    var tex = THREE.ImageUtils.loadTexture("textures/cornice.jpg");
    var bump = THREE.ImageUtils.loadTexture("textures/cornice bump.jpg");
    var Geometry = new THREE.BoxGeometry(0.001, 1, 1.2);
    var Material = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex, bumpMap: bump});
    Material.bumpScale = 0.2;
    var quadro = new THREE.Mesh(Geometry, Material);
    quadro.rotation.z = Math.PI;
    quadro.position.set(0.05,0,0);

    var Geometry2 = new THREE.BoxGeometry(0.1, 1, 1.2);
    var Material2 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var quadro_extra = new THREE.Mesh(Geometry2, Material2);
    quadro_extra.add(quadro);
    quadro_extra.position.set(0.35,10,2.4);

    return quadro_extra;
}

function createWhiteChair () {
    var sediaGeometry = new THREE.BoxGeometry(0.65, 0.65, 0.1);
    var sediaMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var sedia = new THREE.Mesh(sediaGeometry, sediaMaterial);
    sedia.position.set(2.5,11.2,1.2);

    var sedia2 = new THREE.Mesh(sediaGeometry, sediaMaterial);
    sedia2.rotation.y = Math.PI/2;
    sedia2.position.set(0.28,0,0.325);
    sedia.add(sedia2);

    var sediaGeometry2 = new THREE.BoxGeometry(0.1, 0.1, 1.2);
    var sediaMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var sedia3 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia3.position.set(0.28,-0.28,-0.5);
    sedia.add(sedia3);

    var sedia4 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia4.position.set(-0.28,-0.28,-0.6);
    sedia.add(sedia4);

    var sedia5 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia5.position.set(0.28,0.28,-0.5);
    sedia.add(sedia5);

    var sedia6 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia6.position.set(-0.28,0.28,-0.6);
    sedia.add(sedia6);

    return sedia;
}