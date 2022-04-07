import { persistStore, persistReducer } from 'redux-persist'

import ReduxPersist from './config/reduxPersist.config'
import configureStore from './configureStore'
import reducers from './reducers'
import rootSaga from './sagas'


const persistConfig = ReduxPersist.storeConfig

const finalReducers = persistReducer(persistConfig,reducers)

const {store} = configureStore(finalReducers,rootSaga)

const persistor = persistStore(store)

export default {store,persistor}