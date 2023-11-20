import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="main-image text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="heading">
              <h1 className="mb-3">تسوق معنا بكل سهولة ويسر</h1>
              <h6 className="mb-3">
                نوفر لك العديد من الميزات التي تسهل عليك التسوق بسهوله ونضمن لك
                ايضا حقك ومنها
              </h6>
            </div>
            <div className="list">
              <ul>
                <li>يسمح سوقنا بالعديد من الكروت البنكية للدفع اونلاين</li>
                <li>يوفر ايضا السوق ميزة الدفع عند الإستلام</li>
                <li>
                  يوجد فتره معاينه المنتج يمكنك استرداد المنتج في الفتره الخاصة
                  به
                </li>
              </ul>
            </div>
            <div className="btns">
              <Link href="/login" className="btn btn-primary ms-2">
                تسجيل الدخول
              </Link>
              <Link href="/sign-up" className="btn sign-up me-2 text-light">
                تسجيل مستخدم جديد
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="image text-center">
              <Image
                src="/main-page/main-one.png"
                height={550}
                width={450}
                alt="Paiement when recieving"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
