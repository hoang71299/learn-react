import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer/index'
import NavigationMenu from './components/NavigationMenu/index'
import Content from './components/Content/index'
function App() {
  return (
    <>
      <Header/>
      <NavigationMenu/>
      <Content text="Content 1" number={10} active={true}/>
      <MainContent/>
      <Content text="Content 2" number={5} active={false}/>
      <Footer/>
    </>
  )
}

export default App
