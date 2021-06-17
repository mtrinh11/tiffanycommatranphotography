import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/San Marino, CA', false, /\.(png|jpe?g|svg)$/));

const Sanmarino = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>San Marino, California - Huntington Gardens</h1>
                <p>December 2020</p>
                <p>unedited 35mm film (Fujifilm Superia Xtra 400)</p>
                <p>Pentax Espio 738</p>
                <p>38mm lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='San Marino' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/San Marino, CA/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Sanmarino;