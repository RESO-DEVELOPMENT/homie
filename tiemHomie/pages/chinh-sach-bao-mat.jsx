import React from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";

const SecurityPolicyPage = () => {
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
            <h3 className="heading_s1">1. Thu thập thông tin cá nhân</h3>
            <p>
              Chúng tôi thu thập, lưu trữ và xử lý thông tin của bạn cho quá
              trình mua hàng và cho những thông báo sau này liên quan đến đơn
              hàng, và để cung cấp dịch vụ, bao gồm một số thông tin cá nhân:
              danh hiệu, tên, giới tính, ngày sinh, email, địa chỉ, địa chỉ giao
              hàng, số điện thoại, fax, chi tiết thanh toán, chi tiết thanh toán
              bằng thẻ hoặc chi tiết tài khoản ngân hàng.
            </p>
            <p>
              Chúng tôi sẽ dùng thông tin quý khách đã cung cấp để xử lý đơn đặt
              hàng, cung cấp các dịch vụ và thông tin yêu cầu thông qua website
              và theo yêu cầu của bạn
            </p>
            <p>
              Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý tài
              khoản của bạn; xác minh và thực hiện giao dịch trực tuyến, nhận
              diện khách vào web, nghiên cứu nhân khẩu học, gửi thông tin bao
              gồm thông tin sản phẩm và dịch vụ. Nếu quý khách không muốn nhận
              bất cứ thông tin tiếp thị của chúng tôi thì có thể từ chối bất cứ
              lúc nào.
            </p>
            <p>
              Chúng tôi có thể chuyển tên và địa chỉ cho bên thứ ba để họ giao
              hàng cho bạn (ví dụ cho bên chuyển phát nhanh hoặc nhà cung cấp).
            </p>
            <p>
              Chi tiết đơn đặt hàng của bạn được chúng tôi lưu giữ nhưng vì lí
              do bảo mật nên chúng tôi không công khai trực tiếp được. Tuy
              nhiên, quý khách có thể tiếp cận thông tin bằng cách đăng nhập tài
              khoản trên web. Tại đây, quý khách sẽ thấy chi tiết đơn đặt hàng
              của mình, những sản phẩm đã nhận và những sản phẩm đã gửi và chi
              tiết email, ngân hàng và bản tin mà bạn đặt theo dõi dài hạn.
            </p>

            <p>
              Quý khách cam kết bảo mật dữ liệu cá nhân và không được phép tiết
              lộ cho bên thứ ba. Chúng tôi không chịu bất kỳ trách nhiệm nào cho
              việc dùng sai mật khẩu nếu đây không phải lỗi của chúng tôi.
            </p>

            <p>
              {" "}
              Chúng tôi có thể dùng thông tin cá nhân của bạn để nghiên cứu thị
              trường. mọi thông tin chi tiết sẽ được ẩn và chỉ được dùng để
              thống kê. Quý khách có thể từ chối không tham gia bất cứ lúc nào.
            </p>

            <h3>2. Bảo mật</h3>

            <p>
              Người bán giao đúng số lượng và phân loại người mua đã đặt theo
              thời gian giao hàng đã cam kết. Người mua nhận cuộc gọi của đơn vị
              vận chuyển, kiểm tra hàng và thanh toán theo tỗng giá trị đơn hàng
              đã chốt trước đó.
            </p>

            <p>
              Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn
              chặn truy cập trái phép hoặc trái pháp luật hoặc mất mát hoặc tiêu
              hủy hoặc thiệt hại cho thông tin của bạn.
            </p>

            <p>
              Chúng tôi khuyên quý khách không nên đưa thông tin chi tiết về
              việc thanh toán với bất kỳ ai bằng e-mail, chúng tôi không chịu
              trách nhiệm về những mất mát quý khách có thể gánh chịu trong việc
              trao đổi thông tin của quý khách qua internet hoặc email.
            </p>

            <p>
              Quý khách tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay
              hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu
              trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho
              bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ
              liệu của hệ thống website. Mọi vi phạm sẽ bị tước bỏ mọi quyền lợi
              cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
            </p>

            <p>
              Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ
              quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những
              thông tin này cho các cơ quan pháp luật.
            </p>

            <p>
              Các điều kiện, điều khoản và nội dung của trang web này được điều
              chỉnh bởi luật pháp Việt Nam và tòa án Việt Nam có thẩm quyền xem
              xét.
            </p>
            <h3>3. Quyền lợi khách hàng</h3>
            <p>
              Quý khách có quyền yêu cầu truy cập vào dữ liệu cá nhân của mình,
              có quyền yêu cầu chúng tôi sửa lại những sai sót trong dữ liệu của
              bạn mà không mất phí. Bất cứ lúc nào bạn cũng có quyền yêu cầu
              chúng tôi ngưng sử dụng dữ liệu cá nhân của bạn cho mục đích tiếp
              thị.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPolicyPage;
