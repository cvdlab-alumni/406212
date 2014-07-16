function createWashBasin () {
      var lavGeometry = new THREE.BoxGeometry(0.8, 2, 0.9);
      var lavMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
      var lavandino = new THREE.Mesh(lavGeometry, lavMaterial);

      var lavTex = THREE.ImageUtils.loadTexture("textures/lavandino.jpg");
      var lavGeometry = new THREE.BoxGeometry(0.6, 1, 0.13);
      var lavMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide, map: lavTex});
      var lavabo = new THREE.Mesh(lavGeometry, lavMaterial);

      var lavGeometry1 = new THREE.BoxGeometry(0.1, 1, 0.35);
      var lavMaterial1 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var lavabo11 = new THREE.Mesh(lavGeometry1, lavMaterial1);
      lavabo11.position.set(0.35,0,0.125);
      lavabo.add(lavabo11);

      var lavabo12 = new THREE.Mesh(lavGeometry1, lavMaterial1);
      lavabo12.position.set(-0.35,0,0.125);

      var exGeometry1 = new THREE.BoxGeometry(0.05, 0.05, 0.25);
      var exMaterial1 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var rubinetto11 = new THREE.Mesh(exGeometry1, exMaterial1);
      rubinetto11.position.z = 0.3;

      var exGeometry2 = new THREE.BoxGeometry(0.2, 0.05, 0.05);
      var exMaterial2 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var rubinetto12 = new THREE.Mesh(exGeometry2, exMaterial2);
      rubinetto12.position.set(0.075,0,0.125);
      rubinetto11.add(rubinetto12);

      lavabo12.add(rubinetto11);

      lavabo.add(lavabo12);

      var lavGeometry2 = new THREE.BoxGeometry(0.8, 0.025, 0.35);
      var lavMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var lavabo13 = new THREE.Mesh(lavGeometry2, lavMaterial2);
      lavabo13.position.set(0,-0.5,0.125);
      lavabo.add(lavabo13);

      var lavabo14 = new THREE.Mesh(lavGeometry2, lavMaterial2);
      lavabo14.position.set(0,0.5,0.125);
      lavabo.add(lavabo14);

      lavabo.position.set(0,-0.5,0.5);

      var lavabo2 = new THREE.Mesh(lavGeometry, lavMaterial);

      var lavabo21 = new THREE.Mesh(lavGeometry1, lavMaterial1);
      lavabo21.position.set(0.35,0,0.125);
      lavabo2.add(lavabo21);

      var lavabo22 = new THREE.Mesh(lavGeometry1, lavMaterial1);
      lavabo22.position.set(-0.35,0,0.125);

      var rubinetto21 = new THREE.Mesh(exGeometry1, exMaterial1);
      rubinetto21.position.z = 0.3;

      var rubinetto22 = new THREE.Mesh(exGeometry2, exMaterial2);
      rubinetto22.position.set(0.075,0,0.125);
      rubinetto21.add(rubinetto22);

      lavabo22.add(rubinetto21);

      lavabo2.add(lavabo22);

      var lavabo23 = new THREE.Mesh(lavGeometry2, lavMaterial2);
      lavabo23.position.set(0,-0.5,0.125);
      lavabo2.add(lavabo23);

      var lavabo24 = new THREE.Mesh(lavGeometry2, lavMaterial2);
      lavabo24.position.set(0,0.5,0.125);
      lavabo2.add(lavabo24);

      lavabo2.position.set(0,0.5,0.5);
      lavandino.add(lavabo);
      lavandino.add(lavabo2);

      return lavandino; 
}

function createToilet () {
      var toiTex = THREE.ImageUtils.loadTexture("textures/toilet.jpg");
      var toiletGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.3);
      var toiletMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide, map: toiTex});
      var toilet = new THREE.Mesh(toiletGeometry, toiletMaterial);

      var tGeometry1 = new THREE.BoxGeometry(0.4, 0.1, 0.45);
      var tMaterial1 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var toilet1 = new THREE.Mesh(tGeometry1, tMaterial1);
      toilet1.position.set(0,-0.25,0.1);
      toilet.add(toilet1);

      var toilet2 = new THREE.Mesh(tGeometry1, tMaterial1);
      toilet2.position.set(0,0.25,0.1);
      toilet.add(toilet2);

      var tGeometry2 = new THREE.BoxGeometry(0.1, 0.6, 0.45);
      var tMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var toilet3 = new THREE.Mesh(tGeometry2, tMaterial2);
      toilet3.position.set(0.15,0,0.1);
      toilet.add(toilet3);

      var toilet4 = new THREE.Mesh(tGeometry2, tMaterial2);
      toilet4.position.set(-0.15,0,0.1);
      toilet.add(toilet4);

      var bGeometry = new THREE.BoxGeometry(0.3, 0.5, 0.3);
      var bMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var base_toilet = new THREE.Mesh(bGeometry, bMaterial);
      base_toilet.position.z = -0.25;
      toilet.add(base_toilet);

      /*
      var tGeometry3 = new THREE.BoxGeometry(0.4, 0.05, 0.5);
      var tMaterial3 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var cover_toilet = new THREE.Mesh(tGeometry3, tMaterial3);
      cover_toilet.position.set(0,0,0.5002);
      toilet2.add(cover_toilet);
      */

      var sTex = THREE.ImageUtils.loadTexture("textures/scarico.jpg");
      var tGeometry4 = new THREE.BoxGeometry(0.3, 0.05, 0.25);
      var tMaterial4 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: sTex});
      var scarico = new THREE.Mesh(tGeometry4, tMaterial4);
      scarico.position.set(0,0.3,1.3);
      toilet.add(scarico);

      return toilet;
}

function createBidet () {
      var bidTex = THREE.ImageUtils.loadTexture("textures/bidet.jpg");
      var toiletGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.3);
      var toiletMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide, map: bidTex});
      var bidet = new THREE.Mesh(toiletGeometry, toiletMaterial);

      var tGeometry1 = new THREE.BoxGeometry(0.4, 0.1, 0.45);
      var tMaterial1 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var toilet1 = new THREE.Mesh(tGeometry1, tMaterial1);
      toilet1.position.set(0,-0.25,0.1);
      bidet.add(toilet1);

      var toilet2 = new THREE.Mesh(tGeometry1, tMaterial1);
      toilet2.position.set(0,0.25,0.1);
      bidet.add(toilet2);

      var tGeometry2 = new THREE.BoxGeometry(0.1, 0.6, 0.45);
      var tMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var toilet3 = new THREE.Mesh(tGeometry2, tMaterial2);
      toilet3.position.set(0.15,0,0.1);
      bidet.add(toilet3);

      var toilet4 = new THREE.Mesh(tGeometry2, tMaterial2);
      toilet4.position.set(-0.15,0,0.1);
      bidet.add(toilet4);

      var bGeometry = new THREE.BoxGeometry(0.3, 0.5, 0.3);
      var bMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var base_bidet = new THREE.Mesh(bGeometry, bMaterial);
      base_bidet.position.z = -0.25;
      bidet.add(base_bidet);

      var bidet_extra = new THREE.Mesh(tGeometry1, tMaterial1);
      bidet_extra.position.set(0,0.35,0.1);
      bidet.add(bidet_extra);

      var rubGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.15);
      var rubMaterial = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var rubinetto1 = new THREE.Mesh(rubGeometry, rubMaterial);
      rubinetto1.position.set(0,-0.05,0.3);
      bidet_extra.add(rubinetto1);

      var rubGeometry2 = new THREE.BoxGeometry(0.05, 0.2, 0.05);
      var rubMaterial2 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var rubinetto2 = new THREE.Mesh(rubGeometry2, rubMaterial2);
      rubinetto2.position.set(0,-0.075,0.07);
      rubinetto1.add(rubinetto2);
      return bidet;
}

function createShower () {
      var shower = new THREE.Object3D();
      shower.position.set(0,0,0);

      var showerTex = THREE.ImageUtils.loadTexture("textures/piatto-doccia.jpg");
      var basGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.059);
      var basMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: showerTex});
      var base_shower = new THREE.Mesh(basGeometry, basMaterial);
      base_shower.position.set(8.5,11.8,0.36);
      shower.add(base_shower);

      var boxGeometry = new THREE.BoxGeometry(0.8, 0.005, 2.3);
      var boxMaterial = new THREE.MeshPhongMaterial({color: 0xAFEEEE, side: THREE.DoubleSide, opacity: 0.5, transparent: true});
      var extra_shower = new THREE.Mesh(boxGeometry, boxMaterial);
      extra_shower.position.set(8.5,11.4,1.45);
      shower.add(extra_shower);

      var shGeometry1 = new THREE.BoxGeometry(0.03, 0.2, 0.03);
      var shMaterial1 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var showerHead1 = new THREE.Mesh(shGeometry1, shMaterial1);
      showerHead1.position.set(8.5,12.1,2.4);
      shower.add(showerHead1);

      var shGeometry2 = new THREE.BoxGeometry(0.03, 0.03, 0.08);
      var shMaterial2 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var showerHead2 = new THREE.Mesh(shGeometry2, shMaterial2);
      showerHead2.position.set(0,-0.085,-0.04);
      showerHead1.add(showerHead2);

      var geometry = new THREE.CylinderGeometry( 0.15, 0.15, 0.05, 20);
      var material = new THREE.MeshPhongMaterial( {color: 0x696969, side: THREE.DoubleSide} );
      var showerHead3 = new THREE.Mesh(geometry, material);
      showerHead3.rotation.x = -Math.PI/2;
      showerHead3.position.z = -0.04;
      showerHead2.add(showerHead3);

      return shower;
}

function createWashMachine () {
      var washing_machine = new THREE.Object3D();
      washing_machine.position.set(0,0,0);

      var tex = THREE.ImageUtils.loadTexture("textures/lavatrice.jpg");
      var Geometry = new THREE.BoxGeometry(1, 0.001, 1.2);
      var Material = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex});
      var lavatrice1 = new THREE.Mesh(Geometry, Material);
      lavatrice1.rotation.y = Math.PI;
      lavatrice1.position.set(0,0.5,0);

      var Geometry2 = new THREE.BoxGeometry(1, 1, 1.2);
      var Material2 = new THREE.MeshPhongMaterial({color: 0xF0FFFF, side: THREE.DoubleSide});
      var lavatrice2 = new THREE.Mesh(Geometry2, Material2);
      lavatrice2.position.set(7.1,17.2,0.9);
      lavatrice2.add(lavatrice1);
      washing_machine.add(lavatrice2);

      return washing_machine;
}

function createBath () {
      var bath = new THREE.Object3D();
      bath.position.set(0,0,0);

      var bathTex = THREE.ImageUtils.loadTexture("textures/piatto-doccia 2.jpg");
      var bathGeometry = new THREE.BoxGeometry(1.8,3.2,0.1);
      var bathMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide, map: bathTex});
      var base_bath = new THREE.Mesh(bathGeometry, bathMaterial);
      base_bath.position.set(3.5,18.4,0.35);
      bath.add(base_bath);

      var bathGeometry1 = new THREE.BoxGeometry(1.8,0.1,1);
      var bathMaterial1 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var bath1 = new THREE.Mesh(bathGeometry1, bathMaterial1);
      bath1.position.set(0,-1.6,0.45);
      base_bath.add(bath1);

      var bath2 = new THREE.Mesh(bathGeometry1, bathMaterial1);
      bath2.position.set(0,1.35,0.45);
      base_bath.add(bath2);

      var bathGeometry2 = new THREE.BoxGeometry(0.1,3.2,1);
      var bathMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var bath3 = new THREE.Mesh(bathGeometry2, bathMaterial2);
      bath3.position.set(-0.85,0,0.45);
      base_bath.add(bath3);

      var bath4 = new THREE.Mesh(bathGeometry2, bathMaterial2);
      bath4.position.set(0.85,0,0.45);
      base_bath.add(bath4);

      var shGeometry1 = new THREE.BoxGeometry(0.03, 0.4, 0.03);
      var shMaterial1 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var showerHead1 = new THREE.Mesh(shGeometry1, shMaterial1);
      showerHead1.rotation.z = Math.PI;
      showerHead1.position.set(0,-1.4,2.4);
      base_bath.add(showerHead1);

      var shGeometry2 = new THREE.BoxGeometry(0.03, 0.03, 0.08);
      var shMaterial2 = new THREE.MeshPhongMaterial({color: 0x696969, side: THREE.DoubleSide});
      var showerHead2 = new THREE.Mesh(shGeometry2, shMaterial2);
      showerHead2.position.set(0,-0.18,-0.04);
      showerHead1.add(showerHead2);

      var geometry = new THREE.CylinderGeometry( 0.15, 0.15, 0.05, 20);
      var material = new THREE.MeshPhongMaterial( {color: 0x696969, side: THREE.DoubleSide} );
      var showerHead3 = new THREE.Mesh(geometry, material);
      showerHead3.rotation.x = -Math.PI/2;
      showerHead3.position.z = -0.04;
      showerHead2.add(showerHead3);

      return bath;
}

function createFinestraBagno () {
    var tex = THREE.ImageUtils.loadTexture("textures/finestra-singola.jpg");
    var bump = THREE.ImageUtils.loadTexture("textures/finestra-singola bn");
    var finGeometry = new THREE.BoxGeometry(0.1, 1, 1.2);
    var finMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tex});
    finMaterial.bumpMap = bump;
    finMaterial.bumpScale = 0.6;
    var finestra = new THREE.Mesh(finGeometry, finMaterial);
    finestra.position.set(2.6,18.4,2.4);

    return finestra;
}