import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Đẩy Lùi Covid-19",
      desc:
        "COVID-19 được báo cáo lần đầu tiên vào cuối năm 2019 tại Vũ Hán, Trung Quốc và đã lan rộng ra trên toàn thế giới. Nó do SARS-CoV-2, một loại coronavirus được phát hiện vào năm 2019, gây ra. Nhiễm SARS-CoV-2 gây ra nhiều mức độ nặng của bệnh, từ không triệu chứng đến suy hô hấp cấp tính và tử vong. Các yếu tố nguy cơ bị bệnh nặng bao gồm tuổi già, suy giảm miễn dịch, bệnh đi kèm (ví dụ: tiểu đường, bệnh thận mạn tính) và mang thai. Vắc xin đã cho thấy phần nào hiệu quả trong việc ngăn ngừa lây truyền và rất hiệu quả trong việc ngăn ngừa bệnh nặng và tử vong.",
      img:
        "https://vku.udn.vn/uploads/2020/09/02/1599054233_118442383_188834979343141_3343956956328584493_o.jpg",
    },
    {
      id: 2,
      title: "Đẩy Lùi Nạn Đói.",
      desc:
        "Trẻ em nghèo, đặc biệt là nghèo đa chiều ở Việt Nam đã và đang hứng chịu nhiều thiệt thòi, thiếu hụt ở nhiều mặt trong cuộc sống Mặc dù đặt được nhiều thành tựu về kinh tế và giảm nghèo, Việt Nam vẫn phải đối mặt nhiều thách thức như chênh lệch về mức sống giữa các nhóm dân cư, đô thị hóa, biến đổi khí hậu và gần đây nhất là đại dịch COVID-19.",
      img:
        "https://img1.kienthucvui.vn/uploads/2021/02/11/hinh-anh-dep-ve-tre-em-ha-giang-ngheo_114007865.jpg",
    },
    {
      id: 3,
      title: "Cùng Quay Lại Trường.",
      desc:
        "Những xáo trộn trong giáo dục sẽ làm tăng sự bất bình đẳng đối với trẻ em đến từ các gia đình khó khăn và không có công cụ học trực tuyến như máy tính, điện thoại thông minh, hoặc Internet.Ngừng học trong thời gian dài sẽ dẫn đến khủng hoảng trong sự phát triển cũng như sẽ ảnh hưởng đến tâm lý của trẻ. Học tập trực tuyến chỉ có tác dụng khi trẻ em biết cách học một cách hiệu quả, và cách giữ an toàn cho bản thân trên không gian mạng.",
      img:
        "https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-img3.jpg",
    },
    {
      id: 4,
      title: "Bảo Tồn Động Vật.",
      desc:
        "Bảo tồn động vật hoang dã là việc thực hành bảo vệ các loài động vật hoang dã và môi trường sống của chúng. Mục tiêu của việc này là để đảm bảo rằng giới tự nhiên sẽ được bảo vệ để che chở cho các thế hệ tương lai và giúp loài người nhận ra tầm quan trọng của động vật hoang dã và môi trường hoang dã đối với con người và các loài khác nhau trên hành tinh này.",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kgalagadi_National_Park%2C_South_Africa_%283187521176%29.jpg/450px-Kgalagadi_National_Park%2C_South_Africa_%283187521176%29.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Đọc Thêm</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
