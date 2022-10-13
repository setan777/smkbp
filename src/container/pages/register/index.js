import React, { Fragment } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./register.css";
import authIlustration from "../../../assets/img/user_group_two_color.svg";
import { Link } from "react-router-dom";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label-form">
        {label}
      </label>
      <input className="input-form" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="label-form">
        {label}
      </label>
      <textarea className="input-text-area" {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// const CustomCheckbox = ({ children, ...props }) => {
//   const [field, meta] = useField(props, "checkbox");

//   return (
//     <>
//       <label className="checkbox" className="label-form">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.id || field.name} className="label-form">
        {label}
      </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Register() {
  return (
    <Fragment>
      <section className="register">
        <section className="kiri">
          <Link to="/smkbp" className="text-back">
            &#8592; Kembali
          </Link>
          <h1 className="text-formulir">Formulir Pendaftaran</h1>
          <Formik
            initialValues={{
              nama: "",
              jenisKelamin: "",
              tempatLahir: "",
              tglLahir: "",
              umur: "",
              agama: "",
              alamat: "",
              tlpn: "",
              email: "",
              kompetensi: "",
            }}
            validationSchema={Yup.object({
              nama: Yup.string()
                .min(3, "Must be at least 3 characters")
                .required("Required"),
              jenisKelamin: Yup.string()
                .oneOf([
                  "laki-laki",
                   "perempuan",
                  ])
                .required("required"),
              tempatLahir: Yup.string().required("Required"),
              tglLahir: Yup.date().required("Required"),
              umur: Yup.number().required("Required"),
              agama: Yup.string()
                .oneOf([
                  "islam",
                  "kristen",
                  "katolik",
                  "hindu",
                  "budha",
                  "lainya",
                ])
                .required("required"),
              alamat: Yup.string()
                .min(7, "Must be at least 7 characters")
                .required("Required"),
              kompetensi: Yup.string()
                .required("Required")
                .oneOf(["TKJ", "TKR", "TP", "OTKP"]),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 3000);
            }}
          >
            {(props) => (
              <Form>
                <h3 className="judul-h3">Identitas Calon Peserta Didik</h3>
                <CustomTextInput
                  label="Name"
                  name="nama"
                  type="text"
                  placeholder="Ade Bintang"
                />
                <CustomSelect
                  label="Jenis Kelamin"
                  name="jenis kelamin"
                  className="input-select"
                >
                  <option value="perempuan">Perempuan</option>
                  <option value="laki-laki">Laki-Laki</option>
                </CustomSelect>
                <CustomTextInput
                  label="Tempat Lahir"
                  name="tempatLahir"
                  type="text"
                  placeholder="Bekasi"
                />
                <CustomTextInput
                  label="Tanggal lahir"
                  name="tglLahir"
                  type="date"
                />
                <CustomTextInput
                  label="Umur"
                  name="umur"
                  type="number"
                  placeholder="16"
                />
                <CustomTextInput
                  label="Nomer Telepon"
                  name="tlpn"
                  type="number"
                  placeholder="081234567890"
                />
                <CustomTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="adebintang@gmail.com"
                />
                <CustomSelect
                  label="Agama"
                  name="agama"
                  className="input-select"
                >
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="hindu">Hindu</option>
                  <option value="budha">Budha</option>
                  <option value="katolik">Katolik</option>
                <CustomTextArea
                  label="Alamat Rumah"
                  name="alamat"
                  placeholder="Gang Dukuh No.10 RT01/10 Kec.Tambun Selatan Kab.Bekasi"
                />
                <CustomTextInput
                  label="Nomer Telepon"
                  name="tlpn"
                  type="number"
                  placeholder="081234567890"
                />
                <CustomTextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="adebintang@gmail.com"
                />
                </CustomSelect>
                <h3 className="judul-h3">Jurusan/peminatan</h3>
                <CustomSelect
                  label="Pilih Kompetensi Keahlian"
                  name="kompetensi"
                  className="input-select"
                >
                  <option value="TKJ">Teknik Komputer Dan Jaringan (TKJ)</option>
                  <option value="TKR">Teknik Kendaraan Ringan (TKR)</option>
                  <option value="TP">Teknik Permesinan (TP)</option>
                  <option value="OTKP">Otomatisai Tata Kelola Perkantoran (OTKP)</option>                  
                </CustomSelect>
                <button type="submit" className="btn-daftar">
                  {props.isSubmitting ? "Loading..." : "Kirim"}
                </button>
              </Form>
            )}
          </Formik>
        </section>
        <section className="kanan">
          <div className="bungkus-gambar">
            <img src={authIlustration} alt="Register Ilustrator" />
          </div>
          <h4 className="text-pendaftaran">PPDB SMK BINA PRESTASI</h4>
          <p className="text-desc">
            Terimakasih atas kepercayaan anda terhadap SMK BINA PRESTASI
            sebagai pilihan untuk meraih masa depan.
          </p>
        </section>
      </section>
    </Fragment>
  );
}

export default Register;
