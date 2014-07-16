function createTvSamsung () {
 
      var tvTex = THREE.ImageUtils.loadTexture("textures/samsung.jpg");
      var tvGeometry = new THREE.BoxGeometry(0.15, 2, 1.2);
      var tvMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tvTex});
      var samsung = new THREE.Mesh(tvGeometry, tvMaterial);
      samsung.position.set(0.4,3.5,2);
      
      var tvGeometry2 = new THREE.BoxGeometry(0.15, 2, 0.01);
      var tvMaterial2 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
      var samsung_extra = new THREE.Mesh(tvGeometry2, tvMaterial2);
      samsung_extra.position.z = 0.6;
      samsung.add(samsung_extra);

      var tvGeometry3 = new THREE.BoxGeometry(0.2, 0.08, 1.2);
      var tvMaterial3 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var copri_cavi = new THREE.Mesh(tvGeometry3, tvMaterial3);
      copri_cavi.position.x = -0.1;
      copri_cavi.position.z = -0.8;
      samsung.add(copri_cavi);

      return samsung;

}

function createTvNordmende () {
      var tvTex = THREE.ImageUtils.loadTexture("textures/nordmende.jpg");
      var tvGeometry = new THREE.BoxGeometry(0.15, 1.333, 0.8);
      var tvMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: tvTex});
      var nordmende = new THREE.Mesh(tvGeometry, tvMaterial);
      nordmende.position.set(0.6,11.2,2.1);
      

      var tv1Geometry = new THREE.BoxGeometry(0.33, 0.5, 0.15);
      var tv1Material = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
      var base1 = new THREE.Mesh(tv1Geometry, tv1Material);
      base1.position.set(0,0,-0.6);
      nordmende.add(base1);

      var tv2Geometry = new THREE.BoxGeometry(0.08, 0.2, 0.3);
      var tv2Material = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
      var base2 = new THREE.Mesh(tv2Geometry, tv2Material);
      base2.position.set(0,0,-0.4);
      nordmende.add(base2);

      var tvGeometry1 = new THREE.BoxGeometry(0.15, 1.333, 0.01);
      var tvMaterial1 = new THREE.MeshPhongMaterial({color: 0x2F4F4F, side: THREE.DoubleSide});
      var nordmende_extra = new THREE.Mesh(tvGeometry1, tvMaterial1);
      nordmende_extra.position.z = 0.4;
      nordmende.add(nordmende_extra);

      return nordmende;
}