import yayJpg from "../assets/yay.jpg";
import { Link } from "umi";

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/home">首页</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/waterfall">瀑布流页面</Link>
          </li>
          <li>
            <Link to="/scaling">缩放页面</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
