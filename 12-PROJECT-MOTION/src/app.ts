import { ImageComponent } from './components/page/item/image.js';
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/watch?v=jBLc76LpfLs'
    );
    const note = new NoteComponent('Note Title', 'Note Body');
    const todo = new TodoComponent('Todo Title', 'Todo Item');

    this.page.addChild(image);
    this.page.addChild(video);
    this.page.addChild(note);
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가한다.
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
