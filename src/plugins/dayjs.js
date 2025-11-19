import dayjs from "dayjs";

export default {
  install(app, options) {
    app.config.globalProperties.$dayjs = {
      format(v, formatString) {
        return v ? dayjs(v).format(formatString || options.formatString) : '';
      }
    };
  }
};
