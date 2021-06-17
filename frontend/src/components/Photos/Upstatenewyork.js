import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/Upstate New York', false, /\.(png|jpe?g|svg)$/));

const Upstatenewyork = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>NYC</h1>
                <p>New York City. 2016-2018</p>
                <p>unedited 35mm film</p>
                <p>Minolta srt101</p>
                <p>28mm 2.5 lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Upstate NY' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Upstate New York/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Upstatenewyork;