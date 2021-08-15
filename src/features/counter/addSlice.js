// store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
// const initialState = {
//   // username: "Phùng Chí Bảo", // State username với giá trị mặc định là "Guest"
//   // password: "123456",
//   number: 1,
//   // Có thể khai báo nhiều state khác nữa
// };

// Cấu hình slice
export const userSlice = createSlice({
  name: "user", // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
  initialState: {
    count: 0,
    listUser: ["Bảo", "Hiếu"],
  },
  // Reducers chứa các hàm xử lý cập nhật state
  reducers: {
    updateUsername: () => {},
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByCount: (state, action) => {
      state.count += action.payload;
    },
    decrementByCount: (state, action) => {
      state.count -= action.payload;
    },
    addUser: (state, action) => {
      state.listUser.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.listUser.filter(({ index }) => index !== action.payload);
    },
  },
});

// Export action ra để sử dụng cho tiện

export const {
  updateUsername,
  increment,
  decrement,
  incrementByCount,
  decrementByCount,
  addUser,
  deleteUser,
} = userSlice.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateUsername()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết

// Export reducer để nhúng vào Store
export default userSlice.reducer;
