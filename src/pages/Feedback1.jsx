import React from 'react'
import Edit from '../img/edit.png'
import Remove from '../img/remove.png'
import { Link } from 'react-router-dom'
import Menua from '../components/Menua'
const Feedback1 = () => {
  return (
      <div className="feedback">
      <div className="content">
        <img src="https://lovefoodhatewaste.co.nz/wp-content/uploads/2017/09/Hands-holding-rice.jpg" alt="" />
        <div className="user">
          <img src="https://i.pinimg.com/1200x/cd/c6/98/cdc698db4ddfc2ffddd29430587a681e.jpg" alt="" />
          <div className="info">
            <span>Dương</span>
            <p>Đăng 3 Ngày Trước</p>
          </div>
          <div className="edit">
            <Link to={'/phanhoi?edit=2'}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Remove} alt="" />
           
                </div>
                </div>
            <h1> Thế giới với nỗ lực đẩy lùi nạn đói ở châu Phi</h1>
            <p>Kể từ năm 2000, nạn đói trên toàn thế giới đã giảm dần trong hơn 1 thập kỷ nhưng đã bắt đầu tăng trở lại vào năm 2014 và vẫn đang tiếp nối đà tăng cho đến nay. Theo Báo cáo Khủng hoảng Lương thực toàn cầu năm 2021 của Mạng lưới toàn cầu chống khủng hoảng lương thực (GNAFC) dựa trên thang IPC đối với an ninh lương thực cấp tính, năm 2020, khoảng 155 triệu người của 55 quốc gia đã rơi vào tình trạng khủng hoảng lương thực giai đoạn 3 trở lên (IPC Phrase 3), tăng thêm 20 triệu người so với năm 2019 và là con số lớn nhất trong vòng 5 năm qua. Nghiên cứu của các tổ chức quốc tế như Tổ chức Nông lương Liên hợp quốc (FAO), Chương trình Lương thực thế giới (WFP), Liên hợp quốc (UN)… cũng cho rằng, tình trạng đói cấp tính có thể sẽ gia tăng mạnh tại nhiều quốc gia trong năm 2021. Đặc biệt, châu Phi tiếp tục là điểm nóng của nạn đói khi phần lớn các quốc gia bị ảnh hưởng và ảnh hưởng nặng nề nhất đều nằm ở châu lục này. </p>
            <br />
            
            <p>Năm 2020, các quốc gia ở châu Phi không thể phát triển đồng đều khi có tới 98 triệu người phải đối mặt với tình trạng mất an ninh lương thực nghiêm trọng, chiếm 2/3 tổng số người khủng hoảng lương thực trên toàn thế giới. Với tình trạng suy dinh dưỡng, dù xảy ra nhiều nhất ở châu Á với 381 triệu người suy dinh dưỡng, châu Phi đứng thứ 2 với 250 triệu người suy dinh dưỡng. Nhưng tính theo tỷ lệ phần trăm, châu Phi là khu vực chịu ảnh hưởng nặng nề nhất và còn có thể nghiêm trọng hơn trong tương lai với 19,1% dân số toàn châu lục suy dinh dưỡng và sự gia tăng số lượng người thiếu ăn đang lan ra với tốc độ nhanh chóng. Con số trên gấp đôi tỷ lệ ở châu Á (8,3%) cũng như châu Mỹ Latinh và vùng Caribê (7,4%). Vì vậy, dự kiến đến năm 2030, hơn một nửa số dân bị đói kinh niên trên thế giới sẽ là người dân của “lục địa đen”. </p>
            <br />
            
            <p>Tại 13 quốc gia thuộc khu vực Trung và Nam Phi gồm: Angola, Cộng hòa Trung Phi, Congo, Cộng hòa Dân chủ Congo, Eswatini, Lesotho, Madagascar, Malawi, Mozambique, Namibia, Cộng hòa Thống nhất Tanzania, Zambia, Zimbabwe, 40,2 triệu người đang trong cơn khủng hoảng lương thực giai đoạn 3 trở lên đã chiếm khoảng 26% tổng số người thiếu đói trên toàn thế giới. .</p>
        </div>
      <Menua/>
    </div>    
  )
}

export default Feedback1
