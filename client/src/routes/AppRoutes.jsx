import {Routes,Route} from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/common/Landing';
import Navigation1 from '../components/Navigation1';
import About from '../pages/common/About';
import HelpCenter from '../pages/common/HelpCenter';
import Contact from '../pages/common/Contact';
import Login from '../pages/common/Login';

function AppRoutes(){
    return (
        <>
        

        <Navigation1></Navigation1>
        <Routes>
            {/*common pages*/}
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/help' element={<HelpCenter></HelpCenter>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>

        </>
    )
}


export default AppRoutes
