import dayjs from "dayjs";

declare module "dayjs" {
  function setDate(): number;
}

dayjs.setDate = () => {
  return 123;
};

// 申明全局属性、方法
declare global {
  const cName = "ts";
  namespace globalThis {
    export function doB(): void;
    function doSmt(): void;
  }
}

globalThis.doSmt = () => {};
