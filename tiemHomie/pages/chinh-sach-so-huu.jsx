import React from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";

const Ownership = () => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/chinh-sach-so-huu"
        title="Chính sách sở hữu"
        middlePath=""
        descriptionTitle="Liên Hệ Với Chúng Tôi"
      />
      <div className="main_content ">
        <div className="section pt-4">
          <div className="container">
            <h3 className="heading_s1"> Chính sách sỡ hữu</h3>
            <p>
              Giấy chứng nhận đăng ký kinh doanh, quyết định thành lập, và mã số
              thuế cá nhân là những tài liệu quan trọng đánh dấu sự hợp pháp hóa
              và xác định danh tính kinh doanh của một tổ chức hoặc cá nhân
              trong lĩnh vực kinh doanh và thuế.
            </p>
            <p>
              Giấy chứng nhận đăng ký kinh doanh (GPKD) số 54.G.8.007589 là tài
              liệu chứng nhận rằng một doanh nghiệp hoặc cá nhân đã được đăng ký
              kinh doanh và được cấp phép hoạt động theo quy định của pháp luật.
              Đây là một bước quan trọng trong quá trình thành lập và điều hành
              doanh nghiệp.
            </p>
            <p>
              Mã số thuế cá nhân 3501905238-001 là một mã số duy nhất được cấp
              cho một cá nhân hoặc doanh nghiệp để xác định và theo dõi các
              khoản thuế cá nhân hoặc doanh nghiệp phải nộp. Mã số thuế này là
              một phần quan trọng của quản lý thuế và đóng góp vào nguồn thu
              ngân sách quốc gia.
            </p>
            <p>
              Ngày cấp 12/04/2023 là ngày mà giấy chứng nhận đăng ký kinh doanh
              và mã số thuế cá nhân đã được cấp. Đây là thời điểm chính thức mà
              doanh nghiệp hoặc cá nhân được phép hoạt động hợp pháp và có trách
              nhiệm nộp thuế.
            </p>
            <p>
              Cơ quan thuế quản trực tiếp: Chi cục Thuế khu vực IV là nơi thực
              hiện quản lý và thu thuế đối với doanh nghiệp hoặc cá nhân được
              liên kết với mã số thuế và địa điểm đăng ký kinh doanh. Cơ quan
              này đảm bảo tuân thủ các quy định thuế và thu thuế để đảm bảo sự
              công bằng và tuân thủ pháp luật thuế.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ownership;
