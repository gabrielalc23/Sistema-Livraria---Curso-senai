import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FilmesSlides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div className="slider-container mt-3">
                <Slider {...settings} className="gap-5">
                    <div className="bg-warning">
                        <img src="" alt="imagem" />
                    </div>
                    <div className="bg-warning">
                        <h3>2</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>3</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>4</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>5</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>6</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>7</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>8</h3>
                    </div>
                    <div className="bg-warning">
                        <h3>9</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}
export default FilmesSlides;