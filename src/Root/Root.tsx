import React, {FC} from "react";
import {Provider} from "react-redux";
import {Store} from 'redux';
import App from "../App/App";
import IAppState from "../Store/IAppState_interface";

interface IProps {
  store: Store<IAppState>
}

const Root: FC<IProps> = ({store}) => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
};

export default Root;
