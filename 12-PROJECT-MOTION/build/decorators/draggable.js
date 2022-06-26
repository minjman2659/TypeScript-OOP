export function EnableDragging(Base) {
    return class DraggableItem extends Base {
        constructor(...args) {
            super(...args);
            this.registerEventListener('dragstart', (event) => {
                this.onDragStart(event);
            });
            this.registerEventListener('dragend', (event) => {
                this.onDragEnd(event);
            });
        }
    };
}
export function EnableHover(Base) {
    return class DragHoverArea extends Base {
        constructor(...args) {
            super(...args);
            this.registerEventListener('dragenter', (event) => {
                this.onDragEnter(event);
            });
            this.registerEventListener('dragleave', (event) => {
                this.onDragLeave(event);
            });
        }
    };
}
export function EnableDrop(Base) {
    return class DropArea extends Base {
        constructor(...args) {
            super(...args);
            this.registerEventListener('dragover', (event) => {
                event.preventDefault();
                this.onDragOver(event);
            });
            this.registerEventListener('drop', (event) => {
                event.preventDefault();
                this.onDrop(event);
            });
        }
    };
}
