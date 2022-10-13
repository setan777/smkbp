import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "../../../assets/css/style.css";
import heroIllustrator from "../../../assets/img/hero_illustrator.svg";
import logoSekolah from "../../../assets/img/png-elementary-school-primary-education-high-school-school-class-logo-high-school-elementary-school-clipart.png";
import ilustratorFront from "../../../assets/img/IllustratorFront.png";
import registerIlustrator from "../../../assets/img/IllustratorRegister.svg";
import ilustratorSeleksi from "../../../assets/img/IlustratorSeleksi.svg";
import ilustratorBiodata from "../../../assets/img/IllustratorBiodata.svg";
import ilustratorPengumuman from "../../../assets/img/IllustratorPengumuman.png";
import Button from "../../../components/button.js";
import Card from "../../../components/card";
import Register from "../register";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFpaGFubXVoYW1tYWQiLCJhIjoiY2s4c2JsNnFxMGwzYjNocTVmanB6enZxaCJ9.o8UUzrOGDYjKQ7tvF5Kxtw";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 107.041169,
      lat: -6.278591,
      zoom: 3,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/raihanmuhammad/ckb5788p80uet1ip9iha7sv2e",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    new mapboxgl.Marker().setLngLat([107.041169, -6.278591]).addTo(map);
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/register" component={Register} />
        </Router>
        <header>
          <nav>
            <div className="logo">
              <img src={logoSekolah} alt="logo" />
            </div>
            <div className="menu-nav">
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#Beranda" className="menu-link">
                    Beranda
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#tata-cara" className="menu-link">
                    Tata Cara
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#tentang-kami" className="menu-link">
                    Tentang
                  </a>
                </li>
                <li className="menu-item">
                <a href="https://s.id/1kGF4" className="button">
               <Button title="Daftar" />
               </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container">
          <section id="header">
            <div className="title-main-header">
              <h3 className="text-school">SMK BINA PRESTASI</h3>
              <div className="divider"></div>
              <p className="text-description">
                Website ini digunakan sebagai fasilitas untuk memudahkan calon
                peserta didik baru guna mendaftarkan diri sebagai peserta didik
                baru.
              </p>
              <a href="https://www.smkbinaprestasi.sch.id/web/" className="button">
              <Button title="Selengkapnya" />
              </a>
            </div>
            <div className="img-header">
              <img
                src={heroIllustrator}
                alt="Illustrator"
                className="img-header"
              />
            </div>
          </section>
          <section id="tata-cara">
            <div className="title-header">
              <h4 className="text-title">Tata Cara</h4>
              <span>
                Berikut adalah tata cara pendaftaran seabgai calon peserta didik
                baru.
              </span>
            </div>
            <div className="content">
              <Card
                title="Pendaftaran"
                description="Siswa melakukan pendaftaran di website PPDB Sekolah yang diinginkan. Kemudian melakukan input data sesuai dengan biodata dan data asli dari calon pendaftar. Data akan digunakan sebagai validasi seleksi kelengkapan data-data siswa."
                image={registerIlustrator}
                alt="Pendaftaran"
              />
              <Card
                title="Seleksi Peserta"
                description="Sekolah melakukan analisa data dari calon peserta yang mendaftar dan melakuka rekap data sesuai dengan proses seleksi yang dilakukan oleh sistem. Jika peserta telah menyelesaikan unggah dan melengkapi data maka hanya tinggal menunggu saja."
                image={ilustratorSeleksi}
                alt="Seleksi Peserta"
              />

              <Card
                title="Pengumuman"
                description="Peserta dapat melakukan pengecekan hasil pengumuman pada website maupun melakukan kunjungan ke sekolah untuk melihat hasil apakah dinyatakan loloss dan sesuai dengan syarat guna melanjutkan ke tahap selanjutnya yaitu proses pendaftaran ulang peserta didik baru."
                image={ilustratorPengumuman}
                alt="Pengumaman"
              />
              <Card
                title="Daftar Ulang"
                description="Siswa dapat melakukan daftar ulang guna memverifikasi bahwa telah diterima disekolah tersebut. Daftar ulang ini bersifat wajib, apabila siswa lolos namun tidak mendaftarkan ulang maka akan dinyatakan gugur dan tidak dapat menjadi calon peserta didik baru di sekolah tempat siswa mendaftar."
                image={ilustratorBiodata}
                alt="Daftar Ulang"
              />
            </div>
          </section>
          <section id="cta-website">
            <div className="left-side">
              <h4 className="text-attention">
                Untuk melihat informasi PPDB lebih lengkap, Yuk kunjungi website
                sekolah kita!
              </h4>
            </div>
            <div className="right-side">
            <a href="https://www.smkbinaprestasi.sch.id/web/" className="button">
              <Button title="Selengkapnya" />
              </a>
            </div>
          </section>
          <section id="tentang-kami">
            <div className="title-header">
              <h4 className="text-title">Tentang Kami</h4>
              <span>Berikut adalah informasi mengenai sekolah kami.</span>
            </div>
          </section>
          <section className="about">
            <figure>
              <img src={ilustratorFront} alt="About Ilustrator" />
            </figure>
            <article>
              <p>
                Sekolah Menengah Kejuruan (SMK) Bina Prestasi
                merupakan lembaga pendidikan yang berada dibawah
                naungan Yayasan Bina Prestasi Islami ’97,
                yang memiliki Empat Program Keahlian yang terakreditasi “A”,
                yaitu Teknik Pemesinan, Teknik Kendaraan Ringan, Teknik Komputer Jaringan,
                dan Otomatisasi Tata Kelola dan Perkantoran.
              </p>
              <p>
                Pengisian form PPDB Online mohon diperhatikan data yang
                dibutuhkan yang nantinya akan dipakai dalam proses PPDB. Setelah
                proses pengisian form PPDB secara online berhasil dilakukan,
                calon siswa akan mendapat intruksi selanjutnya dari pihak Sekolah.
              </p>
            </article>
          </section>
          <section>
            <div className="title-header">
              <h4 className="text-title">Lokasi Kami</h4>
              <span className="text-lokasi-span">
                Ini adalah lokasi sekolah kami.
              </span>
            </div>
            <div className="mapContainer">
              <div ref={(el) => (this.mapContainer = el)} id="map" />
            </div>
          </section>
          <section className="contact" id="contact">
            <div className="contact-us">
              <p className="judul-contact">Contact Us</p>
              <p className="text-description">
                Info lebih lanjut bisa ditanyakan langsung kontak di bawah
              </p>

              <p className="nomer-text">Wa : 6281310849726 </p>
              <p className="nomer-text">Telp :  (021) 82605636 </p>
              <p className="nomer-text">Email : smk.binaprestasi@gmail.com </p>
            </div>
          </section>
          <footer>
            <p>&copy; 2022 SMK BINA PRESTASI </p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Home;
