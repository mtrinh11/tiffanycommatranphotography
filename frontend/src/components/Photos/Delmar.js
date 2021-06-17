import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/Corona Del Mar, CA', false, /\.(png|jpe?g|svg)$/));

const Delmar = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>Corona Del Mar, CA</h1>
                <p>Summer 2020</p>
                <p>unedited 35mm film (Fujifilm Superia Xtra 400)</p>
                <p>Pentax Espio 738</p>
                <p>38mm lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Corona Del Mar' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Corona Del Mar, CA/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Delmar;