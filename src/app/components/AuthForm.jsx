import Link from "next/link";
import { useState } from "react";

const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  phone,
  setPhone,
  address,
  setAddress,
  city,
  setCity,
  zip,
  setZip,
  handleSubmit,
  page,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="row g-3 ms-auto me-auto" onSubmit={handleSubmit}>
      <div className="heading">
        {page === "register" ? (
          <>
            <h1>تسجيل مستخدم جديد</h1>
            <h2>مرحبا</h2>
          </>
        ) : (
          <h1>تسجيل دخول</h1>
        )}
      </div>
      <div className="col-12">
        <input
          required
          type="email"
          placeholder="الايمل"
          value={email}
          className="form-control ps-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="bi bi-envelope"></i>
      </div>
      <div className="col-12">
        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="كلمه المرور"
          value={password}
          className="form-control ps-4"
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <i
            className="bi bi-eye"
            role="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          ></i>
        ) : (
          <i
            className="bi bi-eye-slash"
            role="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          ></i>
        )}
      </div>
      {page === "register" && (
        <>
          <div className="col-12">
            <input
              required
              type="text"
              placeholder="الاسم"
              value={name}
              className="form-control ps-4"
              onChange={(e) => setName(e.target.value)}
            />
            <i className="bi bi-person"></i>
          </div>
          <div className="col-12">
            <input
              required
              type="text"
              placeholder="رقم الهاتف"
              value={phone}
              className="form-control ps-4"
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className="bi bi-telephone"></i>
          </div>
          <div className="col-12">
            <input
              required
              type="text"
              placeholder="المدينه"
              value={city}
              className="form-control ps-4"
              onChange={(e) => setCity(e.target.value)}
            />
            <i className="bi bi-geo-alt"></i>
          </div>
          <div className="col-12">
            <input
              required
              type="text"
              placeholder="العنوان"
              value={address}
              className="form-control ps-4"
              onChange={(e) => setAddress(e.target.value)}
            />
            <i className="bi bi-crosshair"></i>
          </div>
          <div className="col-12">
            <input
              required
              type="text"
              placeholder="الرمز البريدي"
              value={zip}
              className="form-control ps-4"
              onChange={(e) => setZip(e.target.value)}
            />
            <i className="bi bi-mailbox"></i>
          </div>
        </>
      )}
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary w-100">
          تسجيل
        </button>
        {page === "register" ? (
          <Link href="/login" className="d-block mt-2">
            هل لديك حساب بالفعل ؟
          </Link>
        ) : (
          <Link href="/sign-up" className="d-block mt-2">
            تسجيل حساب جديد
          </Link>
        )}
      </div>
    </form>
  );
};
export default AuthForm;
