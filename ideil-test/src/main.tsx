import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Root/>
    </Provider>
)
