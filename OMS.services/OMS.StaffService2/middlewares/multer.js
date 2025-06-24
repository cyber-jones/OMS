import multer, { diskStorage } from "multer";



const storage = diskStorage({
    filename: (req, file, cb) => {
        return cb(null, file.originalname);
    }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2048000 }
});


export default upload;