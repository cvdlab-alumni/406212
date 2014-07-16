function createBBVideo () {

    // create the video element

    var video, videoImage, videoImageContext, videoTexture;

    video = document.createElement( 'video' );
     
    video.src = "assets/movies/BBad.mp4";
    video.load();
    //video.play();
      
    videoImage = document.createElement( 'canvas' );
    videoImage.width = 640;
    videoImage.height = 380;

    videoImageContext = videoImage.getContext( '2d' );
    // colore di background se non è presente il video
    videoImageContext.fillStyle = '#000000';
    videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

    videoTexture = new THREE.Texture( videoImage );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
      
    var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
      
    var movieGeometry = new THREE.PlaneGeometry( 240, 142, 4, 4 );
    var video_breaking_bad = new THREE.Mesh( movieGeometry, movieMaterial );
      
    video_breaking_bad.scale.set(0.0075,0.0075,0.0075);
    video_breaking_bad.rotation.x = Math.PI/2;
    video_breaking_bad.rotation.y = Math.PI/2;

    video_breaking_bad.video = video;
    video_breaking_bad.videoImageContext = videoImageContext;
    video_breaking_bad.videoTexture = videoTexture;

    return video_breaking_bad;

}

function createGermanyVideo () {

    // create the video element

    var video, videoImage, videoImageContext, videoTexture;

    video = document.createElement( 'video' );
     
    video.src = "assets/movies/germania.mp4";
    video.load();
    //video.play();
      
    videoImage = document.createElement( 'canvas' );
    videoImage.width = 640;
    videoImage.height = 400;

    videoImageContext = videoImage.getContext( '2d' );
    // colore di background se non è presente il video
    videoImageContext.fillStyle = '#000000';
    videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

    videoTexture = new THREE.Texture( videoImage );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
      
    var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
      
    var movieGeometry = new THREE.PlaneGeometry( 240, 120, 4, 4 );
    var video_germany = new THREE.Mesh( movieGeometry, movieMaterial );
      
    video_germany.scale.set(0.0075,0.0075,0.0075);
    video_germany.rotation.x = Math.PI/2;
    video_germany.rotation.y = Math.PI/2;

    video_germany.video = video;
    video_germany.videoImageContext = videoImageContext;
    video_germany.videoTexture = videoTexture;

    return video_germany;

}