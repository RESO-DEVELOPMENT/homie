import React from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";

const PolicyDeliveryPage = () => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/chinh-sach-van-chuyen"
        title="chính sách vận chuyển"
        middlePath=""
        descriptionTitle="Liên Hệ Với Chúng Tôi"
      />
      <div className="main_content ">
        <div className="section pt-4">
          <div className="container ">
            <h3 className="heading_s1">Chính sách vận chuyển</h3>

            <p>
              Giao hàng thông qua các đơn vị vận chuyển như GrabExpress, Be
              Delivery, Giao hàng Tiết Kiệm, J&T, Ninja Van, Giao Hàng Nhanh.
            </p>

            <p>
              Chính sách vận chuyển của chúng tôi rất đơn giản và tiện lợi cho
              khách hàng. Miễn phí vận chuyển sẽ áp dụng cho tất cả các đơn hàng
              có tổng giá trị từ 600,000đ trở lên, bất kể bạn ở tỉnh thành nào
              trên khắp cả nước.
            </p>
            <p>
              Điều này mang lại sự thuận lợi cho mọi người, đặc biệt là những
              người muốn mua sắm trực tuyến với giá trị đơn hàng lớn. Tuy nhiên,
              đối với những đơn hàng có giá trị dưới 600,000đ, chúng tôi sẽ áp
              dụng một khoản phí vận chuyển tùy thuộc vào vị trí của bạn.
            </p>
            <p>
              Nếu bạn ở trong khu vực nội thành Hồ Chí Minh (HCM), phí vận
              chuyển sẽ là 25,000đ. Đối với những người ở khu vực ngoại thành
              HCM, phí vận chuyển sẽ là 30,000đ.
            </p>
            <p>
              Chúng tôi cung cấp giá trị và linh hoạt cho việc mua sắm của bạn,
              giúp bạn tiết kiệm hơn khi bạn mua ít hơn mức giá trị tối thiểu để
              được miễn phí vận chuyển. Chúng tôi luôn cam kết đáp ứng nhu cầu
              của khách hàng một cách tốt nhất và mang đến trải nghiệm mua sắm
              dễ dàng và tiết kiệm. Đừng ngần ngại liên hệ với chúng tôi nếu bạn
              có bất kỳ câu hỏi hoặc cần thêm thông tin về chính sách vận chuyển
              của chúng tôi. Chúng tôi sẽ rất hân hạnh được phục vụ bạn!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyDeliveryPage;
