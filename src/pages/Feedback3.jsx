import React from 'react'
import Edit from '../img/edit.png'
import Remove from '../img/remove.png'
import { Link } from 'react-router-dom'
import Menua from '../components/Menua'
const Feedback3 = () => {
  return (
      <div className="feedback">
      <div className="content">
        <img src="https://www.thiennhien.net/wp-content/uploads/2022/03/0903_DVbenbotuyetchung.jpg" alt="" />
        <div className="user">
          <img src="https://i.pinimg.com/1200x/cd/c6/98/cdc698db4ddfc2ffddd29430587a681e.jpg" alt="" />
          <div className="info">
            <span>Dương</span>
            <p>Đăng 2 Ngày Trước</p>
          </div>
          <div className="edit">
            <Link to={'/phanhoi?edit=4'}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Remove} alt="" />
           
                </div>
            </div>
            <h1> Bảo tồn động vật hoang dã</h1>
            <p>Bảo tồn động vật hoang dã là việc thực hành bảo vệ các loài động vật hoang dã và môi trường sống của chúng. Mục tiêu của việc này là để đảm bảo rằng giới tự nhiên sẽ được bảo vệ để che chở cho các thế hệ tương lai và giúp loài người nhận ra tầm quan trọng của động vật hoang dã và môi trường hoang dã đối với con người và các loài khác nhau trên hành tinh này. </p>
            <br />
            
            <p>Nhiều quốc gia có các cơ quan chính phủ và các tổ chức, thiết chế dành riêng cho bảo tồn động vật hoang dã, để hỗ trợ thực hiện chính sách được thiết kế để bảo vệ động vật hoang dã. Nhiều tổ chức phi lợi nhuận độc lập cũng góp phần thúc đẩy việc bảo tồn động vật hoang dã. Ngày nay, bảo tồn động vật hoang dã đã trở thành một thực tế ngày càng quan trọng do những tác động tiêu cực của các hoạt động của con người đối với động vật hoang dã. </p>
            <br />
            
            <p>Các nỗ lực nhằm tăng cường bảo vệ những loài quan trọng như tê giác, voi, hổ, tê tê, ngoài việc đóng góp trực tiếp cho hoạt động bảo tồn các loài động vật này còn mang ý nghĩa biểu tượng, tạo động lực cho việc bảo tồn tất cả các loài động vật hoang dã khác, góp phần ngăn chặn các loại thảm họa thiên nhiên, duy trì các dịch vụ sinh thái quan trọng đối với đời sống và sự phát triển kinh tế-xã hội của cộng đồng người dân, địa phương, quốc gia và quốc tế.</p>
        </div>
      <Menua/>
    </div>    
  )
}

export default Feedback3
