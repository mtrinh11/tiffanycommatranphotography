import importAll from './importAll'
  
const images = importAll(require.context('../../images/FilmPhotoProject/San Francisco, CA', false, /\.(png|jpe?g|svg)$/));

const Sf = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>San Francisco, California</h1>
                <p>March 2020</p>
                <p>unedited 35mm film (Fujifilm Superia Xtra 400)</p>
                <p>Minolta XG-A</p>
                <p>50mm lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='SF' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/San Francisco, CA/${item}`}/>
            ))}
            </div>
        </div>
        // <div style={{marginLeft: '30px'}}>
            // <h1>San Francisco, California</h1>
            // <p>March 2020</p>
            // <p>unedited 35mm film (Fujifilm Superia Xtra 400)</p>
            // <p>Minolta XG-A</p>
            // <p>50mm lens</p>
        // </div>
    )
}

export default Sf;