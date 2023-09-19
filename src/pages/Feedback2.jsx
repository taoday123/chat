import React from 'react'
import Edit from '../img/edit.png'
import Remove from '../img/remove.png'
import { Link } from 'react-router-dom'
import Menua from '../components/Menua'
const Feedback2 = () => {
  return (
      <div className="feedback">
      <div className="content">
        <img src="https://vnn-imgs-f.vgcloud.vn/2021/10/19/16/12-dieu-truong-hoc-phai-tuan-thu-khi-don-hoc-sinh-tro-lai.jpg" alt="" />
        <div className="user">
          <img src="https://i.pinimg.com/1200x/cd/c6/98/cdc698db4ddfc2ffddd29430587a681e.jpg" alt="" />
          <div className="info">
            <span>Dương</span>
            <p>Đăng 2 Ngày Trước</p>
          </div>
          <div className="edit">
            <Link to={'/phanhoi?edit=3'}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Remove} alt="" />
           
                </div>
                </div>
            <h1> Trở lại trường học sau đại dịch COVID-19</h1>
            <p>Trước tình hình khó khăn và phân hóa trên toàn cầu, mỗi quốc gia đang ở một giai đoạn khác nhau xét về cách thức và thời điểm dự kiến mở cửa lại trường học. Những quyết định này sẽ thường được đưa ra bởi chính quyền cấp trung ương hoặc cấp tiểu bang sau khi thảo luận với chính quyền địa phương. Sau khi quyết định có mở cửa lại trường học hay không, các chính quyền cần cân nhắc những lợi ích và nguy cơ về mặt giáo dục, y tế công cộng và kinh tế - xã hội trong bối cảnh địa phương.  </p>
            <br />
            
            <p>Lợi ích tốt nhất của trẻ em cần được đặt làm trung tâm khi đưa ra những quyết định trên. Tuy nhiên, việc mở cửa trường học lại được thực hiện cụ thể như thế nào thì mỗi trường sẽ có quyết định khác nhau. </p>
            <br />
            
            <p>Quyết định về các biện pháp phòng, chống dịch trong trường cũng như đóng cửa hay mở cửa trường học cần nhất quán với quyết định về các biện pháp giãn cách và y tế công cộng khác trong cộng đồng. Nhìn chung, việc mở cửa trường học ở các quốc gia không phải là quyết định độc lập, mà là một phần trong nhiều động thái nhằm dần mở cửa lại đất nước, bao gồm mở cửa các nhà máy, phương tiện công cộng và cơ sở kinh doanh.</p>
        </div>


      <Menua/>
    </div>    
  )
}

export default Feedback2
