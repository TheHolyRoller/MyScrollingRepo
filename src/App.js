import logo from './logo.svg';
import './App.css';
import { Animator, ScrollPage,  ScrollContainer, Sticky, StickyIn, FadeIn, Move, MoveIn,  ZoomIn,  batch, Zoom, Fade, MoveOut } from 'react-scroll-motion';
//Imports for each tag go here

//Personal Access Token
//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
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const FadeUp = batch(Fade(), Sticky(), Move());


function App() {
  return (
    <ScrollContainer>
    <ScrollPage page={0}>
    <Animator  animation={batch(Sticky(), Fade(0, 1), MoveOut(0, -200))}
    >

      <h1 className="firstMessage" > Let me show you scroll animation!</h1>

         </Animator>
    </ScrollPage>
    <ScrollPage page={1}>
    <Animator animation={ ZoomInScrollOut } >

      <h1> Fade it</h1>


    </Animator>
    </ScrollPage>


    <ScrollPage page={2}>
    <Animator animation={ FadeUp } >

      <h1> WOW!</h1>


    </Animator>
    </ScrollPage>


    <ScrollPage page={ 3 }>
    <div className="section-3">

    <h2>

    <Animator animation={ MoveIn(-1000, 0) } >

      Yo 😎


    </Animator>

    <Animator animation={ MoveIn(1000, 0) } >

    What's good ma Dawg 🐶


  </Animator>


  <Animator animation={ MoveOut(1000, 0) } >

  Diamonds on ma chain ⛓️ ♦️


</Animator>

<Animator animation={ MoveOut(-1000, 0) } >

Yo 😎


</Animator>



    </h2>
    </div>

    </ScrollPage>


    <ScrollPage page={ 4 }>

    <Animator animation={batch(Fade(), Sticky())}>

    <h2>
    Done Dawg :doughnut:

    </h2>

    </Animator>


    </ScrollPage>




    </ScrollContainer>
  );
}

export default App;
