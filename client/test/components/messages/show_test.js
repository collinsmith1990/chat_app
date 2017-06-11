import { renderComponent , expect } from '../../test_helper';
import Show from '../../../src/components/messages/show';

describe('MessagesShow' , () => {
  let component;

  beforeEach(() => {
    //const props = {
      //messages: [
        //{ id: 1, content: 'test1' },
        //{ id: 2, content: 'test2' },
        //{ id: 3, content: 'test3' }
      //]
    //}
    const props = { message: { id: 1 , content: 'test1' } }

    component = renderComponent(Show, props);
  });

  it('has the messages-show class', () => {
    expect(component).to.have.class('messages-show');
  });

  it('displays the content of a message', () => {
    expect(component).to.contain('test1');
  });
});

