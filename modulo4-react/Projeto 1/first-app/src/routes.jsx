import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import App from './pages/App/app'
import Cadastro from './pages/Cadastro/cadastro'

export function AppRoutes() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>

    )
}
