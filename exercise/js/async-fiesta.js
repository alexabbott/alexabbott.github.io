$(() => {

  const imageCount = IMAGE_IDS.length;
  let loadCount = 0;
  let batch = [];
  let isPaused = false;
  const $bucket = $('.photo-bucket');
  const draw = img => $bucket.append(img);

  // NOTE: The height and width variables can be changed to fetch different sized images.
  const getImageUrl = id => `https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:200,height:200,fit:crop/output=format:jpg,quality:95/compress/${id}`;

  const loadImage = (id) => {
    const img = new Image();
    img.src = getImageUrl(id)

    img.onload = () => {
      batch.push(img);
      loadCount += 1;

      // once we have 5 images loaded, draw them and then start loading the next batch
      if (loadCount % 5 === 0 && loadCount < imageCount + 1) {
        drawBatch();

        if (loadCount < imageCount) {
          loadBatch(loadCount);
        }
      }

      if (loadCount === imageCount) {
        console.log(`All ${ $('img').length } images loaded successfully!`);
      }
    };

    img.onerror = () => {
      console.log('error loading image', id);
    };
  };

  const loadBatch = (startIndex) => {
    if (!isPaused) {
      console.log(`loading batch ${ (loadCount + 5)/5 }`);
      batch = [];
      for (let i = startIndex; i < startIndex + 5; i++) {
        loadImage(IMAGE_IDS[i]);
      }
    }
  };

  const drawBatch = () => {
    for (let i = 0; i < 5; i++) {
      draw(batch[i]);
    }
  };

  const startLoading = () => {
    console.log('Start!');
    isPaused = false;
    loadBatch(loadCount);
  };

  const stopLoading = () => {
    console.log('Stop!');
    isPaused = true;
  };

  $('button.start').on('click', startLoading);
  $('button.stop').on('click', stopLoading);

});
