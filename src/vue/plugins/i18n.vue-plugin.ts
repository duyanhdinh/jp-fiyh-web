export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$t = (...arg) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      const key = arg[0];

      const text = key.split(".").reduce((o, i) => {
        // if (args.length) {
        //     console.log(args, o, i)
        // }
        if (o) return o[i];
        // else if (args) return i(args)
      }, options);

      if (arg.length > 1) {
        return text(arg[1]);
      }

      return text;
    };

    app.provide("i18n", options);
  },
};
