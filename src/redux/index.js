import { persistStore, persistReducer } from 'redux-persist'

import ReduxPersist from './config/reduxPersist.config'
import configureStore from './configureStore'


const persistConfig = ReduxPersist.storeConfig
const {store} = configureStore(persistConfig)

const persistor = persistStore(store)

export default {store,persistor}