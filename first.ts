/* 타입스크립트 특징 메모 */
// 타입스크립트는 자바스크립트의 변수, 매개변수, 리턴값에 타입을 지정하는 것
// 1.콜론을 이용한 타입지정, 2.type을 활용한 함수형 타입선언, 3.인터페이스, 4.제너릭 이 네가지는 JS로 변환될 때 사라진다.
// 즉 위 네가지가 없어지더라도 JS code로서 동작 가능하게 코드를 짜야한다.

// const a: string = '5';
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;

// const f: 5 = 5;
// const g: true =true;

/* 함수를 typescript로 표현하는 방법 */

/* 첫 번째 */
// function add(x:number, y:number): number {return x + y};

/* 두 번째 */
// const add: (x:number, y: number) => number = (x, y) => x + y;
// 위 화살표 함수는 아래와 같이도 작성 가능
// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;

// function add(x: number, y: number): number;
// function add(x, y) {
//   return x + y;
// }
// add를 두 번 선언하는 것은 원칙적으로 안되지만 첫번째 add에서는 타입만 지정했으므로 두번째 함수가 작동 가능하다.

/* 세 번째 */
// interface Add {
//   (x: number, y: number): number;
// }

// const add: Add = (x, y) => x + y;

/* 객체를 표현하는 방법 */
// const obj: { lat: number, lon:number} = { lat: 37.5, lon: 127.5};

/* 배열을 표현하는  첫 번째 방법 */
// const arr: string[] = ['123', '456'];

/* 배열을 표현하는  두 번째 방법 */
// const arr2: Array<number> = [123, 456];
// 꺽쇠 부분은 제너릭으로 추후 추가 학습 예정

/* 배열을 표현하는  세 번째 방법 */
const arr3: [number, number, string] = [123, 456, 'hello'];
// 튜플이라는 방식으로 길이가 고정된 배열, 타입스크립트에서는 들어오는 타입을 요소마다 지정할 수 있다.

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// const a = EDirection.Up;
// const c = EDirection.Left;

function walk(dir: EDirection) {}

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

/* 타입 애일리어스와 인터페이스의 상속(extends) */

type Animals = { breath: true };
type Mamals = Animals & { breed: true };
type Human = Mamals & { think: true };

const zerocho: Human = { breath: true, breed: true, think: true };

interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}

// interface B extends Human {
//   breed:true;
// }

// 위와 같이 타입과 인터페이스는 상호간에 상속이 가능하며, 별로도 동작하지 않는다.

const b: B = { breath: true, breed: true };

//타입과 다르 게 인터페이스는 다음과 같이 같은 이름으로 여러 번 선언할 수 있다.
// 매 선언시마다, 합쳐진다.

interface A {
  talk: () => void;
}

interface A {
  eat: () => void;
}

interface A {
  shit: () => void;
}

const a: A = { talk() {}, eat() {}, shit() {}, breath: true };
