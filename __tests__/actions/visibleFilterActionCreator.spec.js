import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    showAll,
    showActive,
    showCompleted
} from '../../actions/visibleFilterActionCreator';

describe('visibleActionCreatorのテスト',()=>{
    it('showAll関数',()=>{
        expect(showAll()).toStrictEqual({
            type:SHOW_ALL
        });
    });

    it('showActive関数',()=>{
        expect(showActive()).toStrictEqual({
            type:SHOW_ACTIVE
        });
    });

    it('showCompleted関数',()=>{
        expect(showCompleted()).toStrictEqual({
            type:SHOW_COMPLETED
        });
    });
});
