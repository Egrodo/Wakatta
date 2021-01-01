export type pageTypes = 'home' | 'game';

export interface InitialState {
  currPage: pageTypes;
}

const initialState: InitialState = {
  currPage: 'home',
};

export default initialState;
