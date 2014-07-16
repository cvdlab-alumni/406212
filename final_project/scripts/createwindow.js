function createWindow () {
    var vetroGeometry = new THREE.BoxGeometry(1.05, 0.01, 1.4);
    var vetroMaterial = new THREE.MeshPhongMaterial({color: 0xAFEEEE, side: THREE.DoubleSide, opacity: 0.5, transparent: true});
    var vetro = new THREE.Mesh(vetroGeometry, vetroMaterial);
        
    var finGeometry = new THREE.BoxGeometry(1.05, 0.05, 0.05);
    var finMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra1 = new THREE.Mesh(finGeometry, finMaterial);
    finestra1.position.z = -0.675;
    vetro.add(finestra1);

    var finGeometry2 = new THREE.BoxGeometry(0.05, 0.05, 1.4);
    var finMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra2 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra2.position.x = 0.5;
    vetro.add(finestra2);

    var finestra3 = new THREE.Mesh(finGeometry, finMaterial);
    finestra3.position.z = 0.675;
    vetro.add(finestra3);

    var finestra4 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra4.position.x = -0.5;
    vetro.add(finestra4);

    return vetro;
}

function createWindowBedroom1 () {
    var vetroGeometry = new THREE.BoxGeometry(0.03, 0.875, 2.1);
    var vetroMaterial = new THREE.MeshPhongMaterial({color: 0xAFEEEE, side: THREE.DoubleSide, opacity: 0.5, transparent: true});
    var vetro = new THREE.Mesh(vetroGeometry, vetroMaterial);
        
    var finGeometry = new THREE.BoxGeometry(0.07, 0.875, 0.07);
    var finMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra1 = new THREE.Mesh(finGeometry, finMaterial);
    finestra1.position.z = -1.015;
    vetro.add(finestra1);

    var finGeometry2 = new THREE.BoxGeometry(0.07, 0.07, 2.1);
    var finMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra2 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra2.position.y = 0.4375;
    vetro.add(finestra2);

    var finestra3 = new THREE.Mesh(finGeometry, finMaterial);
    finestra3.position.z = 1.015;
    vetro.add(finestra3);

    var finestra4 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra4.position.y = -0.4375;
    vetro.add(finestra4);

    return vetro;
}

function createWindowBedroom2 () {
    var vetroGeometry = new THREE.BoxGeometry(0.775, 0.01, 1.4);
    var vetroMaterial = new THREE.MeshPhongMaterial({color: 0xAFEEEE, side: THREE.DoubleSide, opacity: 0.5, transparent: true});
    var vetro = new THREE.Mesh(vetroGeometry, vetroMaterial);
        
    var finGeometry = new THREE.BoxGeometry(0.775, 0.05, 0.05);
    var finMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra1 = new THREE.Mesh(finGeometry, finMaterial);
    finestra1.position.z = -0.675;
    vetro.add(finestra1);

    var finGeometry2 = new THREE.BoxGeometry(0.05, 0.05, 1.4);
    var finMaterial2 = new THREE.MeshPhongMaterial({color: 0xFFFFE0, side: THREE.DoubleSide});
    var finestra2 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra2.position.x = 0.3875;
    vetro.add(finestra2);

    var finestra3 = new THREE.Mesh(finGeometry, finMaterial);
    finestra3.position.z = 0.675;
    vetro.add(finestra3);

    var finestra4 = new THREE.Mesh(finGeometry2, finMaterial2);
    finestra4.position.x = -0.3875;
    vetro.add(finestra4);

    return vetro;
}