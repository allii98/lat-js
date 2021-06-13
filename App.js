import React, { Component } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';

let namaSiswa = "Ali";
let nim = 17040103;
// bolean
let saklar = true;

let panjang = 5;
let lebar = 10;
// constanta
const pi = 3.81;
// tipe data object
let siswa = {
  nama : "budi",
  umur : 20
}
// tipe data array
let nilai = [70,75,80,85];

// array object

let kelas = [
  {
    id : 1,
    nama : "budi",
    umur : 20
  },
  {
    id: 2,
    nama : "toni",
    umur : 21
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // membuat funsi

  tampilkanAlert =() =>{
    Alert.alert('Hello', 'world', [
      
        {text: 'cancel'},
        {text: 'Ok'}
      
    ])
  }

  hitungLuasPersegi = (p,l) =>{
    return p*l;
  }

  hitung =() => {
    let hasil = this.hitungLuasPersegi(50,2);
    console.log(hasil);
    Alert.alert('Hasil', 'world', [
      
        {text: 'cancel'},
        {text: 'Ok'}
      
    ])
  }

  render() {
    return (
      <View>
        <Text>Hello {namaSiswa} </Text>
        <Text>NIM {nim} </Text>
        <Text>Hello {pi} </Text>
        <Text>Hello {siswa.nama} </Text>
        <Text>Umur {siswa.umur} </Text>
        {/* untuk print tipe data array */}
        <Text>Nilai {nilai[0]} </Text>
        {/* untuk print array object */}
        <Text>Kelas {kelas[0].nama} </Text>
        <Text>Kelas {kelas[0].umur} </Text>

        <Text>Kelas {kelas[1].nama} </Text>
        <Text>Kelas {kelas[1].umur} </Text>
        {/* menampilkan fungsi */}
        <Text>{this.hitungLuasPersegi(panjang,lebar)} </Text>
        {/* menjalankan alert */}
        <TouchableOpacity onPress={() => this.tampilkanAlert()}>
          <Text style={{backgroundColor:'crimson'}}>Hello</Text>
        </TouchableOpacity>
        {/* menjalankan fungsi hitung */}
        <TouchableOpacity onPress={() => this.hitung()}>
          <Text style={{backgroundColor:'crimson',marginTop:10}}>Hitung</Text>
        </TouchableOpacity>
        
        {/* untuk menampilan semua data array perlu menggunakkan flatlist */}

        <FlatList
        data={nilai}
        renderItem={({item, index}) => <Text>{item}</Text>}
        // untuk array biasa harus ada key
        keyExtractor={(item) => item.toString()}
        />

        <FlatList
        data={kelas}
        renderItem={({item, index}) =>
        <View style={{marginTop: 10}}>
          <Text>{item.nama}</Text>
          <Text>{item.umur}</Text>
        </View> }
        // untuk array biasa harus ada key
        keyExtractor={(item) => item.id}
        />

      </View>
    );
  }
}

export default App;
