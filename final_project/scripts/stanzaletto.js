function createWardrobe () {
    var armGeometry = new THREE.BoxGeometry(5, 0.65, 2.4);
    var armMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var wardrobe = new THREE.Mesh(armGeometry, armMaterial);

    var wardrobeTex = THREE.ImageUtils.loadTexture("textures/armadio.jpg");
    var armGeometry2 = new THREE.BoxGeometry(5, 0.001, 2.4);
    var armMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: wardrobeTex});
    var wardrobe2 = new THREE.Mesh(armGeometry2, armMaterial2);
    wardrobe2.position.y = -0.325;
    wardrobe.add(wardrobe2);

    return wardrobe;
}

function createDoubleBed () {
    var bedTex = THREE.ImageUtils.loadTexture("textures/letto blu.jpg");
    var bedGeometry = new THREE.BoxGeometry(1.3, 2.5, 0.6);
    var bedMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: bedTex});
    var bed = new THREE.Mesh(bedGeometry, bedMaterial);

    var bedTex2 = THREE.ImageUtils.loadTexture("textures/letto blu2.jpg");
    var bedGeometry2 = new THREE.BoxGeometry(1.3, 0.001, 0.6);
    var bedMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: bedTex2});
    var bed_extra = new THREE.Mesh(bedGeometry2, bedMaterial2);
    bed_extra.position.y = -1.25;
    bed.add(bed_extra);

    return bed;
}

function createSingleBed () {
    var bedTex = THREE.ImageUtils.loadTexture("textures/letto rosso.jpg");
    var bedGeometry = new THREE.BoxGeometry(3, 1.3, 0.6);
    var bedMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: bedTex});
    var bed = new THREE.Mesh(bedGeometry, bedMaterial);

    var bedTex2 = THREE.ImageUtils.loadTexture("textures/letto rosso2.jpg");
    var bedGeometry2 = new THREE.BoxGeometry(0.001, 1.3, 0.6);
    var bedMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: bedTex2});
    var bed_extra = new THREE.Mesh(bedGeometry2, bedMaterial2);
    bed_extra.position.x = -1.5;
    bed.add(bed_extra);

    return bed;
}

function createPosterRoma () {
    var Tex = THREE.ImageUtils.loadTexture("textures/poster.jpg");
    var posGeometry = new THREE.BoxGeometry(0.001, 0.35, 0.6);
    var posMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: Tex});
    var poster = new THREE.Mesh(posGeometry, posMaterial);

    return poster;
}

function createQuadroItalia () {
    var corGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.9);
    var corMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var cornice = new THREE.Mesh(corGeometry, corMaterial);
    cornice.position.set(11.2,26.5,2.15);

    var itaTex = THREE.ImageUtils.loadTexture("textures/italia.jpg");
    var itaGeometry = new THREE.BoxGeometry(0.001, 0.5, 0.8);
    var itaMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: itaTex});
    var puzzleItalia = new THREE.Mesh(itaGeometry, itaMaterial);
    puzzleItalia.position.x = -0.05;
    cornice.add(puzzleItalia);

    return cornice;
}

function createLamp () {
    var lamp = new THREE.Object3D();

    var baseGeometry = new THREE.CylinderGeometry(0.15,0.15,0.07,80);
    var baseMaterial = new THREE.MeshPhongMaterial({color: 0x40E0D0, shading: THREE.FlatShading});
    var base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.rotation.x = Math.PI/2;
    lamp.add(base);

    var cylinderGeometry = new THREE.CylinderGeometry(0.05,0.05,0.3,80);
    var cylinderMaterial = new THREE.MeshPhongMaterial({color: 0x40E0D0, shading: THREE.FlatShading});
    var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.y = 0.15;
    base.add(cylinder);

    var sphereGeometry = new THREE.SphereGeometry(0.075, 20, 20);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: 0xFFFF00, opacity: 0.5, transparent: true});
    var lampLight = new THREE.Mesh(sphereGeometry, sphereMaterial);
    lampLight.castShadow = true;
    lampLight.position.y = 0.225;
    cylinder.add(lampLight);

    var lhGeometry = new THREE.CylinderGeometry(0.14,0.18,0.3,80,1,true);
    var lhMaterial = new THREE.MeshPhongMaterial({color: 0xAFEEEE, shading: THREE.FlatShading, side: THREE.DoubleSide});
    var lampHead = new THREE.Mesh(lhGeometry, lhMaterial);
    lampLight.add(lampHead);

    lamp.base = base;
    lamp.cylinder = cylinder;
    lamp.lampLight = lampLight;
    lamp.lampHead = lampHead;

    return lamp;
}

function createBedSideTable () {
    var bedsideGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.6);
    var bedsideMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var bedSide_table = new THREE.Mesh(bedsideGeometry, bedsideMaterial);

    var bedsideTex = THREE.ImageUtils.loadTexture("textures/comodino.jpg");
    var bedsideGeometry2 = new THREE.BoxGeometry(0.8, 0.001, 0.6);
    var bedsideMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: bedsideTex});
    var bedSide_table_tex = new THREE.Mesh(bedsideGeometry2, bedsideMaterial2);
    bedSide_table_tex.position.y = -0.4;
    bedSide_table.add(bedSide_table_tex);

    return bedSide_table;
}

function createWoodTable () {
    var tex = THREE.ImageUtils.loadTexture("textures/tavolo legno.jpg");
    var tabGeometry = new THREE.BoxGeometry(2.5, 1.3, 0.15);
    var tabMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex});
    var woodTable = new THREE.Mesh(tabGeometry, tabMaterial);
    woodTable.position.set(5.8,25,1.3);
    
    var gamGeom = new THREE.BoxGeometry(0.1,0.1,1.3);
    var gamMaterial = new THREE.MeshPhongMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    var gamba1 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba1.position.set(-1.05,0.45,-0.67);
    woodTable.add(gamba1);

    var gamba2 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba2.position.set(1,0.45,-0.67);
    woodTable.add(gamba2);

    var gamba3 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba3.position.set(-1.05,-0.55,-0.67);
    woodTable.add(gamba3);

    var gamba4 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba4.position.set(1,-0.55,-0.67);
    woodTable.add(gamba4);
      
    return woodTable;
}