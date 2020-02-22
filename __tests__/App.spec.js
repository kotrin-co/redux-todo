import App from '../App';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED
} from '../actions/visibleFilterActionCreator';

describe('App.jsのテスト',()=>{
    beforeEach(()=>{
        App.setVisibility(SHOW_ALL);
    });
    afterAll(()=>{
        App.setVisibility(SHOW_ALL);
        App.deleteAllTodos();
    });

    it('一番最初のtodoは１件もない',()=>{
        const todos = App.getTodosByVisibleFilter();
        expect(todos).toStrictEqual([]);
    });

    it('３件todoを追加',()=>{
        const length = 3;
        for(let i=0;i<length;i++){
            const text = 'ダミーテキスト'+i;
            App.addTodo(text);
        }
        const todos = App.getTodosByVisibleFilter();
        expect(todos.length).toStrictEqual(length);
    });

    it('追加した３件のtodoをdeleteAllTodosメソッドで全て削除する',()=>{
        const defaultLength = 3;
        const todos = App.getTodosByVisibleFilter();
        expect(todos.length).toStrictEqual(defaultLength);

        App.deleteAllTodos();
        const newTodos = App.getTodosByVisibleFilter();

        expect(newTodos.length).toStrictEqual(0);
    });

    it('SHOW_ACTIVE,SHOW_COMPLETEDの挙動を確認する',()=>{
        const length = 3;
        for(let i = 0;i<length;i++){
            const text = 'ダミーテキスト'+i;
            App.addTodo(text);
        }

        const todos = App.getTodosByVisibleFilter();
        expect(todos.length).toStrictEqual(length);

        App.toggleTodoCompleted(0);

        App.setVisibility(SHOW_ACTIVE);
        const activeTodos = App.getTodosByVisibleFilter();
        expect(activeTodos.length).toStrictEqual(length-1);
        expect(activeTodos.every(todo=> !todo.hasCompleted())).toStrictEqual(true);

        App.setVisibility(SHOW_COMPLETED);
        const completedTodos = App.getTodosByVisibleFilter();
        console.log(completedTodos,"@@@@");
        // expect(completedTodos.length).toStrictEqual(1);
        expect(completedTodos[0].hasCompleted()).toStrictEqual(true);
    });

    it('setVisibilityメソッドの引数に意図しない文字列が渡ってきたら例外を投げる',()=>{
        const errorFunc = ()=>{
            App.setVisibility('Invalid string.');
        };

        expect(errorFunc).toThrowError(
            new Error(`「${SHOW_ALL},${SHOW_ACTIVE},${SHOW_COMPLETED}」以外は入力できません`)
        );
    });
});