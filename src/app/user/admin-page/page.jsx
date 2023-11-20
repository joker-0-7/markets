import Link from "next/link";
const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="container">
        <div className="row">
          <div className="col-12 bg-primary">
            <div className="nav">
              <ul className="d-flex w-100 justify-content-evenly text-light">
                <li>
                  <div className="link-add-product">
                    <Link href="/admin-page/all-product">
                      <span>المنتجات</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="link-add-product">
                    <Link href="/admin-page/add-product">
                      <span>اضافة منتج</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="link-add-product">
                    <Link href="/admin-page/all-product">
                      <span>اضافة قسم</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
