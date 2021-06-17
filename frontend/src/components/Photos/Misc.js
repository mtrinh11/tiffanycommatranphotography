import importAll from './importAll';

const images = importAll(require.context('../../images/FilmPhotoProject/Miscellaneous', false, /\.(png|jpe?g|svg)$/));

const Misc = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>Misc</h1>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Misc' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Miscellaneous/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Misc;