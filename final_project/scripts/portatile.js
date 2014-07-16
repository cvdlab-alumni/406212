function createLaptop () {
    var pcGeometry = new THREE.BoxGeometry(0.5, 0.35, 0.025);
    var pcMaterial = new THREE.MeshPhongMaterial({color: 0xA9A9A9, side: THREE.DoubleSide, metal: true});
    var pc = new THREE.Mesh(pcGeometry, pcMaterial);
    
    var pcTex = THREE.ImageUtils.loadTexture("textures/esterno pc.jpg");
    var pc_texGeometry = new THREE.BoxGeometry(0.5, 0.35, 0.001);
    var pc_texMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: pcTex});
    var pc_tex = new THREE.Mesh(pc_texGeometry, pc_texMaterial);
    pc_tex.position.z = 0.0125;
    pc.add(pc_tex);

    return pc;
}

function createBaseLaptop () {
    var pcGeometry2 = new THREE.BoxGeometry(0.5, 0.35, 0.025);
    var pcMaterial2 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var basepc = new THREE.Mesh(pcGeometry2, pcMaterial2);
    
    var tastieraTex = THREE.ImageUtils.loadTexture("textures/tastiera.jpg");
    var tastieraGeometry = new THREE.BoxGeometry(0.5, 0.35, 0.001);
    var tastieraMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tastieraTex});
    var tastiera = new THREE.Mesh(tastieraGeometry, tastieraMaterial);
    tastiera.position.z = 0.0125;
    basepc.add(tastiera);

    return basepc;
}

function createScreenPc () {
    var screenTex = THREE.ImageUtils.loadTexture("textures/screenpc.jpg");
    var scGeometry = new THREE.BoxGeometry(0.45, 0.3, 0.001);
    var scMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, map: screenTex, overdraw: false});
    var screenpc = new THREE.Mesh(scGeometry, scMaterial);

    return screenpc;
}