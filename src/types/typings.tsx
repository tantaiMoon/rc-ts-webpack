

type ReactText = string | number
type ReactChild = ReactElement | ReactText
type ReactNode = ReactChild | boolean | null | undefined

// 如果一个函数返回一个react元素，那么他就是一个JSX元素构造器
type JSXElementConstructor<P> = ((props: P) => ReactElement | null)/* 函数组件 */ | (new (props: P) => Component<P, any> | null/* 类组件 */);

interface ReactElement<P = any, T extends string|JSXElementConstructor<any> = string> {
  type: T,
  props: P
}

interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>>{

}

type ComponentState = any;
declare class Component<P, S>{
  setState(state: any): void
  render(): ReactNode
}

interface ComponentClass<P = {}, S = ComponentState>{
  new(props:P):Component<P,S> // 函数前面加一个new，表示该函数是一个构造函数
}

// {type：ComponentClass<P>}
interface ComponentElement<P> extends ReactElement<P, ComponentClass<P>>{ }
// ComponentClass 是组件类

interface DOMElement extends ReactElement { }

interface ReactHTML {
  div: HTMLDivElement,
  span: HTMLSpanElement
}

interface DetailedReactHTMLElement<> extends DOMElement {
  type: keyof ReactHTML
}

//
interface FunctionComponent<P = {}>{
  (props: P): ReactElement | null
}

export declare function createElement<P>(
  type: string, // type是一个字符串，他就是一个原生的组件，div span p
  props: P,
  ...children: ReactNode[]
): ReactElement;

export declare function createElement<P>(
  type: FunctionComponent<P>, // type是一个函数，他就是一个函数组件
  props: P,
  ...children: ReactNode[]
): FunctionComponentElement<P>;

export declare function createElement<P>(
  type: ComponentClass<P>, // type是一个类，他就是一个类组件，是类的构造函数
  props: P,
  ...children: ReactNode[]
): ComponentElement<P>;