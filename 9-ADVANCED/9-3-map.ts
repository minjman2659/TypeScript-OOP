{
  type Video = {
    title: string;
    author: string;
  };

  //* T 안에 들어오는 type의 key들을 optional로 바꿔주는 map type
  type Optional<T> = {
    [P in keyof T]?: T[P]; // type 안에서 []을 사용하는 것은 for...in 과 동일
  };
  //* T 안에 들어오는 type의 key들을 readonly로 바꿔주는 map type
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  //* T 안에 들어오는 type의 key들의 타입을 기존에 정의된 타입 혹은 null이 될 수 있도록 바꿔주는 map type
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  //* T 안에 들어오는 type의 key들의 타입을 Proxy로 감싸주는 map type
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxyify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  // Video type의 키들을 optional로 변환시키는 방법
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hello',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'kitty',
  };

  const videoRo: ReadOnly<Video> = {
    title: 'title',
    author: 'author',
  };
  videoRo.title = 'change!';

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };
}
