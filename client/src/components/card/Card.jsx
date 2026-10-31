import { useNavigate } from "react-router-dom";
import './card.css'
import petsData from './petsData.json'

const Card = () => {

    const imageStyle = {
        width: '100%',   // Fill the card face on any screen size
        height: '100%',
        objectFit: 'cover',
    };

    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.stopPropagation(); // Don't unflip the card when tapping the button
        navigate("/adopt");
    }

    const handleCardClick = (e) => {
        e.currentTarget.classList.toggle('flipped'); // Tap-to-flip for touch devices
    }

    return (
        <div className='flip-card-container'>
            {petsData.map((pet, index) => (
                <div key={index} className="flip-card" onClick={handleCardClick}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={require(`../../assets/${pet.image}`)} alt="Avatar" style={imageStyle} />
                        </div>
                        <div className="flip-card-back">
                            <h1>{pet.name}</h1>
                            <p>{pet.breed}</p>
                            <p>Age: {pet.age}</p>
                            <p>Gender: {pet.gender}</p>
                            <small>{pet.description}
                            </small>
                            <br />
                            <div className='btn-container'>
                                <button className='pickMe-buttons' onClick={handleButtonClick}>Pick Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Card
