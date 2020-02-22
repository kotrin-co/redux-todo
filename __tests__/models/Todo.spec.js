import Todo from '../../models/Todo';

describe('models/Todo.jsのテスト',()=>{
    it('this._textのgetterをもつ',()=>{
        const text = 'ダミー';
        const todo = new Todo(text);

        expect(todo.text).toStrictEqual(text);
    });

    it('hasCompletedメソッドを実行するとthis._completedが返る',()=>{
        const todo = new Todo('ダミー');
        expect(todo.hasCompleted()).toStrictEqual(todo._completed);
    });
    
    it('toggleメソッドを実行するとthis._completedの値が反転する',()=>{
        const todo = new Todo('ダミー');
        expect(todo._completed).toStrictEqual(false);
        todo.toggle();
        expect(todo._completed).toStrictEqual(true);
    });
});