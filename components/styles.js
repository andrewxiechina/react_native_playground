import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'transparent',
  },
  column: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: 'transparent',

  },
  container: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 15,
    flex: 1,
    backgroundColor: 'transparent',

  },
  containerRow: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 15,
    backgroundColor: 'transparent',

  },
  line:{
    flex:1,
    height:2,
    backgroundColor:'rgba(0,0,0,0.2)'
  },

  /* Buttons */
  btnBlock: {
    flex:1,
    margin: 0,
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'black',
  },
  btn: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  btnOutline: {
    flex: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  /* Border */
  border: {
    borderWidth: 1,
    backgroundColor: 'black',
  },

  /* backgroundColors */
  bgPrimary: {
    backgroundColor: '#de737b',
  },
  bgSecondary: {
    backgroundColor: '#ef8389'
  },
  c0: {
    color: '#000',
  },
  c1: {
    color: '#111',
  },
  c2: {
    color: '#222',
  },
  c3: {
    color: '#333',
  },
  c4: {
    color: '#444',
  },
  c5: {
    color: '#555',
  },
  c6: {
    color: '#666',
  },
  c7: {
    color: '#777',
  },
  c8: {
    color: '#888',
  },
  c9: {
    color: '#999',
  },
  ca: {
    color: '#aaa',
  },
  cb: {
    color: '#bbb',
  },
  cc: {
    color: '#ccc',
  },
  cd: {
    color: '#ddd',
  },
  ce: {
    color: '#eee',
  },
  cf: {
    color: '#fff',
  },
  a1: {
    color: 'rgba(0,0,0,0.1)',
  },
  a2: {
    color: 'rgba(0,0,0,0.2)',
  },
  a3: {
    color: 'rgba(0,0,0,0.3)',
  },
  a4: {
    color: 'rgba(0,0,0,0.4)',
  },
  a5: {
    color: 'rgba(0,0,0,0.5)',
  },
  a6: {
    color: 'rgba(0,0,0,0.6)',
  },
  a7: {
    color: 'rgba(0,0,0,0.7)',
  },
  a8: {
    color: 'rgba(0,0,0,0.8)',
  },
  a9: {
    color: 'rgba(0,0,0,0.9)',
  },
  bc0: {
    backgroundColor: '#000',
  },
  bc1: {
    backgroundColor: '#111',
  },
  bc2: {
    backgroundColor: '#222',
  },
  bc3: {
    backgroundColor: '#333',
  },
  bc4: {
    backgroundColor: '#444',
  },
  bc5: {
    backgroundColor: '#555',
  },
  bc6: {
    backgroundColor: '#666',
  },
  bc7: {
    backgroundColor: '#777',
  },
  bc8: {
    backgroundColor: '#888',
  },
  bc9: {
    backgroundColor: '#999',
  },
  bca: {
    backgroundColor: '#aaa',
  },
  bcb: {
    backgroundColor: '#bbb',
  },
  bcc: {
    backgroundColor: '#ccc',
  },
  bcd: {
    backgroundColor: '#ddd',
  },
  bce: {
    backgroundColor: '#eee',
  },
  bcf: {
    backgroundColor: '#fff',
  },
  ba1: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  ba2: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  ba3: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ba4: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  ba5: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ba6: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  ba7: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  ba8: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  ba9: {
    backgroundColor: 'rgba(0,0,0,0.9)',
  },

  /* Typography */
  h1: {
    fontSize: 30,
    fontWeight:'600',
  },
  h2: {
    fontSize: 20,
    fontWeight:'600',
  },
  h3: {
    fontSize: 15,
    fontWeight:'600',
  },
  h4: {
    fontSize: 12,
    fontWeight:'600',
  },
  h5: {
    fontSize: 11,
    fontWeight:'600',
  },
});

export default styles;
