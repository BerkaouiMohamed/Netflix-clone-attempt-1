import { useContext, useState } from "react";
import "./newMovie.css";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useNavigate } from "react-router-dom";

export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const navigate=useNavigate()

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie,dispatch);
    navigate('/movies')
  };

  console.log(movie)
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="text"
            id="img"
            name="img"
            
            onChange={handleChange}
            />
         
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="text"
            id="imgTitle"
            name="imgTitle"
            onChange={handleChange}
            />
        
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="text"
            id="imgSm"
            name="imgSm"
            onChange={handleChange}
          />
         
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="John Wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="text"
            name="trailer"
            onChange={handleChange}
            
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="text"
            name="video"
            onChange={handleChange}
          
          />
        </div>
        
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        
      </form>
    </div>
  );
}
