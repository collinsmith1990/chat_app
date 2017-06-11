import { renderComponent , expect } from '../../test_helper';
import Index from '../../../src/components/messages/show';

describe('MessagesIndex' , () => {
  let component;

  beforeEach(() => {
    const props = {
      messages: [
        { id: 1, content: 'test1' },
        { id: 2, content: 'test2' },
        { id: 3, content: 'test3' }
      ]
    }

    component = renderComponent(Index, props);
  });

  it('has the messages-index class', () => {
    expect(component).to.have.class('messages-index');
  });

  it('displays the content of a message', () => {
    expect(component).to.contain('test1');
  });
});


