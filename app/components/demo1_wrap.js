'use strict';

import React from 'react-native';
import styles from "../styles/main";
import Movie from "./demo1";

let {
  NavigatorIOS,
} = React;

class MovieWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '我的电影列表',
          component: Movie
        }}
        shadowHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255, 255, 255, 0.8)"
        tintColor="rgba(255, 255, 255, 0.8)"
        translucent={true}
      />
    )
  }
}

export { MovieWrap as default };
