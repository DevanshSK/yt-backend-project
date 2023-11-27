import multer from "multer";

/* The code is configuring the storage options for file uploads using the `multer` library in
JavaScript. */
const storage = multer.diskStorage({
  /* The `destination` function is used to specify the directory where uploaded files will be stored.
  In this case, it sets the destination directory to "/tmp/my-uploads". */
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  /* The `filename` function is used to generate a unique filename for each uploaded file. It takes
  three parameters: `req` (the request object), `res` (the response object), and `cb` (a callback
  function). */
  filename: function (req, res, cb) {
    // TODO: Add unique file name later.
    // const uniqueSuffix = Date.now() + Math.round(Math.random() + 1e9);
    // cb(null, file.fieldname + "_" + uniqueSuffix);
    cb(null, file.fieldname);
  },
});

export const upload = multer({ storage });
