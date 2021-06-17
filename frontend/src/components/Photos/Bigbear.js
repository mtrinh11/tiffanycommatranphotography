import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/Big Bear, CA', false, /\.(png|jpe?g|svg)$/));

const Bigbear = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>Big Bear, California</h1>
                <p>October 2020</p>
                <p>unedited 35mm film (Fujifilm Superia Xtra 400)</p>
                <p>Pentax Espio 738</p>
                <p>38mm lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Big Bear' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Big Bear, CA/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Bigbear;