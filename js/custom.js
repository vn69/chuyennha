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
                              <h5 class="text-uppercase text-bold text-center w-100 my-2 mh-40 d-flex align-items-center justify-content-center">${data2[i].text}</h5>
                            </div>
                        `;
    
        projects2.appendChild(col);
      }
    
      const projects3 = document.getElementById("projects3");
      const data3 = [
        {
          title: "TIẾP NHẬN YÊU CẦU",
          des: "Quý khách vui lòng liên hệ với Thành Đạt Post qua HOTLINE hoặc để lại thông tin đăng ký. Đội ngũ chúng tôi sẽ tiếp nhận và hỗ trợ nhanh chóng.",
        },
        {
          title: "KHẢO SÁT, BÁO GIÁ & KÝ HỢP ĐỒNG",
          des: "Nhân viên Thành Đạt Post sẽ đến khảo sát trực tiếp, tư vấn chi tiết và báo giá hoàn toàn miễn phí. Nếu quý khách đồng ý, hợp đồng sẽ được ký kết với khoản đặt cọc tối thiểu 20% giá trị hợp đồng.",
        },
        {
          title: "ĐÓNG GÓI & VẬN CHUYỂN",
          des: "Chúng tôi sẽ lên lịch làm việc cụ thể, điều phối nhân lực, phương tiện, vật liệu đóng gói và trang thiết bị cần thiết. Mọi khâu đóng gói, tháo lắp đều do đội ngũ chuyên nghiệp, được đào tạo kỹ lưỡng thực hiện.",
        },
        {
          title: "LẮP ĐẶT & BÀN GIAO",
          des: "Thành Đạt Post tiến hành lắp đặt và bàn giao toàn bộ tài sản theo đúng hiện trạng ban đầu. Trường hợp xảy ra hư hỏng hay mất mát, chúng tôi cam kết bồi thường 100% theo giá trị thực tế.",
        },
        {
          title: "NGHIỆM THU & THANH TOÁN",
          des: "Sau khi hoàn tất quá trình vận chuyển, quý khách kiểm tra lại toàn bộ đồ đạc. Nếu hài lòng, vui lòng thanh toán phần chi phí còn lại cho nhân viên phụ trách.",
        },
      ];

      // ngắn
      const data30 = [
        {
          title: "TIẾP NHẬN YÊU CẦU",
          des: "Quý khách gọi HOTLINE hoặc để lại thông tin, chúng tôi sẽ liên hệ nhanh chóng.",
        },
        {
          title: "KHẢO SÁT & BÁO GIÁ",
          des: "Nhân viên đến khảo sát miễn phí, tư vấn và báo giá. Ký hợp đồng nếu đồng ý, đặt cọc 20%.",
        },
        {
          title: "ĐÓNG GÓI & VẬN CHUYỂN",
          des: "Sắp xếp nhân sự, xe, vật tư và thiết bị để đóng gói và vận chuyển chuyên nghiệp.",
        },
        {
          title: "LẮP ĐẶT & BÀN GIAO",
          des: "Lắp đặt và bàn giao đúng hiện trạng. Cam kết bồi thường nếu có hư hỏng, mất mát.",
        },
        {
          title: "NGHIỆM THU & THANH TOÁN",
          des: "Khách kiểm tra đồ đạc. Hài lòng thì thanh toán phần còn lại.",
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
                        <div class="quy_title">Tư vấn miễn phí</div>
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
          title: "ĐỘI NGŨ GIÀU KINH NGHIỆM – HƠN 10+ NĂM",
          des: "Đội ngũ nhân viên giàu kinh nghiệm, nhanh nhẹn, nhiệt tình, thân thiện và lịch sự.",
        },
        {
          image: "./images/5.jpg",
          title: "GIÁ CẢ CẠNH TRANH – BÁO GIÁ CHÍNH XÁC",
          des: "Cam kết báo giá rõ ràng, minh bạch và cạnh tranh nhất tại Hà Nội. Không phát sinh chi phí ngoài hợp đồng.",
        },
        {
          image: "./images/2.jpg",
          title: "PHỤC VỤ NHANH CHÓNG – 24/7",
          des: "Chỉ cần gọi – chúng tôi có mặt sau 10 phút! Sẵn sàng hỗ trợ bất kỳ lúc nào, kể cả cuối tuần và ngày lễ.",
        },
        {
          image: "./images/1.jpg",
          title: "CAM KẾT HOÀN TIỀN & BỒI THƯỜNG",
          des: "Hoàn tiền 100% và bồi thường đầy đủ nếu có sự cố gây hư hỏng, mất mát tài sản trong quá trình vận chuyển.",
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
            Dịch vụ chuyển văn phòng của <b>Thành Đạt Post</b> thực sự ấn tượng. 
            Nhân viên tận tâm và quy trình làm việc chuyên nghiệp đã giúp việc chuyển văn phòng của tôi diễn ra suôn sẻ và đúng tiến độ. 
            Tôi hoàn toàn yên tâm khi lựa chọn dịch vụ này.`,
        },
        {
          image: "./images/ava-2.jpeg",
          name: "Phương Thuý",
          comment: `
            Tôi đã sử dụng dịch vụ chuyển văn phòng trọn gói của <b>Thành Đạt Post</b> và thật sự rất hài lòng. 
            Mọi thứ được lên kế hoạch chi tiết và triển khai nhanh chóng, không làm gián đoạn công việc của công ty. 
            Đây là một dịch vụ đáng tin cậy!`,
        },
        {
          image: "./images/ava-3.jpeg",
          name: "Quang Hà",
          comment: `
            Tôi rất hài lòng với dịch vụ chuyển nhà trọn gói của công ty. 
            Đội ngũ làm việc chuyên nghiệp, đóng gói kỹ lưỡng và vận chuyển nhanh chóng. 
            Tôi sẽ chắc chắn giới thiệu <b>Thành Đạt Post</b> cho bạn bè và gia đình.`,
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
        dots: false,
        autoplay: true,
        autoplayTimeout: 12000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
        },
      });
    
      $(".owl-carousel").owlCarousel({
        loop: true,
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

