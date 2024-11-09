
import one from "../assets/images/one.jpg.jpg"
import two from "../assets/images/two.jpg.jpg"
import three from "../assets/images/three.jpg.jpg"
import nine from "../assets/images/nine.jpg.jpg"
import five from "../assets/images/five.jpg.jpg"
import six from "../assets/images/six.jpg.jpg"
import seven from "../assets/images/seven.jpg.jpg"
import eight from "../assets/images/eight.jpg.jpg"




function Container() {
    return (
        <div>

            <div className="container">

                <div className="image__container">
                    <img src={one} alt=" harry "></img>
                    <h2>Harry Potter</h2>
                </div>

                <div className="image__container">
                    <img src={two} alt=" titanic "></img>
                    <h2>Titanic</h2>
                </div>

                <div className="image__container">
                    <img src={three} alt=" Sparrow "></img>
                    <h2>Pirates of the caribbean</h2>
                </div>

                <div className="image__container">
                    <img src={nine} alt=" Batman "></img>
                    <h2>Batman</h2>
                </div>

                <div className="image__container">
                    <img src={five} alt=" Emma "></img>
                    <h2>Beauty and the Beast</h2>
                </div>

                <div className="image__container">
                    <img src={six} alt=" master"></img>
                    <h2> The Lord of the Ring</h2>
                </div>

                <div className="image__container">
                    <img src={seven} alt=" rock "></img>
                    <h2>Fast and Furies</h2>
                </div>

                <div className="image__container">
                    <img src={eight} alt=" avatar "></img>
                    <h2>Avatar</h2>
                </div>

            </div>




        </div>
    )
}


export default Container