import React, {Component} from 'react';
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Loader.module.css';

export default class Loader extends Component {
    render() {
      return (
        <Spinner
          type="Plane"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          className={styles.Spinner}
        />
      );
    }
  }

  // export default function Loader({loading}) {
  //   return (
  //     <Spinner
  //         type="Puff"
  //         color="#00BFFF"
  //         height={100}
  //         width={100}
  //         timeout={3000} //3 secs
  //         className={styles.Spinner}
  //         visible={loading}
  //       />
  //   )
  // }