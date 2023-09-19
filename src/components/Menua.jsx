    import React from 'react'
    import { Link } from "react-router-dom";
    import Chat from '../pages/chat'
    const Menua = () => {

        const posts = [
            {
                id: 1,
                title:"Đừng quay lưng lại.",
                desc:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris lorem.",
                img:"https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-d-img1.jpg",
            },
            {
                id: 2,
                title:"Đừng quay lưng lại.",
                desc:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris lorem.",
                img:"https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-d-img3.jpg",
            },
            {
                id: 3,
                title:"Đừng quay lưng lại.",
                desc:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend auctor, nisi elit consequa, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris lorem.",
                img:"https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-img3.jpg",
            },
            {
                id: 4,
                title:"Clean Water. Healthy Kids. Happy People.",
                desc:"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.  lorem.",
                img:"https://rightcause.qodeinteractive.com/wp-content/uploads/2020/03/h1-d-img2.jpg",
            },
        ];
      return (
        <div className="menu">
          <h1>Phản Hồi Khác</h1>
          {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <Link className="link" to={`/post/${post.id}`}>
                <button>Đọc Thêm</button>
                </Link>
                <Chat />
            </div>
            
          ))}
        </div>
        
      );
    };
    
    export default Menua
    