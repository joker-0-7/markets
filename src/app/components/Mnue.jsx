import Link from "next/link";
const Mnue = ()=>{
    return(
        <div className="mnue">
            <div className="container">
            <div className="links">
                <ul className="d-flex mb-0">
                    <li><Link href='/best-sellers'>الرئسية</Link></li>
                    <li><Link href='/best-sellers'>الهدايا</Link></li>
                    <li><Link href='/best-sellers'>المنتجات</Link></li>
                    <li><Link href='/best-sellers'>المنتجات الجديده</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Mnue;