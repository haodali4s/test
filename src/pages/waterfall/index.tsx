import { useEffect, useState } from "react";
import "./index.less";

export default function Waterfall() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // 生成图片的函数
    const generateImages = () => {
      const width = 300; // 统一宽度
      const heights = [200, 250, 180, 300, 220, 280, 160, 320, 240, 260]; // 不同高度
      const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#F333FF",
        "#FF33F5",
        "#FFFF33",
        "#FF3333",
        "#33FFFF",
        "#33FF33",
        "#FF9933",
      ]; // 不同颜色

      const urls = heights.map((height, index) => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        // 填充颜色
        ctx.fillStyle = colors[index];
        ctx.fillRect(0, 0, width, height);

        // 添加简单文字标识
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText(`图片 ${index + 1}`, 20, 30);

        return canvas.toDataURL("image/png");
      });

      setImageUrls(urls);
    };

    generateImages();
  }, []);

  return (
    <div className="container">
      {imageUrls.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`生成的图片 ${index + 1}`}
          onLoad={(e) => {
            const img = e.target;
            img.style.gridRowEnd = `span ${Math.ceil(img.height / 3)}`;
          }}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
}
