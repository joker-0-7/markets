import Link from "next/link";
const Nav = ()=>{
    return(
        <div className="nav-bar">
            <div className="container">
            <div className="informitions text-center pt-4">
                <h1>سوق بالعربي</h1>
            </div>
            <div className="buttons text-center mt-5">
                <Link href='/login' className="btn btn-primary ms-5">تسجيل الدخول</Link>
                <Link href='/sign-up' className="btn btn-dark">تسجيل مستخدم جديد</Link>
            </div>
            </div>
        </div>
    )
}
export default Nav;