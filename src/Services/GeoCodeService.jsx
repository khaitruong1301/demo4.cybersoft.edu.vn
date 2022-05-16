import { handleChooseStartLoading, handleChooseEndLoading } from '@Utils/Common';
import { removeSpace, removeUnicode, showError, messageApp } from '@Utils/Common';
import _ from 'lodash';

const { messageNetWorkErr } = messageApp;

export const geoCodeService = {
  getGeoCodeByAddress(address, isLoading = false, isLoadingPopup = true) {
    const header = { isLoading, isLoadingPopup };

    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?address=${encodeURIComponent(
      address
    )}&language=vi&region=vi&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;

    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          return data.results;
        })
        .catch((error) => {
          showError(messageNetWorkErr);
          handleChooseEndLoading(header);
        })
    );
  },

  getGeoCodeByCoordinates(
    longitude,
    latitude,
    danhSachProvince,
    isLoading = false,
    isLoadingPopup = true
  ) {
    const header = { isLoading, isLoadingPopup };
    handleChooseStartLoading(header);
    const url = `${process.env.REACT_APP_URL_GEOCODE_GOOGLE}?latlng=${latitude},${longitude}&language=vi&region=vi&key=${process.env.REACT_APP_API_KEY_GOOGLE}`;
    return fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          handleChooseEndLoading(header);
          const results = data.results.map((result) => {
            const { address_components } = result;
            const provinces = address_components
              .reverse()
              .map((item) => {
                const provinceFormat = removeUnicode(removeSpace(item.long_name));
                return danhSachProvince.filter((province) => {
                  const provinceProvinceFormat = removeUnicode(removeSpace(province));
                  if (provinceProvinceFormat.length > provinceFormat.length) {
                    return provinceProvinceFormat.includes(provinceFormat);
                  }
                  return provinceFormat.includes(provinceProvinceFormat);
                });
              })
              .flat();
            return _.uniq(provinces);
          });
          const resultRemoveDuplicate = _.uniq(results.flat());
          return resultRemoveDuplicate;
        })
        .catch((error) => {
          showError(messageNetWorkErr);
          handleChooseEndLoading(header);
        })
    );
  },
};
