import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hai Sob</h1>
        <h2>Aplikasi Input data</h2>
        <form>
          Nama Depan:<br />
          <input type="text" name="namadepan" />
          <br />
          Nama Belakang:<br />
          <input type="text" name="namabelakang" /> <br />
          Nomer HP:<br />
          <input type="text" name="nomerhp" /> <br />
          Jenis Kelamin
          <br />
          <input name="jeniskelamin" checked="" type="radio" /> Laki Laki
          <input name="jeniskelamin" checked="" type="radio" /> Perempuan
          <br />
          Alamat : <br />
          <textarea rows="4" cols="50">
            Isi alamat kamu disini.
          </textarea>
          <br />
          <input type="submit" value="Kirim" />
        </form>
      </div>
    );
  }
}
