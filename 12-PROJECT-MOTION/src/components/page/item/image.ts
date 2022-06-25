import { BaseComponent } from './../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder"><img class="image__thumbnail" /></div>
            <h2 class="page-item__title image__title"></h2>
           </section>`);

    //* innerHTML에 자바스크립트 코드를 바로 넣는 것은 위험하다
    //* 그래서 아래와 같이 타입 단언을 통해 한번 걸러줘야 함!
    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
