import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="ProductTitle">Product</h1>
        <Link to="/newProduct">
          <button className="ProductAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sales performance" data={productData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://www.xda-developers.com/files/2020/11/apple-airpods-pro-header-image.jpg"
              alt="product"
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">123 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales: </span>
              <span className="productInfoValue">12123 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active: </span>
              <span className="productInfoValue">Yes </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Instock: </span>
              <span className="productInfoValue">no </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productFrom">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://www.xda-developers.com/files/2020/11/apple-airpods-pro-header-image.jpg"
                alt=""
                className="productUploadImage"
              />
              <label for="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
