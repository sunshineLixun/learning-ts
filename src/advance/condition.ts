// 条件类型

interface MapObj2 {
  name: string;
}

/**
 * 从MapObj2过滤掉可以赋值给MapObj的类型
 * 如果MapObj2中的每一个属性都能对应上MapObj中的每一个属性就返回never，反之返回MapObj2
 */
//type excludeObj = MapObj2
type excludeObj = Exclude<MapObj2, MapObj>;

/**
 * 从MapObj中抽取可以赋值给MapObj2的类型
 * 如果能抽取任何一个属性，则返回MapObj类型，反之不能抽取任何一个属性，返回never
 * 方便理解：取交集。 或者是MapObj是否能在MapObj2提取存在的属性
 */
type extractObj = Extract<MapObj, MapObj2>;

// 个人理解： 忽略、剔除MapObj某些属，保留剩下的属性。
// type OmitObj = {
//   gender: boolean;
// }
type OmitObj = Omit<MapObj, "name" | "age">;

type NullString = string | null | undefined;

// 剔除null 或者 undefined 类型 。
// type NonNullableObj = string
type NonNullableObj = NonNullable<NullString>;

// type functionType = number
type functionType = ReturnType<() => number>;

// type functionType1 = string
type functionType1 = ReturnType<() => string>;
