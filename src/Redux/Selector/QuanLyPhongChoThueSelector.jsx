import { createSelector } from '@reduxjs/toolkit';
import { filterSearchValue } from '@Utils/Common';

const selectDanhSachPhongChoThue = (state) => state.QuanLyPhongChoThueReducer.danhSachPhongChoThue;

const selectChiTietPhongChoThue = (state) => state.QuanLyPhongChoThueReducer.chiTietPhongChoThue;

const selectBookingRoom = (state) => state.QuanLyPhongChoThueReducer.bookingRoom;

const selectTotalPriceBooking = (state) => state.QuanLyPhongChoThueReducer.totalPriceBooking;

const selectSearchValue = (state) => state.SearchReducer.searchValue;

const selectDanhSachPhongChoThueTheoViTri = createSelector(
  (state) => state.QuanLyPhongChoThueReducer.danhSachPhongChoThueTheoViTri,
  (danhSachPhongChoThueTheoViTri) => {
    if (!danhSachPhongChoThueTheoViTri?.length) return [];
    const result = danhSachPhongChoThueTheoViTri?.filter(
      (item, index, thisArr) => index === thisArr.findIndex((t) => t.name === item.name)
    );
    return result;
  }
);

const selectDanhSachPhongFilter = createSelector(
  selectDanhSachPhongChoThue,
  selectSearchValue,
  (danhSachPhongChoThue, searchValue) => {
    if (!searchValue.length) return danhSachPhongChoThue;
    const keyTypeFilterRoom = process.env.REACT_APP_KEY_FILTER_ROOM_LIST;
    const searchValueFormat = searchValue.trim().toLowerCase();
    const cloneDanhSachPhongChoThue = [...danhSachPhongChoThue];
    return filterSearchValue(searchValueFormat, cloneDanhSachPhongChoThue, keyTypeFilterRoom);
  }
);

export const quanLyPhongChoThueSelector = {
  selectDanhSachPhongChoThue,
  selectDanhSachPhongChoThueTheoViTri,
  selectChiTietPhongChoThue,
  selectDanhSachPhongFilter,
  selectBookingRoom,
  selectTotalPriceBooking,
};
