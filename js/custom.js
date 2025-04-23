try {
    $(document).ready(function () {
      console.log("ready!");

      const projects11 = document.getElementById("projects11");
      const data11 = [
          {
            image: "./images/1.jpg",
          },
          {
            image: "./images/2.jpg",
          },
          {
            image: "./images/3.jpg",
          },
          {
            image: "./images/4.jpg",
          },
          {
            image: "./images/5.jpg",
          },
          {
            image: "./images/6.jpg",
          },
          {
              image: "./images/7.jpg",
          },
          {
              image: "./images/9.jpg",
          },
      ];
    
      for (let i = 0; i < data11.length; i++) {
        const col = document.createElement("div");
        col.className = "item";
    
        col.innerHTML = `
                  <img alt=""
                    class="lazyload blur-up"
                    src="./images/default.jpg"
                    data-src="${data11[i].image}"
                  />
              `;
    
        projects11.appendChild(col);
      }
    
 
    
      const projects = document.getElementById("projects");
      const data = [
        {
          image: "./images/icon-4-1.webp",
          text: "DỊCH VỤ UY TÍN",
        },
        {
          image: "./images/icon-3-1.png",
          text: "ĐẢM BẢO CHẤT LƯỢNG",
        },
        {
          image: "./images/icon-2-1.png",
          text: "ĐẦY ĐỦ CHỨNG NHẬN",
        },
        {
          image: "./images/icon-1-1.png",
          text: "CAM KẾT LÂU DÀI",
        },
      ];
    
      for (let i = 0; i < data.length; i++) {
        const col = document.createElement("div");
        col.className = "box_shadow";
    
        col.innerHTML = `
                  <img class="box_shadow_image" loading="lazy" src="${data[i].image}" alt="" />
                  <p class="text-center pl-2 w-100">${data[i].text}</p>
              `;
    
        projects.appendChild(col);
      }
    
      const projects2 = document.getElementById("projects2");
      const data2 = [
        {
          image: "./images/4.jpg",
          text: "Chuyển nhà trọn gói",
        },
        {
          image: "./images/3.jpg",
          text: "Chuyển văn phòng",
        },
        {
          image: "./images/img-3.jpg",
          text: "Chuyển kho xưởng",
        },
        {
          image: "./images/img-4.jpg",
          text: "Taxi Tải Thành Đạt Post",
        },
        {
          image: "./images/14.jpg",
          text: "Chuyển Nhà Bắc – Nam",
        },
        {
          image: "./images/12.jpg",
          text: "Vận chuyển nhà mới",
        },
      ];
    
      for (let i = 0; i < data2.length; i++) {
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 mb-3";
    
        col.innerHTML = `
                          <div class="" style="background: white; border-radius: 8px;     overflow: hidden;" >
                              <img alt=""
                                    class="w-100 cover lazyload blur-up"
                                    style="height: 220px"
                                    src="./images/default.jpg"
                                    data-src="${data2[i].image}"
                                />
                              <h5 class="text-uppercase text-bold text-center w-100 my-2 fs-18 mh-40 d-flex align-items-center justify-content-center" style="">${data2[i].text}</h5>
                            </div>
                        `;
    
        projects2.appendChild(col);
      }
    
      const projects3 = document.getElementById("projects3");
      const data3 = [
        {
          title: "TIẾP NHẬN YÊU CẦU",
          des: "Quý khách liên hệ tới Thành Đạt Post qua HOTLINE hoặc để lại thông tin đăng ký",
        },
        {
          title: "KHẢO SÁT BÁO GIÁ và ký HĐ",
          des: "Nhân viên của Thành Đạt Post sẽ sắp xếp lịch hẹn khảo sát, tư vấn và báo giá trực tiếp miễn phí tại nhà. Nếu đống ý và ký hợp đồng, quý khách đặt cọc tối thiểu 20% giá trị hợp đồng.",
        },
        {
          title: "ĐÓNG GÓI & VẬN CHUYỂN",
          des: "Thành Đạt Post sẽ lên lịch, sắp xếp nhân công, xe cộ, vật liệu bọc lót và trang thiết bị cần thiết. Việc đóng gói – tháo lắp luôn được Thành Đạt Post tuyển chọn và đào tạo bài bản.",
        },
        {
          title: "LẮP ĐẶT & BÀN GIAO",
          des: "Thành Đạt Post có trách nhiệm lắp đặt và bàn giao nguyên hiện trạng trước và sau khi vận chuyển. Trường hợp xảy ra đổ vỡ, mất mát chúng tôi cam kết bồi thường 100% giá trị tại thời điểm hiện tại.",
        },
        {
          title: "NGHIỆM THU THANH TOÁN",
          des: "Kết thúc quá trình vận chuyển khách hàng kiểm tra lại đồ đạc đã vận chuyển. Nếu khách hàng cảm thấy hài lòng thanh toán số tiền còn lại cho nhân viên chuyển nhà.",
        },
      ];
    
      for (let i = 0; i < data3.length; i++) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4";
    
        col.innerHTML = `
                    <div class="box_quy_trinh" >
                        <div class="quy_step">Bước ${i + 1}</div>
                         <div class="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="quy_title">${data3[i].title}</div>
                        <div class="quy_des">${data3[i].des}</div>
                      </div>
                  `;
    
        projects3.appendChild(col);
        
      }
      const col = document.createElement("div");
      col.className = "col-12 col-md-4";
  
      col.innerHTML = `
                    <div class="box_quy_trinh box_quy_trinh-last" >
                        <div class="quy_title">Đặt lịch chuyển nhà
                        nhanh chóng <br>qua Hotline</div>
                        <div class="text-center">
                            <a class="my-btn my-2 btn-white" href="tel:+84839941111">083.994.1111</a>
                        </div>
                    </div>
                `;
  
      projects3.appendChild(col);


    
      const projects4 = document.getElementById("projects4");
      const data4 = [
        {
          image: "./images/12.jpg",
          title: "ĐỘI NGŨ KINH NGHIỆM +15 NĂM",
          des: "Làm việc nhanh gọn, khỏe mạnh, nhiệt tình, vui vẻ, lịch sự.",
        },
        {
          image: "./images/5.jpg",
          title: "BÁO GIÁ TỐT NHẤT",
          des: "Được nhận báo giá đúng - chuẩn - tốt nhất tại thành phố Hà Nội",
        },
        {
          image: "./images/2.jpg",
          title: "PHỤC VỤ 24/7",
          des: "Gọi là có sau 10 phút, luôn hỗ trợ khách mọi lúc kể cả ngày nghỉ",
        },
        {
          image: "./images/1.jpg",
          title: "CAM KẾT HOÀN TIỀN",
          des: "Bồi thường 100% giá trị nếu gây hư hỏng tài sản trong khi vận chuyển",
        },
      ];
    
      for (let i = 0; i < data4.length; i++) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 mb-3";
    
        col.innerHTML = `
                          <div class="cam_box">
                              <img alt=""
                                    class="cam_image cover lazyload blur-up"
                                    src="./images/default.jpg"
                                    data-src="${data4[i].image}"
                                />
                              <div>
                                 <p class="cam_title">${data4[i].title}</p>
                                <p class="cam_des">${data4[i].des}</p>
                              </div>
                            </div>
                        `;
    
        projects4.appendChild(col);
      }
    
      const projects5 = document.getElementById("projects5");
      const data5 = [
        {
          image: "./images/1.jpg",
        },
        {
          image: "./images/2.jpg",
        },
        {
          image: "./images/3.jpg",
        },
        {
          image: "./images/4.jpg",
        },
        {
          image: "./images/5.jpg",
        },
        {
          image: "./images/6.jpg",
        },
        {
            image: "./images/7.jpg",
        },
        {
            image: "./images/9.jpg",
        },
      ];
    
      for (let i = 0; i < data5.length; i++) {
        const col = document.createElement("div");
        col.className = "col-6 col-md-3";
        col.innerHTML = `
                      <div class="hinh_box">
                          <img alt=""
                                    class="hinh_image cover lazyload blur-up"
                                    src="./images/default.jpg"
                                    data-src="${data5[i].image}"
                                />
                        </div>
                    `;
    
        projects5.appendChild(col);
      }
    
      const projects7 = document.getElementById("projects7");
      const data7 = [
        {
          image: "./images/ava-1.jpeg",
          name: "Trần Huyền",
          comment: `
						Dịch vụ chuyển văn phòng của <b>Thành Đạt Post</b> thực sự ấn tượng. Nhân viên tận tâm, quy trình bài bản giúp việc chuyển văn phòng diễn ra suôn sẻ và đúng kế hoạch. Tôi rất yên tâm khi sử dụng dịch vụ này.`,
        },
        {
          image: "./images/ava-2.jpeg",
          name: "Phương Thuý",
          comment: `
						Tôi đã sử dụng dịch vụ chuyển văn phòng trọn gói của <b>Thành Đạt Post</b> và rất hài lòng. Mọi thứ được lên kế hoạch chi tiết và thực hiện nhanh chóng, không ảnh hưởng đến công việc của công ty. Rất đáng tin cậy!`
        },
        {
          image: "./images/ava-3.jpeg",
          name: "Quang Hà",
          comment: `
						Tôi rất hài lòng với dịch vụ chuyển nhà trọn gói của <b>Thành Đạt Post</b>. Đội ngũ làm việc chuyên nghiệp, đóng gói cẩn thận và vận chuyển nhanh chóng. Không có món đồ nào bị hư hỏng. Chắc chắn sẽ giới thiệu <b>Thành Đạt Post</b> cho bạn bè và người thân.`
        },
          
       
       
      ];
    
      for (let i = 0; i < data7.length; i++) {
        const col = document.createElement("div");
        col.className = "item";
        col.innerHTML = `
                    <div class="box bg-white">
                <div class="client_id">
                  <div class="img-box">
                    <img alt=""
                                    class="gia-image cover lazyload blur-up"
                                    src="./images/default.jpg"
                                    data-src="${data7[i].image}"
                                />
                  </div>
                  <div class="client_detail">
                    <div class="client_info">
                      <h6 class="text-bold">
                         ${data7[i].name}
                      </h6>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div class="client_text">
                  <p>
                   ${data7[i].comment}
                  </p>
                </div>
              </div>
                  `;
    
        projects7.appendChild(col);
        console.log('projects7');
      }




    //   run slide
       
      //client section owl carousel
      $(".carousel-1").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
        },
      });
    
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1024: {
            items: 2,
          },
        },
      });
    });
    
} catch (error) {
    console.log(error)
}

