import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/Southern California', false, /\.(png|jpe?g|svg)$/));

const Socal = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>SoCal</h1>
                <p>Summer 2020</p>
                <p>unedited 35mm film</p>
                <p>Fujifilm Disposable Camera</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Socal' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Southern California/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Socal;