// 映射类型
interface MapObj {
  name: string
  age: number
  gender: boolean
}

// 只读类型
// type ReadonlyObj = {
//   readonly name: string;
//   readonly age: number;
//   readonly gender: boolean;
// }
type ReadonlyObj = Readonly<MapObj>

// 映射为 undefined类型
// type PartailObj = {
//   name?: string | undefined;
//   age?: number | undefined;
//   gender?: boolean | undefined;
// }
type PartailObj = Partial<MapObj>


// 映射部分类型
// type PickObj = {
//   age: number;
//   gender: boolean;
// }
type PickObj = Pick<MapObj, 'age' | 'gender'>

// 个人理解： 将联合类型 'boy'| 'girl' 中的属性 分别映射为MapObj类型
// type RecordObj = {
//   boy: MapObj;
//   girl: MapObj;
// }
type RecordObj = Record<'boy'| 'girl', MapObj>

let record: RecordObj = {
  boy: {
    name: 'tom',
    age: 1,
    gender: true
  },
  girl: {
    name: 'mei',
    age: 1,
    gender: false
  }
}

interface MapObj2 {
  name: string
}


// 个人理解： MapObj2 是否是收窄于MapObj，或者是MapObj2属性是否存在于MapObj
//type excludeObj = MapObj2
type excludeObj = Exclude<MapObj2, MapObj>

// 相对于Exclude是取反
type extractObj = Extract<MapObj, MapObj2>

// 个人理解： 忽略、剔除MapObj某些属，保留剩下的属性。
// type OmitObj = {
//   gender: boolean;
// }
type OmitObj = Omit<MapObj, 'name' | 'age'>