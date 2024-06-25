import { FluentProvider } from '@fluentui/react-components';
import PageLayoutBuilder from './pages/PageLayoutBuilder/PageLayoutBuilder';
import { lightTheme } from './theme/brand.theme';
import { Provider } from 'react-redux';
import { store } from './app/store';

export function App() {
  return (
    <FluentProvider theme={lightTheme}>
      <Provider store={store}>
        <PageLayoutBuilder />
      </Provider>
    </FluentProvider>
  );
}

export default App;
