import React from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";

const PolicyPage = () => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/chinh-sach"
        title="Chính sách"
        middlePath=""
        descriptionTitle="Liên Hệ Với Chúng Tôi"
      />
      <div className="main_content ">
        <div className="section pt-4">
          <div className="container ">
            <h3 className="heading_s1"> Chính sách</h3>
            <p>
              Cám ơn quý khách đã quan tâm và truy cập vào website. Chúng tôi
              tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư
              của Quý khách.
            </p>
            <p>
              Chính sách bảo mật sẽ giải thích cách chúng tôi tiếp nhận, sử dụng
              và (trong trường hợp nào đó) tiết lộ thông tin cá nhân của Quý
              khách.
            </p>
            <p>
              Bảo vệ dữ liệu cá nhân và gây dựng được niềm tin cho quý khách là
              vấn đề rất quan trọng với chúng tôi. Vì vậy, chúng tôi sẽ dùng tên
              và các thông tin khác liên quan đến quý khách tuân thủ theo nội
              dung của Chính sách bảo mật.
            </p>
            <p>
              Chúng tôi chỉ thu thập những thông tin cần thiết liên quan đến
              giao dịch mua bán. Chúng tôi sẽ giữ thông tin của khách hàng trong
              thời gian luật pháp quy định hoặc cho mục đích nào đó. Quý khách
              có thể truy cập vào website và trình duyệt mà không cần phải cung
              cấp chi tiết cá nhân. Lúc đó, Quý khách đang ẩn danh và chúng tôi
              không thể biết bạn là ai nếu Quý khách không đăng nhập vào tài
              khoản của bạn.
            </p>

            <h3> Nghĩa vụ của người bán và người mua</h3>

            <p>
              Người bán giao đúng số lượng và phân loại người mua đã đặt theo
              thời gian giao hàng đã cam kết. Người mua nhận cuộc gọi của đơn vị
              vận chuyển, kiểm tra hàng và thanh toán theo tỗng giá trị đơn hàng
              đã chốt trước đó.
            </p>
            <h3>Thông tin về vận chuyển và giao nhận</h3>

            <p>Giao hàng bằng phương thức COD (Cash On Delivery)</p>

            <h4> Thời hạn ước tính cho việc giao hàng</h4>

            <p>Giao hàng toàn quốc trong vòng 01 đến 05 ngày tùy khu vực.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyPage;
