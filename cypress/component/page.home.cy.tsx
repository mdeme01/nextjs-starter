import Home from '@app/page';

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />);
  });
});
