import { render } from '@testing-library/react';

import TodoContainer from './todo-container';

describe('TodoContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoContainer />);
    expect(baseElement).toBeTruthy();
  });
});
