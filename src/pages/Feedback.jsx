import React from 'react'
import Edit from '../img/edit.png'
import Remove from '../img/remove.png'
import { Link } from 'react-router-dom'
import Menua from '../components/Menua'
const Feedback = () => {
  return (
      <div className="feedback">
      <div className="content">
        <img src="https://images2.thanhnien.vn/Uploaded/nuvuong/2021_10_14/img-20210821-200348-3664.jpeg" alt="" />
        <div className="user">
          <img src="https://i.pinimg.com/1200x/cd/c6/98/cdc698db4ddfc2ffddd29430587a681e.jpg" alt="" />
          <div className="info">
            <span>Dương</span>
            <p>Đăng 2 Ngày Trước</p>
          </div>
          <div className="edit">
            <Link to={'/phanhoi?edit=1'}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Remove} alt="" />
           
                </div>
            </div>
            <h1> Kết quả nghiên cứu này cũng có thể giúp lý giải tại sao tải lượng virus ở mũi nhiều hơn ở họng</h1>
            <p>Một nghiên cứu đăng trên tờ New England Journal of Medicine vào ngày 19-3-2020 đề cập về tải lượng virus ở đường hô hấp của bệnh nhân nhiễm COVID-19 (tải lượng virus là số lượng các mảnh hoặc các thành phần của virus chứa trong một đơn vị thể tích). 

Trong nghiên cứu này, 17 bệnh nhân nhiễm COVID-19 có triệu chứng được lấy mẫu cùng lúc ở cả mũi và họng. Mẫu bệnh phẩm ở mũi được lấy ở vị trí cuốn mũi giữa hay vòm mũi họng. Kết quả cho thấy tải lượng virus cao được phát hiện sớm ngay sau khi xuất hiện triệu chứng, và tải lượng ở mũi cao hơn ở họng. 

Kết quả này cũng tương tự ở những bệnh nhân nhiễm COVID-19 không có triệu chứng, cho thấy khả năng gây lây lan virus ở nhóm bệnh nhân này. </p>
            <br />
            
            <p>Trong một nghiên cứu khác đăng trên tờ Nature Medicine vào ngày 23-4-2020, các nhà khoa học nhận thấy 2 loại tế bào niêm mạc mũi có khả năng là nơi nhiễm đầu tiên của SARS-CoV-2, đó là tế bào đài (tế bào tiết nhầy) và tế bào trụ có lông chuyển. 

Theo nghiên cứu này, hai loại tế bào niêm mạc mũi kể trên chứa nhiều nhất biểu hiện gene của ACE2 và TMPRSS2, là 2 protein giúp virus xâm nhập vào tế bào để gây bệnh. Hai loại protein này trước kia được tìm thấy nhiều ở tế bào biểu mô phế nang loại II của phổi. 

Cũng trong nghiên cứu này, ACE2 và TMPRSS2 còn được tìm thấy ở tế bào giác mạc và niêm mạc ruột, gợi ý khả năng lây lan qua mắt, hay đường tiêu hóa.

Như vậy 2 loại tế bào niêm mạc mũi là tế bào đài và tế bào trụ có lông chuyển có thể được xem là những tế bào đầu tiên nhiễm virus SARS-CoV-2 khi nó xâm nhập vào cơ thể người bệnh, và là nơi chứa virus. </p>
            <br />
            
            <p>Bên cạnh các biện pháp rửa tay bằng xà phòng hay nước sát khuẩn có cồn, che mũi miệng khi hắt hơi, tránh chạm tay vào mắt mũi miệng khi chưa rửa tay, giãn cách xã hội… việc đeo khẩu trang thường xuyên đóng vai trò quan trọng giúp phòng ngừa và giảm lây lan bệnh.  Kết quả này cũng tương tự ở những bệnh nhân nhiễm COVID-19 không có triệu chứng, cho thấy khả năng gây lây lan virus ở nhóm bệnh nhân này.Đeo khẩu trang vải ở nơi công cộng đã được CDC khuyến cáo từ ngày 3-4 cho tất cả người dân Mỹ, kể cả người khỏe mạnh, để ngăn ngừa lây lan COVID-19. Gần đây, việc đeo khẩu trang cũng đã được các nước châu Âu khuyến cáo cho người dân, vốn trước kia ít được chú trọng như là một biện pháp phòng chống dịch bệnh.</p>
        </div>
      <Menua/>
    </div>    
  )
}

export default Feedback
