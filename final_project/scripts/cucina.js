function createBlackTable () {
    var tex = THREE.ImageUtils.loadTexture("textures/nero-zimbawe.jpg");
    var tabGeometry = new THREE.BoxGeometry(2.5, 1.3, 0.15);
    var tabMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide, map: tex});
    var blackTable = new THREE.Mesh(tabGeometry, tabMaterial);
    blackTable.position.set(5.8,13.3,1.3);
    
    var gamGeom = new THREE.BoxGeometry(0.1,0.1,1.3);
    var gamMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var gamba1 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba1.position.set(-1.05,0.45,-0.67);
    blackTable.add(gamba1);

    var gamba2 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba2.position.set(1,0.45,-0.67);
    blackTable.add(gamba2);

    var gamba3 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba3.position.set(-1.05,-0.55,-0.67);
    blackTable.add(gamba3);

    var gamba4 = new THREE.Mesh(gamGeom, gamMaterial);
    gamba4.position.set(1,-0.55,-0.67);
    blackTable.add(gamba4);
      
    return blackTable;
}

function createBlackChair () {
    var sediaGeometry = new THREE.BoxGeometry(0.65, 0.65, 0.1);
    var sediaMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var sedia = new THREE.Mesh(sediaGeometry, sediaMaterial);

    var sedia2 = new THREE.Mesh(sediaGeometry, sediaMaterial);
    sedia2.rotation.y = Math.PI/2;
    sedia2.position.set(0.28,0,0.325);
    sedia.add(sedia2);

    var sediaGeometry2 = new THREE.BoxGeometry(0.1, 0.1, 1);
    var sediaMaterial2 = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
    var sedia3 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia3.position.set(0.28,-0.28,-0.5);
    sedia.add(sedia3);

    var sedia4 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia4.position.set(-0.28,-0.28,-0.5);
    sedia.add(sedia4);

    var sedia5 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia5.position.set(0.28,0.28,-0.5);
    sedia.add(sedia5);

    var sedia6 = new THREE.Mesh(sediaGeometry2, sediaMaterial2);
    sedia6.position.set(-0.28,0.28,-0.5);
    sedia.add(sedia6);

    return sedia;
}

function createFridge () {
      var fridge = new THREE.Object3D();
      fridge.position.set(0,0,0);

      var friGeometry = new THREE.BoxGeometry(2, 1, 2.5);
      var friMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
      var fridge1 = new THREE.Mesh(friGeometry, friMaterial);
      fridge1.position.set(7.85,16,1.55);
      fridge.add(fridge1);

      var frigoTex = THREE.ImageUtils.loadTexture("textures/frigo.jpg");
      var friGeometry1 = new THREE.BoxGeometry(2, 0.001, 2.5);
      var friMaterial1 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: frigoTex});
      var fridge2 = new THREE.Mesh(friGeometry1, friMaterial1);
      fridge2.position.y = -0.5;
      fridge1.add(fridge2);

      var intfrigoTex = THREE.ImageUtils.loadTexture("textures/interno frigo.jpg");
      var friGeometry2 = new THREE.BoxGeometry(0.55, 0.001, 0.4);
      var friMaterial2 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: intfrigoTex});
      var internoFrigo = new THREE.Mesh(friGeometry2, friMaterial2);
      internoFrigo.position.set(0.5,-0.505,0.25);
      fridge1.add(internoFrigo);

      return fridge;
}

function createStove () {
    var stoveGeometry = new THREE.BoxGeometry(1.8, 1, 1);
    var stoveMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var stove1 = new THREE.Mesh(stoveGeometry, stoveMaterial);
    stove1.position.set(5.95,16,0.8);
    
    var stoveTex = THREE.ImageUtils.loadTexture("textures/nero-zimbawe.jpg");
    var stoGeometry = new THREE.BoxGeometry(1.8, 1, 0.15);
    var stoMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, side: THREE.DoubleSide, map: stoveTex});
    var stove2 = new THREE.Mesh(stoGeometry, stoMaterial);
    stove2.position.z = 0.575;
    stove1.add(stove2);

    var stoveGeometry2 = new THREE.BoxGeometry(1, 0.8, 0.05);
    var stoveMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var stove3 = new THREE.Mesh(stoveGeometry2, stoveMaterial2);
    stove3.position.set(0.15,0,0.67);
    stove1.add(stove3);

    var stoveTex2 = THREE.ImageUtils.loadTexture("textures/fornelli.jpg");
    var stoveGeometry3 = new THREE.BoxGeometry(1, 0.8, 0.001);
    var stoveMaterial3 = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: stoveTex2});
    var stove4 = new THREE.Mesh(stoveGeometry3, stoveMaterial3);
    stove4.position.z = 0.025;
    stove3.add(stove4);

    return stove1;
}

function createBoxPizza () {
    var scatolaGeom = new THREE.BoxGeometry(0.6, 0.6, 0.01);
    var scatolaMat = new THREE.MeshLambertMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var box_pizza = new THREE.Mesh(scatolaGeom, scatolaMat);
  
    var scatolaGeom1 = new THREE.BoxGeometry(0.6, 0.01, 0.05);
    var scatolaMat1 = new THREE.MeshLambertMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var box_pizza1 = new THREE.Mesh(scatolaGeom1, scatolaMat1);
    box_pizza1.position.set(0,0.295,0.025);
    box_pizza.add(box_pizza1);

    var box_pizza2 = new THREE.Mesh(scatolaGeom1, scatolaMat1);
    box_pizza2.position.set(0,-0.295,0.025);
    box_pizza.add(box_pizza2);

    var scatolaGeom2 = new THREE.BoxGeometry(0.01, 0.6, 0.05);
    var scatolaMat2 = new THREE.MeshLambertMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var box_pizza3 = new THREE.Mesh(scatolaGeom2, scatolaMat2);
    box_pizza3.position.set(0.295,0,0.025);
    box_pizza.add(box_pizza3);

    var box_pizza4 = new THREE.Mesh(scatolaGeom2, scatolaMat2);
    box_pizza4.position.set(-0.295,0,0.025);
    box_pizza.add(box_pizza4);

    return box_pizza;
}

function createCoverBoxPizza () {
    var scatolaGeom = new THREE.BoxGeometry(0.6, 0.6, 0.015);
    var scatolaMat = new THREE.MeshLambertMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var cover_box_pizza = new THREE.Mesh(scatolaGeom, scatolaMat);      

    var scatolaTex = THREE.ImageUtils.loadTexture("textures/scatola pizza.jpg");
    var scatolaGeom2 = new THREE.BoxGeometry(0.6, 0.6, 0.001);
    var scatolaMat2 = new THREE.MeshLambertMaterial({side: THREE.DoubleSide, map: scatolaTex});
    var box_pizza_tex = new THREE.Mesh(scatolaGeom2, scatolaMat2);
    box_pizza_tex.position.z = 0.0075;
    cover_box_pizza.add(box_pizza_tex);

    return cover_box_pizza;
}

function createPizza () {
    var pizzaGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.05, 60, 60, false);
    var pizzaMat = new THREE.MeshLambertMaterial({color: 0xD2691E, shading: THREE.FlatShading});
    var pizza = new THREE.Mesh(pizzaGeom, pizzaMat);
    pizza.rotation.x = Math.PI/2;
    pizza.position.z = 0.02;

    var pizzaGeom2 = new THREE.CylinderGeometry(0.2, 0.2, 0.001, 60, 60, false);
    var pizzaMat2 = new THREE.MeshBasicMaterial({color: 0xFF0000, shading: THREE.FlatShading});
    var pizza2 = new THREE.Mesh(pizzaGeom2, pizzaMat2);
    pizza2.position.y = 0.025;
    pizza.add(pizza2);

    var i;
    var raggioPizza = 0.15;

    for(i=0; i<30; i++) {

      var lat = Math.floor((Math.random() * 360) + 1);
      var lon = Math.floor((Math.random() * 360) + 1);
            
      var mozzarellaGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.001, 60, 60, false);
      var mozzarellaMat = new THREE.MeshBasicMaterial({color: 0xffffff, shading: THREE.FlatShading});
      var mozzarella = new THREE.Mesh(mozzarellaGeom, mozzarellaMat);

      var x = raggioPizza * Math.sin(lat)*Math.cos(lon);
      var y = raggioPizza * Math.sin(lat)*Math.sin(lon);
            
      mozzarella.position.set(x,0.026,y);
      pizza.add(mozzarella);
    }

    var raggioBasilico = 0.05;
    var lat = Math.floor((Math.random() * 360) + 1);
    var lon = Math.floor((Math.random() * 360) + 1);

    var basilicoGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.001, 60, 60, false);
    var basilicoMat = new THREE.MeshBasicMaterial({color: 0x228B22, shading: THREE.FlatShading});
    var basilico = new THREE.Mesh(basilicoGeom, basilicoMat);

    var x = raggioBasilico * Math.sin(lat)*Math.cos(lon);
    var y = raggioBasilico * Math.sin(lat)*Math.sin(lon);
          
    basilico.position.set(x,0.0265,y);
    pizza.add(basilico);

    return pizza;
}