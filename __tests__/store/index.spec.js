import store from '../../store/index';
import { SHOW_ALL } from '../../actions/visibleFilterActionCreator';

describe('store/index.jsのテスト',()=>{
    it('combineReducers()を使ったstateをもつ',()=>{
        expect(store.getState()).toStrictEqual({
            todos:[],
            visibleFilter:SHOW_ALL
        });
    });
});