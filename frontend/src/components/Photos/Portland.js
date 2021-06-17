import importAll from './importAll'

const images = importAll(require.context('../../images/FilmPhotoProject/Portland, Oregon', false, /\.(png|jpe?g|svg)$/));

const Portland = () => {
    return (
        <div className='galleryContainer'>
            <div className='description'>
                <h1>Portland, Oregon</h1>
                <p>2/12/20 - 2/15/20</p>
                <p>unedited 35mm film</p>
                <p>Minolta XG-A</p>
                <p>50mm lens</p>
            </div>
            <div className='image'>
            {Object.keys(images).map((item, index) => (
                <img 
                    alt='Portland' 
                    key={index} 
                    className='image'
                    src={`./../../images/FilmPhotoProject/Portland, Oregon/${item}`}/>
            ))}
            </div>
        </div>
    )
}

export default Portland;