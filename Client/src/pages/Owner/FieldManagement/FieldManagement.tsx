import React from 'react';
import { ICONS } from '@/constants/owner/Content/content';

const FieldManagement: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
     
      {/* Main Content */}
      <div className="flex-1 p-[34px_38px] bg-[#f5f6fa]">
        {/* Promotional Banner */}
        <div className="bg-white p-[27px_24px] rounded-md mb-[34px] flex justify-between flex-wrap">
          <div className="flex-[1_1_300px] mb-5">
            <h2 className="text-[35px] font-bold font-roboto tracking-wider m-0 mb-[23px]">
              Tạo thêm sân trong cơ sở của bạn nào!!!
            </h2>
            <p className="text-base font-roboto tracking-wider m-0 mb-14">
              Cơ hội tăng đến 43% đơn đặt sân và 28% doanh thu khi tạo Voucher ưu đãi cho Khách hàng.
            </p>
            <button className="bg-[#cc440a] text-white rounded-md px-5 py-2.5 text-2xl font-semibold cursor-pointer flex items-center gap-[13px]">
              Tạo sân ngay!
              <img src="https://dashboard.codeparrot.ai/api/image/Z7otkzHWD6EJo6v1/vector.png" alt="arrow" className="w-8" />
            </button>
          </div>
          <img src={ICONS.FIELD} alt="field" className="w-[599px] h-[259px] flex-[1_1_300px]" />
        </div>

        {/* Court List Section */}
        <div className="bg-white p-9 rounded-md">
          <h3 className="text-xl font-bold font-roboto tracking-wider m-0 mb-7">
            Danh sách sân
          </h3>

          {/* Search Dropdown */}
          <div className="border border-black/70 rounded-[15px] px-5 py-3 flex justify-between items-center mb-7">
            <span className="text-lg font-roboto font-normal">Sân cầu lông Phạm Kha</span>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7otkzHWD6EJo6v1/drop-dow-2.png" alt="dropdown" className="w-[15px]" />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-[35px] mb-7 flex-wrap">
            <span className="text-lg font-roboto font-medium text-[#448ff0] cursor-pointer">Tất cả</span>
            {['Đang hoạt động', 'Đang chờ phê duyệt', 'Đang bảo trì'].map((text) => (
              <span key={text} className="text-lg font-roboto font-normal cursor-pointer">
                {text}
              </span>
            ))}
          </div>

          {/* Table Header */}
          <div className="bg-[#448ff033] rounded-md px-2.5 py-[22px] flex mb-5">
            <span className="flex-3 font-opensans font-bold text-[15px]">Tên sân</span>
            <span className="flex-2 font-opensans font-bold text-[15px]">Giá</span>
            <span className="flex-3 font-opensans font-bold text-[15px]">Loại hình thể thao</span>
            <span className="flex-3 font-opensans font-bold text-[15px]">Trạng thái</span>
            <span className="flex-1 font-opensans font-bold text-[15px]">Thao tác</span>
          </div>

          {/* Table Rows */}
          {[
            { status: 'Đang hoạt động', statusColor: '#20b202' },
            { status: 'Đang chờ phê duyệt', statusColor: '#b29802' },
            { status: 'Đang bảo trì', statusColor: '#cd1010' }
          ].map((item, index) => (
            <div key={index} className="border border-[#9a9a9a]/50 rounded-md px-4 py-5 flex mb-2.5">
              <span className="flex-3 font-opensans font-bold text-sm">Nguyễn Tuấn Anh</span>
              <span className="flex-2 font-opensans text-sm">15.000đ/h</span>
              <span className="flex-3 font-opensans font-semibold text-sm">Cầu lông</span>
              <span className="flex-3 font-opensans font-bold text-sm" style={{color: item.statusColor}}>{item.status}</span>
              <div className="flex-1 flex gap-4">
                <img src="https://dashboard.codeparrot.ai/api/image/Z7otkzHWD6EJo6v1/edit.png" alt="edit" className="w-5 cursor-pointer" />
                <img src="https://dashboard.codeparrot.ai/api/image/Z7otkzHWD6EJo6v1/bin.png" alt="delete" className="w-[17px] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FieldManagement;

