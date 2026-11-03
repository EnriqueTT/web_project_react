import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {

  return (
    <>
     <body class="page page__content">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
          <script type="module" src="./pages/index.js"></script>
          <script type="module" src="./components/FormValidator.js"></script>
          <script type="module" src="./components/Section.js"></script>
          <script type="module" src="./components/Card.js"></script>
          <script type="module" src="./components/Popup.js"></script>
          <script type="module" src="./components/PopupWithImage.js"></script>
          <script type="module" src="./utils/utils.js"></script>
          <script type="module" src="./utils/constants.js"></script>
      </body>
    </>
  )
}

export default App
