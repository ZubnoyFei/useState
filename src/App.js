import {Component, useState, useEffect, useMemo, useRef} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import AppHeader from "./components/appHeader/AppHeader";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import RandomChar from "./components/randomChar/RandomChar";
import CharList from "./components/charList/CharList";
import CharInfo from "./components/charInfo/CharInfo";

const App = () => {
    const [selectedChar, setChar] = useState(null);
    const onSelectedchar = (id) => {
        setChar(id);
    }


    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}
// class Slider extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//
//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
//
//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
//
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }
//
//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }
// }
//

const [text, setText] = useState('');

const myRef = useRef(1);

        return (
            <Container>
                <div className="slider w-50 m-auto">
                    <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                    <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1</button>
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1</button>
                        <button
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay</button>
                    </div>
                </div>
            </Container>
        )

// const calcValue = ()=> {
//             console.log('random');
//             return Math.random() * (50-1) +1;
// }


const getSomeImages = () => {
    console.log('fetching')
    return [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ]
}
const countTotal = (num) => {
    console.log('counting...');

    return num + 10
}


const Slider = (props) => {
    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    useEffect(() => {
        document.title = `Slide: ${slide}`;
    });

    function changeSlide(i) {
        setSlide(state => ({...state, slide: state.slide + i}));
    }

    function toggleAutoplay() {
        setAutoplay(state => ({...state, autoplay: !state.autoplay}));

        const total = useMemo(()=> {
            return countTotal(slide);
        }, [slide]);

        const style =
            useMemo(()=>({
            color: slide > 4 ? 'red': 'black'
            }), [slide])

        useEffect(()=>{
            console.log('styles!')
        }, [style]);

        return (
            <Container>
                <div className="slider w-50 m-auto">

                    {
                        getSomeImages().map((url, i) => {
                            return (
                                <img key={i} className="d-block w-100"
                                     src={url}
                                     alt="slide"/>
                            )
                        })
                    }
                    <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null}</div>
                    <div style={style} className="text-center mt-5">total slides: {total}</div>
                    <div className="buttons mt-3">
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => changeSlide(-1)}>-1
                        </button>
                        <button className="btn btn-primary me-2" onClick={() => changeSlide(1)}>+1</button>
                        <button className="btn btn-primary me-2" onClick={toggleAutoplay}>toggle autoplay</button>

                    </div>
                </div>
            </Container>
        )
    }
}

function App() {
    return (
        <Slider/>
    );
}

export default App;
