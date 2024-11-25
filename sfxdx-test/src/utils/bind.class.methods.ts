function bindClassMethods(data: any) {
  const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(data));
  methods
    .filter((method) => method !== 'constructor')
    .forEach((method) => {
      data[method] = data[method].bind(data);
    });
}

export default bindClassMethods;
