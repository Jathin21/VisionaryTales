const ImageCard = ({ image, onClick }) => (
    <div onClick={() => onClick(image)}>
        <img src={image} alt="Pinterest" />
    </div>
);

export default ImageCard;
