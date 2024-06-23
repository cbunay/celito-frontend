import { FluentProvider } from '@fluentui/react-components';
import PageLayoutBuilder from './components/PageLayoutBuilder/PageLayoutBuilder';
import { lightTheme } from './theme/brandTheme';

export function App() {
  return (
    <FluentProvider theme={lightTheme}>
      <PageLayoutBuilder />
    </FluentProvider>
  );
}

export default App;
