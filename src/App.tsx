import { styled } from 'styled-components';

const Child = styled.div`
  color: blue;
`;

const Wrapper = styled.div`
  display: flex;

  &:has(> ${Child}) {
    color: red;
  }
`;

function App() {
    return (
        <Wrapper>
            <Child className="spanClass">
                Fake app component
            </Child>
        </Wrapper>
    )
}

export default App
