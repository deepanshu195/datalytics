import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageComponent = ({ image }) => {
  return (
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
      placeholderSrc={
        "https://res.cloudinary.com/datalytics/image/upload/v1621763859/Datalytics/datalytics_logo_a5fnqs.svg"
      }
    />
  );
};
