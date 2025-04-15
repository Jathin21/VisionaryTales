const StoryCard = ({ image, story }) => (
    <div className="story-card">
        <img src={image} alt="Analyzed" />
        <p>{story}</p>
    </div>
);

export default StoryCard;
